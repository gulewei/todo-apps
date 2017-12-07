import { patch } from 'picodom'

let _store = null

export const createRender = (View, el) => {
  let node
  return props => patch(el, node, (node = View(props)))
}

export const provider = (store, render, autoRender) => {
  _store = store
  store.subscribe(render)

  autoRender && render()
}

export const connect = (mapStateToProps, mapDispatchToProps) =>
  Component =>
    (ownProps, ownChildren) =>
      Component(
        {
          ...mapStateToProps(_store.getState(), ownProps),
          ...mapDispatchToProps(_store.dispatch, ownProps),
          ...ownProps
        },
        ownChildren
      )
