import { connect } from '../hyperapp-redux'
import { addTodo, inputTodoText } from '../actions'
import TodoInput from '../components/TodoInput'

let nextTodoId = 1

const AddTodo = connect(
  state => ({
    todoText: state.todoText
  }),
  dispatch => ({
    addTodo: text => {
      dispatch(addTodo(text, `t_${nextTodoId++}`))
      dispatch(inputTodoText(''))
    },
    inputTodoText: text => dispatch(inputTodoText(text))
  })
)(TodoInput)

export default AddTodo
