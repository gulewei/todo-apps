import { h } from 'picodom'

/** @jsx h */

const TodoInput = ({ addTodo, inputTodoText, todoText }) => (
  <div>
    <form
      onsubmit={(e) => {
        e.preventDefault()
        addTodo(todoText)
      }}
    >
      <input type="text"
        oninput={(e) => inputTodoText(e.target.value)}
        value={todoText}
      />
      <button type="submit">Add Todo</button>
    </form>
  </div>
)

export default TodoInput