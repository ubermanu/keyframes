import React, { createContext, useContext, useReducer } from 'react'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import ElementPicker from './ElementPicker'
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
          <style id="kfStyleContainer" />
        </>
      )}
    </>
  )
}

export default withStore(Editor)
