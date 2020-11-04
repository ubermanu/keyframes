/**
 * Reducer.
 *
 * @param state
 * @param action
 */
function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_ELEMENT':
      return { ...state, element: action.payload }
    default:
      throw new Error()
  }
}

export default reducer
