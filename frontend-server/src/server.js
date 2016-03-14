import path from 'path'
import express from 'express'
import React, { Component, PropTypes } from 'react'
import ReactDOMServer from 'react-dom/server'
import MainApp from '../../static/src/main/MainApp'
import mainAppReducers from '../../static/src/main/reducers'
import bodyParser from 'body-parser'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const server = express()
const port = process.env.PORT || 3000

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.post('/', (req, res, next) => {
  console.time('request')

  const initialState = req.body
  const store = createStore(mainAppReducers, initialState)

  const body = ReactDOMServer.renderToString(
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
  res.status(200).send(body)

  console.timeEnd('request')
})

server.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`)
})
