import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

// no devtool avalible for hyperapp, set global vlaue for debug
window.$store = store

export default store

export function connect (mapStateToProps, mapDispatchToProps) {
  return Component => (ownProps, ownChildren) => Component(
    {
      ...mapStateToProps(store.getState(), ownProps),
      ...mapDispatchToProps(store.dispatch, ownProps),
      ...ownProps
    },
    ownChildren
  )
}
