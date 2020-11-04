import React from 'react'
import './App.scss'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import Toast from './Toast'

function App() {
  return (
    <div className="App">
      <Toast message={'Click on an element you would like to animate.'} />
      <Sidebar />
      <Timeline />
      <style id="kfStyleContainer" />
    </div>
  )
}

export default App
