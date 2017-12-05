const todoText = (state = '', action) => {
  switch(action.type) {
    case 'INPUT_TODO_TEXT':
      return action.text
    default :
      return state
  }
}

export default todoText
