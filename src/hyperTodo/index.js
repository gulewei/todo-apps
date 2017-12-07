import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import MainView from './components/MainView'


app(
  { state, actions, view: MainView },
  document.getElementById('root')
)
