import path from 'path'
import express from 'express'
import React, { Component, PropTypes } from 'react'
import ReactDOMServer from 'react-dom/server'
import renderApp from '../../static/src/apps'
import bodyParser from 'body-parser'


const server = express()
const port = process.env.PORT || 3000

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.post('*', (req, res, next) => {
  console.time('request')

  const appName = req.url.slice(1)

  const body = ReactDOMServer.renderToString(renderApp[appName](req.body))
  res.status(200).send(body)

  console.timeEnd('request')
})

server.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`)
})
