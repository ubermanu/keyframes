/**
 * Select HTML element.
 *
 * @param element
 * @returns {{payload: *, type: string}}
 */
export function SELECT_ELEMENT(element) {
  return { type: 'SELECT_ELEMENT', payload: element }
}
