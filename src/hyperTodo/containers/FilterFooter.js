import { h } from "hyperapp"
import Footer from '../components/Footer'

const React = {
  createElement: h
}

const FilterFooter = ({ actions }) => (
  <Footer setVisibilityFilter={actions.setVisibilityFilter} />
)

export default FilterFooter
