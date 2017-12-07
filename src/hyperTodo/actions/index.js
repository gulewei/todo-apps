import { mapSlice, simpleUpdate } from '../utils'

const todos = mapSlice('todos', {
  add: ({ id, text }) =>
    state =>
      state.concat({
        id,
        text,
        completed: false
      }),

  toggle: id =>
    state =>
      state.map(
        t => t.id !== id
          ? t
          : { ...t, completed: !t.completed }
      )
})

const todoText = mapSlice('todoText', {
  input: simpleUpdate
})

const visibilityFilter = mapSlice('visibilityFilter', {
  set: simpleUpdate
})

export default {
  addTodo: todos.add,
  toggleTodo: todos.toggle,
  inputTodoText: todoText.input,
  setVisibilityFilter: visibilityFilter.set
}