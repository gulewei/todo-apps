import Footer from '../components/Footer'
import { setVisibilityFilter } from '../actions'
import { connect } from '../store.js'

const FilterFooter = connect(
  () => undefined,
  dispatch => ({
    setVisibilityFilter: filterType => dispatch(setVisibilityFilter(filterType))
  })
)(Footer)

export default FilterFooter
