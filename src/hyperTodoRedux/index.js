import App from './components/App'
import { createStore } from 'redux'
import todoApp from './reducers'
import { provider, createRender } from './utils'

/** @jsx h */

const store = createStore(
  todoApp,
  // redux devtools browser extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = createRender(App, document.getElementById('root'))

provider(store, render, true)

