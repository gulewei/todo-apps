import { h } from "hyperapp"
import TodoList from '../components/TodoList.js'

/** @jsx h */

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

const VisibleFilter = ({ state, actions }) => (
  <div>
    <TodoList
      todos={todoFilter(state.todos, state.visibilityFilter)}
      onTodoClick={actions.toggleTodo}
    />
  </div>
)

export default VisibleFilter
