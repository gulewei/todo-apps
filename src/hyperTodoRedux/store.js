import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

// no devtool avalible for hyperapp, set global vlaue for debug
window.$store = store

export default store
