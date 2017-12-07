import { h } from 'picodom'
import Todo from './Todo'

/** @jsx h */

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id} {...todo}
        toggleTodo={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
)

export default TodoList