import { app } from "hyperapp"
import MainView from './components/MainView'
import { createStore } from 'redux'
import todoApp from './reducers'
import { provider } from './hyperapp-redux'

/**
 * note that hyperapp has a diffrent concept of actions with redux
 * actions in hyperapp are same like reducers in redux
 */

let store = createStore(todoApp)

// mount app
const { reDraw } = app(
  provider(store, MainView),
  document.getElementById('root')
)

// update state
store.subscribe(reDraw)
