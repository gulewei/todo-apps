import { h } from "hyperapp"

/** @jsx h */

var nextTodoId = 1

const AddTodo = ({ state, actions }) => ((
  <div>
    <form
      onsubmit={(e) => {
        e.preventDefault()
        actions.addTodo({ id: `t_${nextTodoId++}`, text: state.todoText })
        actions.inputTodoText('')
      }}
    >
      <input type="text"
        oninput={(e) => actions.inputTodoText(e.target.value)}
        value={state.todoText}
      />
      <button type="submit">Add Todo</button>
    </form>
  </div>
))
export default AddTodo
