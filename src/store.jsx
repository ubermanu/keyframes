import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

/**
 * Initial state.
 *
 * @type {{element: null}}
 */
const initialState = {
  element: null,
}

/**
 * Store context.
 *
 * @type {React.Context<{}>}
 */
const StoreContext = createContext({})
export const useStore = () => useContext(StoreContext)

/**
 * Store context provider.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

/**
 * Connect store to component HOC
 *
 * @param Component
 * @returns {function(*): *}
 */
export function withStore(Component) {
  return function(props) {
    return (
      <Provider><Component {...props} /></Provider>
    )
  }
}
