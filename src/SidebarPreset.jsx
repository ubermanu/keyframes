import React from 'react'
import { UPDATE_STEP_PROPERTY } from './actions'
import { useStore } from './store'

function Preset({ label, ...inputProps }) {
  const { state, dispatch } = useStore()
  const { currentStep } = state
  const { name: propertyName } = inputProps

  function handleChange(e) {
    dispatch(UPDATE_STEP_PROPERTY(currentStep, e.target.name, e.target.value))
  }

  const styles = state.steps.find(({ id }) => id === currentStep).styles
  const value = (propertyName in styles) ? styles[propertyName] : ''

  return (
    <div className="kf-preset-option">
      <div className="kf-po-label">{label}</div>
      <div className="kf-po-value">
        <input className="kf-po-input" value={value}
               onChange={handleChange} {...inputProps} />
      </div>
    </div>
  )
}

export default Preset
