// go to https://curl.haxx.se/libcurl/c/curl_easy_setopt.html
// Run the following:
// JSON.stringify(Array.prototype.map.call(document.querySelectorAll('.nroffip'), (item) => item.innerText), null, 2)
// Place right below
// The new file will be created on generated
const options = [
  'CURLOPT_VERBOSE',
  'CURLOPT_HEADER',
  'CURLOPT_NOPROGRESS',
  'CURLOPT_NOSIGNAL',
  'CURLOPT_WILDCARDMATCH',
  'CURLOPT_WRITEFUNCTION',
  'CURLOPT_WRITEDATA',
  'CURLOPT_READFUNCTION',
  'CURLOPT_READDATA',
  'CURLOPT_IOCTLFUNCTION',
  'CURLOPT_IOCTLDATA',
  'CURLOPT_SEEKFUNCTION',
  'CURLOPT_SEEKDATA',
  'CURLOPT_SOCKOPTFUNCTION',
  'CURLOPT_SOCKOPTDATA',
  'CURLOPT_OPENSOCKETFUNCTION',
  'CURLOPT_OPENSOCKETDATA',
  'CURLOPT_CLOSESOCKETFUNCTION',
  'CURLOPT_CLOSESOCKETDATA',
  'CURLOPT_PROGRESSFUNCTION',
  'CURLOPT_PROGRESSDATA',
  'CURLOPT_XFERINFOFUNCTION',
  'CURLOPT_XFERINFODATA',
  'CURLOPT_HEADERFUNCTION',
  'CURLOPT_HEADERDATA',
  'CURLOPT_DEBUGFUNCTION',
  'CURLOPT_DEBUGDATA',
  'CURLOPT_SSL_CTX_FUNCTION',
  'CURLOPT_SSL_CTX_DATA',
  'CURLOPT_CONV_TO_NETWORK_FUNCTION',
  'CURLOPT_CONV_FROM_NETWORK_FUNCTION',
  'CURLOPT_CONV_FROM_UTF8_FUNCTION',
  'CURLOPT_INTERLEAVEFUNCTION',
  'CURLOPT_INTERLEAVEDATA',
  'CURLOPT_CHUNK_BGN_FUNCTION',
  'CURLOPT_CHUNK_END_FUNCTION',
  'CURLOPT_CHUNK_DATA',
  'CURLOPT_FNMATCH_FUNCTION',
  'CURLOPT_FNMATCH_DATA',
  'CURLOPT_SUPPRESS_CONNECT_HEADERS',
  'CURLOPT_RESOLVER_START_FUNCTION',
  'CURLOPT_RESOLVER_START_DATA',
  'CURLOPT_ERRORBUFFER',
  'CURLOPT_STDERR',
  'CURLOPT_FAILONERROR',
  'CURLOPT_KEEP_SENDING_ON_ERROR',
  'CURLOPT_URL',
  'CURLOPT_PATH_AS_IS',
  'CURLOPT_PROTOCOLS',
  'CURLOPT_REDIR_PROTOCOLS',
  'CURLOPT_DEFAULT_PROTOCOL',
  'CURLOPT_PROXY',
  'CURLOPT_PRE_PROXY',
  'CURLOPT_PROXYPORT',
  'CURLOPT_PROXYTYPE',
  'CURLOPT_NOPROXY',
  'CURLOPT_HTTPPROXYTUNNEL',
  'CURLOPT_CONNECT_TO',
  'CURLOPT_SOCKS5_AUTH',
  'CURLOPT_SOCKS5_GSSAPI_SERVICE',
  'CURLOPT_SOCKS5_GSSAPI_NEC',
  'CURLOPT_PROXY_SERVICE_NAME',
  'CURLOPT_HAPROXYPROTOCOL',
  'CURLOPT_SERVICE_NAME',
  'CURLOPT_INTERFACE',
  'CURLOPT_LOCALPORT',
  'CURLOPT_LOCALPORTRANGE',
  'CURLOPT_DNS_CACHE_TIMEOUT',
  'CURLOPT_DNS_USE_GLOBAL_CACHE',
  'CURLOPT_DOH_URL',
  'CURLOPT_BUFFERSIZE',
  'CURLOPT_PORT',
  'CURLOPT_TCP_FASTOPEN',
  'CURLOPT_TCP_NODELAY',
  'CURLOPT_ADDRESS_SCOPE',
  'CURLOPT_TCP_KEEPALIVE',
  'CURLOPT_TCP_KEEPIDLE',
  'CURLOPT_TCP_KEEPINTVL',
  'CURLOPT_UNIX_SOCKET_PATH',
  'CURLOPT_ABSTRACT_UNIX_SOCKET',
  'CURLOPT_NETRC',
  'CURLOPT_NETRC_FILE',
  'CURLOPT_USERPWD',
  'CURLOPT_PROXYUSERPWD',
  'CURLOPT_USERNAME',
  'CURLOPT_PASSWORD',
  'CURLOPT_LOGIN_OPTIONS',
  'CURLOPT_PROXYUSERNAME',
  'CURLOPT_PROXYPASSWORD',
  'CURLOPT_HTTPAUTH',
  'CURLOPT_TLSAUTH_USERNAME',
  'CURLOPT_PROXY_TLSAUTH_USERNAME',
  'CURLOPT_TLSAUTH_PASSWORD',
  'CURLOPT_PROXY_TLSAUTH_PASSWORD',
  'CURLOPT_TLSAUTH_TYPE',
  'CURLOPT_PROXY_TLSAUTH_TYPE',
  'CURLOPT_PROXYAUTH',
  'CURLOPT_SASL_IR',
  'CURLOPT_XOAUTH2_BEARER',
  'CURLOPT_DISALLOW_USERNAME_IN_URL',
  'CURLOPT_AUTOREFERER',
  'CURLOPT_ACCEPT_ENCODING',
  'CURLOPT_TRANSFER_ENCODING',
  'CURLOPT_FOLLOWLOCATION',
  'CURLOPT_UNRESTRICTED_AUTH',
  'CURLOPT_MAXREDIRS',
  'CURLOPT_POSTREDIR',
  'CURLOPT_PUT',
  'CURLOPT_POST',
  'CURLOPT_POSTFIELDS',
  'CURLOPT_POSTFIELDSIZE',
  'CURLOPT_POSTFIELDSIZE_LARGE',
  'CURLOPT_COPYPOSTFIELDS',
  'CURLOPT_HTTPPOST',
  'CURLOPT_REFERER',
  'CURLOPT_USERAGENT',
  'CURLOPT_HTTPHEADER',
  'CURLOPT_HEADEROPT',
  'CURLOPT_PROXYHEADER',
  'CURLOPT_HTTP200ALIASES',
  'CURLOPT_COOKIE',
  'CURLOPT_COOKIEFILE',
  'CURLOPT_COOKIEJAR',
  'CURLOPT_COOKIESESSION',
  'CURLOPT_COOKIELIST',
  'CURLOPT_ALTSVC',
  'CURLOPT_ALTSVC_CTRL',
  'CURLOPT_HTTPGET',
  'CURLOPT_REQUEST_TARGET',
  'CURLOPT_HTTP_VERSION',
  'CURLOPT_HTTP09_ALLOWED',
  'CURLOPT_IGNORE_CONTENT_LENGTH',
  'CURLOPT_HTTP_CONTENT_DECODING',
  'CURLOPT_HTTP_TRANSFER_DECODING',
  'CURLOPT_EXPECT_100_TIMEOUT_MS',
  'CURLOPT_TRAILERFUNCTION',
  'CURLOPT_TRAILERDATA',
  'CURLOPT_PIPEWAIT',
  'CURLOPT_STREAM_DEPENDS',
  'CURLOPT_STREAM_DEPENDS_E',
  'CURLOPT_STREAM_WEIGHT',
  'CURLOPT_MAIL_FROM',
  'CURLOPT_MAIL_RCPT',
  'CURLOPT_MAIL_AUTH',
  'CURLOPT_TFTP_BLKSIZE',
  'CURLOPT_TFTP_NO_OPTIONS',
  'CURLOPT_FTPPORT',
  'CURLOPT_QUOTE',
  'CURLOPT_POSTQUOTE',
  'CURLOPT_PREQUOTE',
  'CURLOPT_APPEND',
  'CURLOPT_FTP_USE_EPRT',
  'CURLOPT_FTP_USE_EPSV',
  'CURLOPT_FTP_USE_PRET',
  'CURLOPT_FTP_CREATE_MISSING_DIRS',
  'CURLOPT_FTP_RESPONSE_TIMEOUT',
  'CURLOPT_FTP_ALTERNATIVE_TO_USER',
  'CURLOPT_FTP_SKIP_PASV_IP',
  'CURLOPT_FTPSSLAUTH',
  'CURLOPT_FTP_SSL_CCC',
  'CURLOPT_FTP_ACCOUNT',
  'CURLOPT_FTP_FILEMETHOD',
  'CURLOPT_RTSP_REQUEST',
  'CURLOPT_RTSP_SESSION_ID',
  'CURLOPT_RTSP_STREAM_URI',
  'CURLOPT_RTSP_TRANSPORT',
  'CURLOPT_RTSP_CLIENT_CSEQ',
  'CURLOPT_RTSP_SERVER_CSEQ',
  'CURLOPT_TRANSFERTEXT',
  'CURLOPT_PROXY_TRANSFER_MODE',
  'CURLOPT_CRLF',
  'CURLOPT_RANGE',
  'CURLOPT_RESUME_FROM',
  'CURLOPT_RESUME_FROM_LARGE',
  'CURLOPT_CURLU',
  'CURLOPT_CUSTOMREQUEST',
  'CURLOPT_FILETIME',
  'CURLOPT_DIRLISTONLY',
  'CURLOPT_NOBODY',
  'CURLOPT_INFILESIZE',
  'CURLOPT_INFILESIZE_LARGE',
  'CURLOPT_UPLOAD',
  'CURLOPT_UPLOAD_BUFFERSIZE',
  'CURLOPT_MIMEPOST',
  'CURLOPT_MAXFILESIZE',
  'CURLOPT_MAXFILESIZE_LARGE',
  'CURLOPT_TIMECONDITION',
  'CURLOPT_TIMEVALUE',
  'CURLOPT_TIMEVALUE_LARGE',
  'CURLOPT_TIMEOUT',
  'CURLOPT_TIMEOUT_MS',
  'CURLOPT_LOW_SPEED_LIMIT',
  'CURLOPT_LOW_SPEED_TIME',
  'CURLOPT_MAX_SEND_SPEED_LARGE',
  'CURLOPT_MAX_RECV_SPEED_LARGE',
  'CURLOPT_MAXCONNECTS',
  'CURLOPT_FRESH_CONNECT',
  'CURLOPT_FORBID_REUSE',
  'CURLOPT_CONNECTTIMEOUT',
  'CURLOPT_CONNECTTIMEOUT_MS',
  'CURLOPT_IPRESOLVE',
  'CURLOPT_CONNECT_ONLY',
  'CURLOPT_USE_SSL',
  'CURLOPT_RESOLVE',
  'CURLOPT_DNS_INTERFACE',
  'CURLOPT_DNS_LOCAL_IP4',
  'CURLOPT_DNS_LOCAL_IP6',
  'CURLOPT_DNS_SERVERS',
  'CURLOPT_DNS_SHUFFLE_ADDRESSES',
  'CURLOPT_ACCEPTTIMEOUT_MS',
  'CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS',
  'CURLOPT_UPKEEP_INTERVAL_MS',
  'CURLOPT_SSLCERT',
  'CURLOPT_PROXY_SSLCERT',
  'CURLOPT_SSLCERTTYPE',
  'CURLOPT_PROXY_SSLCERTTYPE',
  'CURLOPT_SSLKEY',
  'CURLOPT_PROXY_SSLKEY',
  'CURLOPT_SSLKEYTYPE',
  'CURLOPT_PROXY_SSLKEYTYPE',
  'CURLOPT_KEYPASSWD',
  'CURLOPT_PROXY_KEYPASSWD',
  'CURLOPT_SSL_ENABLE_ALPN',
  'CURLOPT_SSL_ENABLE_NPN',
  'CURLOPT_SSLENGINE',
  'CURLOPT_SSLENGINE_DEFAULT',
  'CURLOPT_SSL_FALSESTART',
  'CURLOPT_SSLVERSION',
  'CURLOPT_PROXY_SSLVERSION',
  'CURLOPT_SSL_VERIFYHOST',
  'CURLOPT_PROXY_SSL_VERIFYHOST',
  'CURLOPT_SSL_VERIFYPEER',
  'CURLOPT_PROXY_SSL_VERIFYPEER',
  'CURLOPT_SSL_VERIFYSTATUS',
  'CURLOPT_CAINFO',
  'CURLOPT_PROXY_CAINFO',
  'CURLOPT_ISSUERCERT',
  'CURLOPT_CAPATH',
  'CURLOPT_PROXY_CAPATH',
  'CURLOPT_CRLFILE',
  'CURLOPT_PROXY_CRLFILE',
  'CURLOPT_CERTINFO',
  'CURLOPT_PINNEDPUBLICKEY',
  'CURLOPT_PROXY_PINNEDPUBLICKEY',
  'CURLOPT_RANDOM_FILE',
  'CURLOPT_EGDSOCKET',
  'CURLOPT_SSL_CIPHER_LIST',
  'CURLOPT_PROXY_SSL_CIPHER_LIST',
  'CURLOPT_TLS13_CIPHERS',
  'CURLOPT_PROXY_TLS13_CIPHERS',
  'CURLOPT_SSL_SESSIONID_CACHE',
  'CURLOPT_SSL_OPTIONS',
  'CURLOPT_PROXY_SSL_OPTIONS',
  'CURLOPT_KRBLEVEL',
  'CURLOPT_GSSAPI_DELEGATION',
  'CURLOPT_SSH_AUTH_TYPES',
  'CURLOPT_SSH_COMPRESSION',
  'CURLOPT_SSH_HOST_PUBLIC_KEY_MD5',
  'CURLOPT_SSH_PUBLIC_KEYFILE',
  'CURLOPT_SSH_PRIVATE_KEYFILE',
  'CURLOPT_SSH_KNOWNHOSTS',
  'CURLOPT_SSH_KEYFUNCTION',
  'CURLOPT_SSH_KEYDATA',
  'CURLOPT_PRIVATE',
  'CURLOPT_SHARE',
  'CURLOPT_NEW_FILE_PERMS',
  'CURLOPT_NEW_DIRECTORY_PERMS',
  'CURLOPT_TELNETOPTIONS',
]

const blackList = [
  // to be implemented
  'CURLOPT_STREAM_DEPENDS',
  'CURLOPT_STREAM_DEPENDS_E',
  'CURLOPT_STREAM_WEIGHT',
  'CURLOPT_INTERLEAVEDATA',
  'CURLOPT_INTERLEAVEFUNCTION',
  // maybe
  'CURLOPT_STDERR',
  // https://curl.haxx.se/libcurl/c/CURLOPT_CURLU.html
  // curl_url api is not going to be implemented since URLs can be easily parsed directly from Node.js
  'CURLOPT_CURLU',
  // callbacks
  'CURLOPT_CONV_FROM_NETWORK_FUNCTION',
  'CURLOPT_CONV_FROM_UTF8_FUNCTION',
  'CURLOPT_CONV_TO_NETWORK_FUNCTION',
  'CURLOPT_IOCTLDATA',
  'CURLOPT_IOCTLFUNCTION',
  'CURLOPT_OPENSOCKETDATA',
  'CURLOPT_OPENSOCKETFUNCTION',
  'CURLOPT_CLOSESOCKETDATA',
  'CURLOPT_CLOSESOCKETFUNCTION',
  'CURLOPT_SSL_CTX_DATA',
  'CURLOPT_SSL_CTX_FUNCTION',
  'CURLOPT_SOCKOPTDATA',
  'CURLOPT_SOCKOPTFUNCTION',
  'CURLOPT_SSH_KEYFUNCTION',
  'CURLOPT_SSH_KEYDATA',
  // Not really necessary
  'CURLOPT_ERRORBUFFER',
  'CURLOPT_COPYPOSTFIELDS',
  'CURLOPT_PRIVATE',
  'CURLOPT_PROGRESSDATA',
  'CURLOPT_XFERINFODATA',
  'CURLOPT_DEBUGDATA',
  'CURLOPT_SEEKDATA',
  'CURLOPT_CHUNK_DATA',
  'CURLOPT_FNMATCH_DATA',
  // Options that are used internally
  'CURLOPT_WRITEDATA',
  'CURLOPT_HEADERDATA',
]

const regexp = /^([A-Z]+)(FUNCTION|CONNECTS|DATA|RESOLVE|VALUE|ALIASES|REDIRS|CERT|KEY|REDIR|DELAY|AGENT|OPTIONS|TEXT|USERPWD|PASSWD|LEVEL|SVC|SOCKET|SSL|PUBLIC|LOCATION|LIST|(?<!FUNCTI|SESSI|DELEGATI|VERSI|LOCATI|COMPRESSI|CONDITI)ON|ID|STATUS|ENGINE|PEER|HOSTS|HOST|ERROR|PROGRESS|SIGNAL|INFO|PATH|REFERER|MATCH|TYPE|TUNNEL|SIZE|OPEN|ALIVE|IDLE|INTVL|USERNAME|PASSWORD|AUTH|FIELDS|FIELD|OPT|HEADER|ALIASES|FILE|JAR|SESSION|LIST|GET|WAIT|PROTOCOL|PORT|RANGE|QUOTE|METHOD|REQUEST|PROXY|TIME|ONLY|CONDITION|TIMEOUT|POST)(_.*)?$/

function convertToDashCase(optionPart) {
  let optionConverted = optionPart
  while (optionConverted.search(regexp) !== -1) {
    optionConverted = optionConverted.replace(regexp, '$1_$2$3')
  }

  return optionConverted
}

function convertCurlOptionToCamelCase(option) {
  const pieces = option.split('_')
  return pieces
    .map(piece => convertToDashCase(piece))
    .map(item => (Array.isArray(item) ? item.join('_') : item))
    .join('_')
    .split('_')
    .map((item, idx) =>
      idx > 0
        ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        : item.toLowerCase(),
    )
    .join('')
}

// Array.prototype.map.call(document.querySelectorAll('.nroffip'), (item) => item.innerText).reduce((acc, item) => ({ ...acc, [item]: item }), {})

const allowedOptions = options.sort().filter(item => !blackList.includes(item))
const allowedOptionsWithoutCurlOpt = allowedOptions.map(item =>
  item.replace('CURLOPT_', ''),
)

const optionsCamelCaseMap = allowedOptionsWithoutCurlOpt.reduce(
  (acc, item) => ({
    ...acc,
    [convertCurlOptionToCamelCase(item)]: item,
  }),
  {},
)

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const filePath = path.resolve(__dirname, '../lib/generated/options.js')

fs.writeFileSync(
  filePath,
  `// This file was generated by scripts/build-options-file.js
// Do not edit manually
module.exports = {
  allowedOptions: ${JSON.stringify(allowedOptionsWithoutCurlOpt, null, 2)},
  allowedOptionsCamelCaseMap: ${JSON.stringify(optionsCamelCaseMap, null, 2)},
}`,
)

execSync(`yarn prettier ${filePath}`)
