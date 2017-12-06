let _store = null

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

export const provider = (store, View) => {
  _store = store

  return {
    state: {},
    actions: {
      reDraw: () => prevState => ({})
    },
    view: state => actions => {
      store.subscribe(actions.reDraw)
      let vnodes = View()
      return vnodes
    },
  }
}
