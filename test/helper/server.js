/**
 * @author Jonathan Cardoso Machado
 * @license MIT
 * @copyright 2015, Jonathan Cardoso Machado
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const http = require('http')
const https = require('https')
const http2 = require('http2')
const fs = require('fs')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const cookiesParser = require('cookie-parser')

const file = path.resolve.bind(this, __dirname)
const key = fs.readFileSync(file('./ssl/cert.key'))
const cert = fs.readFileSync(file('./ssl/cert.pem'))

const app = express()
const serverHttp = http.createServer(app)
const serverHttps = https.createServer(
  {
    key,
    cert,
  },
  app
)
const serverHttp2 = http2.createSecureServer({
  key,
  cert,
})

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.raw({ limit: '100MB', type: 'application/node-libcurl.raw' }))
  .use(cookiesParser())

app.disable('etag')

module.exports = {
  server: serverHttp,
  serverHttps,
  serverHttp2,
  app: app,
  port: 3000,
  portHttps: 3443,
  portHttp2: 3333,
  host: 'localhost',
}
