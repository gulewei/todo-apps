import { connect } from '../utils'
import { setVisibilityFilter } from '../actions'
import Footer from '../components/Footer'

const FilterFooter = connect(
  () => undefined,
  dispatch => ({
    setVisibilityFilter: filterType => dispatch(setVisibilityFilter(filterType))
  })
)(Footer)

export default FilterFooter
