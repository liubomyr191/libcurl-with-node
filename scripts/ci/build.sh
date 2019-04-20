#!/bin/bash
# This must be run from the root of the repo, and the following variables must be available:
#  GIT_COMMIT
#  GIT_BRANCH
# In case it's needed to use the vars declared here, this should be sourced on the current shell
#  . ./scripts/ci/build.sh
set -euvo pipefail

###################
# Build nghttp2
###################
# nghttp2 version must match Node.js one
NGHTTP2_RELEASE=$(node -e "console.log(process.versions.nghttp2)")
NGHTTP2_DEST_FOLDER=$HOME/deps/nghttp2
./scripts/ci/build-nghttp2.sh $NGHTTP2_RELEASE $NGHTTP2_DEST_FOLDER >/dev/null
export NGHTTP2_BUILD_FOLDER=$NGHTTP2_DEST_FOLDER/build/$NGHTTP2_RELEASE
ls -al $NGHTTP2_BUILD_FOLDER/lib

###################
# Build OpenSSL
###################
# OpenSSL version must match Node.js one
OPENSSL_RELEASE=$(node -e "console.log(process.versions.openssl.replace(/\./g, '_'))")
OPENSSL_DEST_FOLDER=$HOME/deps/openssl

# We must pass KERNEL_BITS=64 on macOS to make sure a x86_64 lib is built, the default is to build an i386 one
# if [[ $TRAVIS_OS_NAME == "osx" ]]; then
if [[ "$OSTYPE" == "darwin"* ]]; then
  export KERNEL_BITS=64
fi
# no-async is required on alpine
params=()
if [[ -f /etc/alpine-release ]]; then
    params+=(no-async)
fi
./scripts/ci/build-openssl.sh $OPENSSL_RELEASE $OPENSSL_DEST_FOLDER "${params[@]}"
export OPENSSL_BUILD_FOLDER=$OPENSSL_DEST_FOLDER/build/$OPENSSL_RELEASE
ls -al $OPENSSL_BUILD_FOLDER/lib
unset KERNEL_BITS

###################
# Build zlib
###################
# Zlib version must match Node.js one
ZLIB_RELEASE=$(node -e "console.log(process.versions.zlib)")
ZLIB_DEST_FOLDER=$HOME/deps/zlib
./scripts/ci/build-zlib.sh $ZLIB_RELEASE $ZLIB_DEST_FOLDER
export ZLIB_BUILD_FOLDER=$ZLIB_DEST_FOLDER/build/$ZLIB_RELEASE
ls -al $ZLIB_BUILD_FOLDER/lib

###################
# Build libssh2
###################
LIBSSH2_RELEASE=1.8.2
LIBSSH2_DEST_FOLDER=$HOME/deps/libssh2
./scripts/ci/build-libssh2.sh $LIBSSH2_RELEASE $LIBSSH2_DEST_FOLDER
export LIBSSH2_BUILD_FOLDER=$LIBSSH2_DEST_FOLDER/build/$LIBSSH2_RELEASE
ls -al $LIBSSH2_BUILD_FOLDER/lib

###################
# Build libcurl
###################
LIBCURL_RELEASE=$(./scripts/ci/get-latest-libcurl-version.sh)
LIBCURL_DEST_FOLDER=$HOME/deps/libcurl
./scripts/ci/build-libcurl.sh $LIBCURL_RELEASE $LIBCURL_DEST_FOLDER
export LIBCURL_BUILD_FOLDER=$LIBCURL_DEST_FOLDER/build/$LIBCURL_RELEASE
ls -al $LIBCURL_BUILD_FOLDER/lib
export PATH=$LIBCURL_DEST_FOLDER/build/$LIBCURL_RELEASE/bin:$PATH
export LIBCURL_RELEASE=$LIBCURL_RELEASE

curl --version
curl-config --version
curl-config --libs
curl-config --static-libs
curl-config --prefix
curl-config --cflags

PUBLISH_BINARY=false
COMMIT_MESSAGE=$(git show -s --format=%B $GIT_COMMIT | tr -d '\n')
if [[ $GIT_BRANCH == `git describe --tags --always HEAD` || ${COMMIT_MESSAGE} =~ "[publish binary]" ]]; then
  PUBLISH_BINARY=true;
fi

# Build Addon
npm_config_build_from_source="true" npm_config_curl_config_bin="$LIBCURL_DEST_FOLDER/build/$LIBCURL_RELEASE/bin/curl-config" npm_config_curl_static_build="true" yarn install --frozen-lockfile

# Print addon deps for debugging
# if [[ $TRAVIS_OS_NAME == "osx" ]]; then
if [[ "$OSTYPE" == "darwin"* ]]; then
  otool -D ./lib/binding/node_libcurl.node
else
  cat ./build/node_libcurl.target.mk
  readelf -d ./lib/binding/node_libcurl.node
  ldd ./lib/binding/node_libcurl.node
fi

yarn test

# If we are here, it means the addon worked
# Check if we need to publish the binaries
if [[ $PUBLISH_BINARY == true && $LIBCURL_VERSION_TAG == LATEST ]]; then
  yarn pregyp package testpackage --verbose
  node scripts/module-packaging.js --publish "$(yarn pregyp reveal staged_tarball --silent)"
fi

# In case we published the binaries, verify if we can download them, and that they work
# Otherwise, unpublish them
INSTALL_RESULT=0
if [[ $PUBLISH_BINARY == true ]]; then
  INSTALL_RESULT=$(npm_config_fallback_to_build=false yarn install --frozen-lockfile > /dev/null)$? || true;
fi
if [[ $INSTALL_RESULT != 0 ]]; then
  node scripts/module-packaging.js --unpublish "$(yarn pregyp reveal hosted_tarball --silent)";
  false;
fi

# Clean everything
yarn pregyp clean
