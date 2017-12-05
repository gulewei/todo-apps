import { h } from "hyperapp"

const React = {
  createElement: h
}

const Todo = ({ onClick, completed, text }) => (
  <li
    onclick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)


export default Todo