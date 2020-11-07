/**
 * @param element
 * @returns {{type: string, element: *}}
 * @constructor
 */
export function SELECT_ELEMENT(element) {
  return { type: 'SELECT_ELEMENT', element }
}

/**
 * @param stepId
 * @returns {{step: {styles: {}, id: *}, type: string}}
 * @constructor
 */
export function ADD_STEP(stepId) {
  return { type: 'ADD_STEP', step: { id: stepId, styles: {} } }
}

/**
 * @param stepId
 * @param propertyName
 * @param value
 * @returns {{step: {styles: {}, id: *}, type: string}}
 * @constructor
 */
export function UPDATE_STEP_PROPERTY(stepId, propertyName, value) {
  return {
    type: 'UPDATE_STEP_PROPERTY',
    step: { id: stepId, styles: { [propertyName]: value } },
  }
}

/**
 * @param option
 * @param value
 * @returns {{type: string, value: *, option: *}}
 * @constructor
 */
export function SET_ANIMATION_OPTION(option, value) {
  return { type: 'SET_ANIMATION_OPTION', option, value }
}
