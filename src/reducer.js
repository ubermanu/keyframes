/**
 * @type {{steps: [], element: null}}
 */
export const initialState = {
  element: null,
  steps: [],
  animation: {
    duration: '3s',
    iterations: 'infinite',
    delay: '0s',
    timing: 'linear',
  },
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
      console.log(state.steps)
      return { ...state, steps: [...state.steps, action.step] }
    case 'SET_ANIMATION_OPTION':
      if (action.option in state.animation) {
        return {
          ...state,
          animation: { ...state.animation, [action.option]: action.value },
        }
      }
      return state
    default:
      throw new Error()
  }
}

export default reducer
