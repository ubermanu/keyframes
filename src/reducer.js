/**
 * @type {{steps: [], element: null}}
 */
export const initialState = {
  element: null,
  steps: [],
}

/**
 * @param {Object} state
 * @param {Object} action
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_ELEMENT':
      return { ...state, element: action.element }
    case 'ADD_STEP':
      return { ...state, steps: [...state.steps, action.step] }
    default:
      throw new Error()
  }
}

export default reducer
