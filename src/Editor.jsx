import React, { createContext, useContext, useReducer } from 'react'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import ElementPicker from './ElementPicker'

const initialStore = {
  element: null,
}
const EditorContext = createContext({})
export const useEditor = () => useContext(EditorContext)

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_ELEMENT':
      return { ...state, element: action.payload }
    default:
      throw new Error()
  }
}

function Editor() {
  const [state, dispatch] = useReducer(reducer, initialStore)

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {!state.element && <ElementPicker />}
      {state.element && (
        <>
          <Sidebar />
          <Timeline />
          <style id="kfStyleContainer" />
        </>
      )}
    </EditorContext.Provider>
  )
}

export default Editor
