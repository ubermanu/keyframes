import React from 'react'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import ElementPicker from './ElementPicker'
import StylesRenderer from './StylesRenderer'
import { useStore, withStore } from './store'

function Editor() {
  const { state } = useStore()
  const { element } = state
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
    </>
  )
}

export default withStore(Editor)
