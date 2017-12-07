export default {
  // todos

  addTodo: ({ id, text }) => state => ({
    todos: state.todos.concat({
      id,
      text,
      completed: false
    })
  }),

  removeTodo: id => state => ({
    todos: state.todos.filter(t => t.id !== id)
  }),

  toggleTodo: id => state => ({
    todos: state.todos.map(
      t => t.id !== id
        ? t
        : { ...t, completed: !t.completed }
    )
  }),

  // input
  inputTodoText: text => state => ({
    todoText: text
  }),

  // filter
  setVisibilityFilter: filterType => state => ({
    visibilityFilter: filterType
  })
}