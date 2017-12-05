import { app } from "hyperapp"

let _store = null

export function connect (mapStateToProps, mapDispatchToProps) {
  return Component => (ownProps, ownChildren) => Component(
    {
      ...mapStateToProps(_store.getState(), ownProps),
      ...mapDispatchToProps(_store.dispatch, ownProps),
      ...ownProps
    },
    ownChildren
  )
}

export function provider (store) {
  _store = store
}
