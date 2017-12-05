import { createStore } from 'redux'
import todoApp from '../reducers'

let store = createStore(todoApp)

window.$store = store

export default store
