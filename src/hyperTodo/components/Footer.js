import { h } from "hyperapp"

const React = {
  createElement: h
}

const Footer = ({ setVisibilityFilter }) => (
  <p>
    <a href="#all"
      onclick={e => setVisibilityFilter('SHOW_ALL')}
    >Show All</a>
    <a href="#done"
      onclick={e => setVisibilityFilter('SHOW_COMPLETED')}
    >Done</a>
    <a href="#active"
      onclick={e => setVisibilityFilter('SHOW_ACTIVE')}
    >Active</a>
  </p>
)

export default Footer
