import React, { createContext, useContext, useState } from 'react'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import ElementPicker from './ElementPicker'

const defaultContext = {
  element: undefined
}
const EditorContext = createContext(defaultContext)
const useEditor = () => useContext(EditorContext)

function Editor() {
  const [element, setElement] = useState()
  return (
    <>
      {!element && <ElementPicker />}
      <Sidebar />
      <Timeline />
      <style id="kfStyleContainer" />
    </>
  )
}

export default Editor
