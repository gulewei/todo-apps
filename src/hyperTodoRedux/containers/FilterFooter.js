import { h } from "hyperapp"
import Footer from '../components/Footer'
import store from '../state/store'
import { setVisibilityFilter } from '../actions'

const React = {
  createElement: h
}

const dispatch = filterType => store.dispatch(setVisibilityFilter(filterType))

const FilterFooter = () => {
  return (
    <Footer setVisibilityFilter={dispatch} />
  )
}

export default FilterFooter
