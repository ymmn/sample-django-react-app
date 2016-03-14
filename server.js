import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import RootComponent from './static/components/RootComponent/index.js'


const server = express()
const port = process.env.PORT || 3000


server.get('*', (req, res, next) => {
  const body = ReactDOMServer.renderToString(<RootComponent>Hello World</RootComponent>)
  const html = `<!doctype html>
    <html>
      <head>
        <script async src="/client.js"></script>
        <style type="text/css"></style>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>`
  res.status(200).send(html)
})


server.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`)
})
