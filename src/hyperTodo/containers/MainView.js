import { h } from "hyperapp"
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterFooter from '../containers/FilterFooter'

const React = {
  createElement: h
}

const MainView = state => actions => {
  return (
    <div>
      <AddTodo
        state={state} actions={actions}
      />
      <VisibleTodoList
        state={state} actions={actions}
      />
      <FilterFooter
        state={state} actions={actions}
      />
    </div>
  )
}

export default MainView
