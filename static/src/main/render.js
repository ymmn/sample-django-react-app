import React from 'react'
import MainApp from './MainApp'
import mainAppReducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function renderApp(initialState) {
  const store = createStore(mainAppReducers, initialState)

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default renderApp

