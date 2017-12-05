import { app } from "hyperapp"
import MainView from './containers/MainView'
import actions from './actions'
import state from './state'

const appHandler = app(
  { state, actions, view: MainView },
  document.getElementById('root')
)
