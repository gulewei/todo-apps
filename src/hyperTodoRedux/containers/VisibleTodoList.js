import { connect } from '../hyperapp-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList.js'

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

const VisibleFilter = connect(
  state => ({
    todos: todoFilter(state.todos, state.visibilityFilter)
  }),
  dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
  })
)(TodoList)

export default VisibleFilter
