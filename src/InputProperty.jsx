import React from 'react'
import { Input } from 'antd'
import { UPDATE_STEP_PROPERTY } from './actions'
import { useStore } from './store'

function InputProperty(inputProps) {
  const { state, dispatch } = useStore()
  const { currentStep } = state
  const { name: propertyName } = inputProps

  function handleChange(e) {
    dispatch(UPDATE_STEP_PROPERTY(currentStep, e.target.name, e.target.value))
  }

  const styles = state.steps.find(({ id }) => id === currentStep).styles
  const value = (propertyName in styles) ? styles[propertyName] : ''

  return (
    <Input value={value} onChange={handleChange} {...inputProps} />
  )
}

export default InputProperty
