export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    id,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const inputTodeText = text => {
  return {
    type: 'INPUT_TODO_TEXT',
    text
  }
}
