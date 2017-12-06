import { h } from "hyperapp"
import Footer from '../components/Footer'

/** @jsx h */

const FilterFooter = ({ actions }) => (
  <Footer setVisibilityFilter={actions.setVisibilityFilter} />
)

export default FilterFooter
