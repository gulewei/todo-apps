import { app } from "hyperapp"
import MainView from './components/MainView'
import store from './state/store'
import { hyperActions } from './actions/hyperActions'

const appHandler = app(
  { state: store, view: MainView, actions: hyperActions },
  document.getElementById('root')
)

store.subscribe(() => appHandler.set(store.getState()))
