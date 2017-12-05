import { h } from "hyperapp"
import TodoList from '../components/TodoList.js'
import store from '../state/store.js'
import { toggleTodo } from '../actions'

const React = {
  createElement: h
}

const todoFilter = (todos, filterType) => {
  switch (filterType) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const dispatch = id => store.dispatch(toggleTodo(id))

const VisibleFilter = () => {
  const state = store.getState()
  return (
    <div>
      <TodoList
        todos={todoFilter(state.todos, state.visibilityFilter)}
        onTodoClick={dispatch}
      />
    </div>
  )
}

export default VisibleFilter
