import { h } from 'hyperapp'
import Footer from './Footer'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput'

/** @jsx h */

let nextTodoId = 1

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

const MainView = state => actions => (
  <div>
    <TodoInput
      addTodo={text => {
        actions.addTodo(`t_${nextTodoId++}`, text)
        actions.inputTodoText('')
      }}
      inputTodoText={actions.inputTodoText}
      todoText={state.todoText}
    />
    <TodoList
      todos={todoFilter(state.todos, state.visibilityFilter)}
      onTodoClick={actions.toggleTodo}
    />
    <Footer
      setVisibilityFilter={actions.setVisibilityFilter}
    />
  </div>
)

export default MainView
