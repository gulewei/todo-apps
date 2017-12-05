import MainView from './components/MainView'
import todoApp from './reducers'
import { createStore } from 'redux'
import createReduxApp from './hyperapp-redux'

/**
 * note that hyperapp has a diffrent concept of actions with redux
 * actions in hyperapp are same like reducers in redux
 */

createReduxApp(
  createStore(todoApp),
  MainView,
  document.getElementById('root')
)
