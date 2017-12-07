export const sliceWraper = (path, action) =>
  payload =>
    state =>
      ({ [path]: action(payload)(state[path]) })