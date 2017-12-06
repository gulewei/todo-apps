import { h } from "hyperapp"

/** @jsx h */

const Todo = ({ toggleTodo, completed, text }) => (
  <li
    onclick={toggleTodo}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)


export default Todo