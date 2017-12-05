import { app } from "hyperapp"
import MainView from './containers/MainView'
import store from './store'

/**
 * note that hyperapp has a diffrent concept of actions with redux
 * actions in hyperapp are same like reducers in redux
 */

const hyperActions = {
  set: newState => prevState => newState
}

// mount app
const appHandler = app(
  { state: store, view: MainView, actions: hyperActions },
  document.getElementById('root')
)

// update state
store.subscribe(() => appHandler.set(store.getState()))
