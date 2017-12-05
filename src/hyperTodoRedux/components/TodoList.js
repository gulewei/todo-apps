import { h } from "hyperapp"
import Todo from './Todo'

const React = {
  createElement: h
}

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id} {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
)

export default TodoList