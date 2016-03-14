import path from 'path'
import express from 'express'
import React, { Component, PropTypes } from 'react'
import ReactDOMServer from 'react-dom/server'
import RootComponent from '../../static/components/RootComponent/index.js'


const server = express()
const port = process.env.PORT || 3000


server.use(express.static(path.resolve('./static/build')));

server.get('/', (req, res, next) => {
  console.time('request')

  const body = ReactDOMServer.renderToString(<RootComponent />)
  const html = `<!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="/main.js"></script>
      </body>
    </html>`
  res.status(200).send(html)

  console.timeEnd('request')
})

server.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`)
})
