import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import App from './components/App'

app(
  { state, actions, view: App },
  document.getElementById('root')
)
