const optionKindMap = {
  dataCallback: ['READFUNCTION', 'HEADERFUNCTION', 'WRITEFUNCTION'],
  progressCallback: ['PROGRESSFUNCTION', 'XFERINFOFUNCTION'],
  stringList: [
    'CONNECT_TO',
    'HTTP200ALIASES',
    'HTTPHEADER',
    'MAIL_RCPT',
    'PROXYHEADER',
    'POSTQUOTE',
    'PREQUOTE',
    'QUOTE',
    'RESOLVE',
    'TELNETOPTIONS',
  ],
  other: [
    'CHUNK_BGN_FUNCTION',
    'CHUNK_END_FUNCTION',
    'DEBUGFUNCTION',
    'FNMATCH_FUNCTION',
    'SEEKFUNCTION',
    'TRAILERFUNCTION',
    'SHARE',
    'HTTPPOST',
    'GSSAPI_DELEGATION',
    'PROXY_SSL_OPTIONS',
    'SSL_OPTIONS',
    // @TODO ADD REMAINING OPTIONS WE HAVE ENUM FOR
  ],
}

const optionKindValueMap = {
  dataCallback:
    '((this: Easy, data: Buffer, size: number, nmemb: number) => number)',
  progressCallback:
    '((this: Easy, dltotal: number,dlnow: number,ultotal: number,ulnow: number) => number | CurlProgressFunc)',
  stringList: 'string[]',
  /* @TODO Add type definitions, they are on Curl.chunk */
  CHUNK_BGN_FUNCTION:
    '((this: Easy, fileInfo: FileInfo, remains: number) => number)',
  /* @TODO Add type definitions, they are on Curl.chunk */
  CHUNK_END_FUNCTION: '((this: Easy) => number)',
  /* @TODO Add type definitions, they are on Curl.info.debug */
  DEBUGFUNCTION: '((this: Easy, type: number, data: Buffer) => 0)',
  /* @TODO Add type definitions, they are on Curl.fnmatchfunc */
  FNMATCH_FUNCTION: '((this: Easy, pattern: string, value: string) => number)',
  HTTPPOST: 'HttpPostField[]',
  TRAILERFUNCTION: '((this: Easy) => string[] | false)',
  /* @TODO Add CURL_SEEKFUNC_* type definitions */
  SEEKFUNCTION: '((this: Easy, offset: number, origin: number) => number)',
  SHARE: 'Share',

  // enums
  GSSAPI_DELEGATION: 'CurlGssApi',
  PROXY_SSL_OPTIONS: 'CurlSslOpt',
  SSL_OPTIONS: 'CurlSslOpt',
  _: 'string | number | boolean',
}

module.exports = {
  optionKindMap,
  optionKindValueMap,
}
