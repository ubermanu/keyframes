import React from 'react'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import Toast from './Toast'

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
