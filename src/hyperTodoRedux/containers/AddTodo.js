import { h } from "hyperapp"
import store from '../state/store.js'
import { addTodo, inputTodeText } from '../actions'

const React = {
  createElement: h
}

var nextTodoId = 1

const addTodoDispath = (text, id) => store.dispatch(addTodo(text, id))
const inputDispath = text => store.dispatch(inputTodeText(text))

const AddTodo = () => {
  const state = store.getState()
  return (
    <div>
      <form
        onsubmit={(e) => {
          e.preventDefault()
          addTodoDispath(state.todoText, `t_${nextTodoId++}`)
          inputDispath('')
        }}
      >
        <input type="text"
          oninput={(e) => inputDispath(e.target.value)}
          value={state.todoText}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )

}
export default AddTodo
