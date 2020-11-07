import React from 'react'
import { useStore } from './store'
import { SET_CURRENT_STEP } from './actions'

function TimelineStep({ id }) {
  const { dispatch } = useStore()

  function handleSelect(e) {
    e.stopPropagation()
    dispatch(SET_CURRENT_STEP(id))
  }

  // Avoid positioning error when hovering a step
  function handleMouseMove(e) {
    e.stopPropagation()
  }

  return (
    <div className="timeline-step" style={{ left: `${id}%` }}
         onClick={handleSelect} onMouseMove={handleMouseMove}>
      <label>{id}</label>
    </div>
  )
}

export default TimelineStep
