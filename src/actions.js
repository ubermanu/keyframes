/**
 * Select HTML element.
 *
 * @param element
 * @returns {{payload: *, type: string}}
 */
export function select_element(element) {
  return { type: 'SELECT_ELEMENT', payload: element }
}
