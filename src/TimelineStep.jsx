import React from 'react'
import { useStore } from './store'
import { SET_CURRENT_STEP } from './actions'

function TimelineStep({ id }) {
  const { dispatch } = useStore()

  function handleSelect(e) {
    e.stopPropagation()
    dispatch(SET_CURRENT_STEP(id))
  }

  return (
    <div className="timeline-step" style={{ left: `${id}%` }}
         onClick={handleSelect}>
      <label>{id}</label>
    </div>
  )
}

export default TimelineStep
