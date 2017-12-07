/**
 * @param {string} path 
 * @param {*} action 
 */
const isFunction = fn => typeof fn === 'function'

export const slice = (path, action) =>
  payload =>
    state => {
      let pathes = path.split('.')
      let data = action(payload)
      
      if (isFunction(data)) {
        let localState = pathes.reduce(
          (s, val) => s[val],
          state
        )

        data = data(localState)
      }

      let result = pathes.reduceRight(
        (s, val) => ({ [val]: s }),
        data
      )

      return result
    }

export const mapSlice = (path, actions) => {
  let slicedActions = {}
  for (let [key, val] of Object.entries(actions)) {
    slicedActions[key] = slice(path, val)
  }

  return slicedActions
}

export const simpleUpdate = payload => payload
