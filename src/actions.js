/**
 * @param element
 * @returns {{type: string, element: *}}
 * @constructor
 */
export function SELECT_ELEMENT(element) {
  return { type: 'SELECT_ELEMENT', element }
}

/**
 * @param percent
 * @param attributes
 * @returns {{attributes: *, type: string, percent: *}}
 * @constructor
 */
export function ADD_STEP(percent, attributes) {
  return { type: 'ADD_STEP', percent, attributes }
}

/**
 * @param percent
 * @param attributes
 * @returns {{attributes: *, type: string, percent: *}}
 * @constructor
 */
export function UPDATE_STEP(percent, attributes) {
  return { type: 'UPDATE_STEP', percent, attributes }
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
