import React from 'react'
import Sidebar from './Sidebar.jsx'
import Timeline from './Timeline.jsx'
import Toast from './Toast.jsx'

function Editor() {
  return (
    <>
      <Toast message={'Click on an element you would like to animate.'} />
      <Sidebar />
      <Timeline />
      <style id="kfStyleContainer" />
    </>
  )
}

export default Editor
