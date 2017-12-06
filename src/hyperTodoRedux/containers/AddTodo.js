import { connect } from '../utils'
import { addTodo, inputTodoText } from '../actions'
import TodoInput from '../components/TodoInput'

let nextTodoId = 1

const mapStateToProps = state => ({
  todoText: state.todoText
})

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text, `t_${nextTodoId++}`))
    dispatch(inputTodoText(''))
  },
  inputTodoText: text => dispatch(inputTodoText(text))
})

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)

export default AddTodo
