import React from 'react'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import ElementPicker from './ElementPicker'
import StylesRenderer from './StylesRenderer'
import CodeWindow from './CodeWindow'
import { useStore, withStore } from './store'

function Editor() {
  const { state } = useStore()
  const { element, showCodeWindow } = state
  return (
    <>
      {!element && <ElementPicker />}
      {element && (
        <>
          <Sidebar />
          <Timeline />
          <StylesRenderer />
        </>
      )}
      {showCodeWindow && <CodeWindow />}
    </>
  )
}

export default withStore(Editor)
