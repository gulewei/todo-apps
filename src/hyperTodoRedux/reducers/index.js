import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todoText from './todoText'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  todoText
})

export default todoApp
