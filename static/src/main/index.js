import React from 'react'
import ReactDOM from 'react-dom'
import renderApp from './render'


ReactDOM.render(
  renderApp(window.__INITIAL_STATE__),
  document.getElementById('root')
)
