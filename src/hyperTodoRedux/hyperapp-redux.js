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

export function provider (store, view) {
  _store = store

  return {
    state: {},
    actions: {
      reDraw: () => prevState => ({})
    },
    view,
  }
}

export default function createReduxApp (store, view, el) {
  const { reDraw } = app(
    provider(store, view),
    el
  )

  store.subscribe(reDraw)
}
