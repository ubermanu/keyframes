/**
 * @type {Object}
 */
export const initialState = {
  element: null,
  currentStep: 0,
  steps: [
    {
      id: 0,
      styles: {},
    },
  ],
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
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.step.id }
    case 'ADD_STEP':
      return { ...state, steps: [...state.steps, action.step] }
    case 'UPDATE_STEP_PROPERTY':
      const step = state.steps.find(({ id }) => action.step.id === id)
      return {
        ...state,
        steps: [
          ...state.steps.filter(({ id }) => action.step.id !== id),
          {
            id: action.step.id,
            styles: {
              ...step.styles,
              [action.propertyName]: action.value,
            },
          },
        ],
      }
    case 'DELETE_STEP':
      return {
        ...state,
        currentStep: null,
        steps: [...state.steps.filter(step => action.step.id !== step.id)],
      }
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
