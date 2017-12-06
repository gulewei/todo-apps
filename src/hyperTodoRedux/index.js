import { app, h } from 'hyperapp'
import App from './components/App'
import { createStore } from 'redux'
import todoApp from './reducers'
import { provider } from './utils'

/** @jsx h */

/**
 * note that hyperapp has a diffrent concept of actions with redux
 * actions in hyperapp are same like reducers in redux
 */

const store = createStore(
  todoApp,
  // redux devtools browser extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

app(
  provider(store, App),
  document.getElementById('root')
)
