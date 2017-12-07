import { h } from 'picodom'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterFooter from '../containers/FilterFooter'

/** @jsx h */

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <FilterFooter />
  </div>
)

export default App
