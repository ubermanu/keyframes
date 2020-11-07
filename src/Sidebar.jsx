import React from 'react'
import Preset from './SidebarPreset'
import PresetGroup from './SidebarPresetGroup'
import { DELETE_STEP, UPDATE_STEP_PROPERTY } from './actions'
import { useStore } from './store'

function Sidebar() {
  const { state, dispatch } = useStore()
  const { currentStep } = state

  function handleChange(e) {
    dispatch(UPDATE_STEP_PROPERTY(currentStep, e.target.name, e.target.value))
  }

  function handleDelete() {
    dispatch(DELETE_STEP(currentStep))
  }

  if (currentStep !== null) {
    return (
      <div className="kf-sidebar">
        <div className="ts-header">
          CSS Properties at <span>{currentStep}</span>%
        </div>
        <div className="ts-subheader">
          Don't forget units when necessary.
          <br />
          <small>& if you change a value on one step, it should have a value on
            every step, even if it's the same or 0.</small>
        </div>

        <PresetGroup title="Transform">
          <Preset label="Rotate" type="text" placeholder="180deg"
                  name="transformRotate" onChange={handleChange} />
          <Preset label="Scale" type="number" step="0.1" placeholder="1.5"
                  name="transformScale" onChange={handleChange} />
          <Preset label="TranslateX" type="text" placeholder="100px"
                  name="transformX" onChange={handleChange} />
          <Preset label="TranslateY" type="text" placeholder="-20%"
                  name="transformY" onChange={handleChange} />
          <Preset label="SkewX" type="text" placeholder="15deg"
                  name="transformSkewX" onChange={handleChange} />
          <Preset label="SkewY" type="text" placeholder="-20deg"
                  name="transformSkewY" onChange={handleChange} />
          <Preset label="Transform Origin" type="text" placeholder="50% 50%"
                  name="transformOrigin" onChange={handleChange} />
        </PresetGroup>

        <PresetGroup title="Colors & Font">
          <Preset label="Background" type="text" placeholder="#a5c9e4"
                  onChange={handleChange} />
          <Preset label="Opacity" type="number" max="1" min="0"
                  step="0.01" placeholder="0.5" onChange={handleChange} />
          <Preset label="Color (Text)" type="text" placeholder="#f0f99c"
                  onChange={handleChange} />
          <Preset label="Font Size" type="text" placeholder="18px"
                  onChange={handleChange} />
          <Preset label="Font Weight" type="text" placeholder="bolder"
                  onChange={handleChange} />
        </PresetGroup>

        <PresetGroup title="Size & Spacing">
          <Preset label="Width" type="text" placeholder="100px"
                  onChange={handleChange} />
          <Preset label="Height" type="text" placeholder="120px"
                  onChange={handleChange} />
          <Preset label="Margin" type="text" placeholder="5px"
                  onChange={handleChange} />
          <Preset label="Padding" type="text" placeholder="10px"
                  onChange={handleChange} />
        </PresetGroup>

        <PresetGroup title="Border & Shadow">
          <Preset label="Border" type="text" placeholder="5px solid red"
                  onChange={handleChange} />
          <Preset label="Box Shadow" type="text"
                  placeholder="10px 10px 5px 2px rgba(0,0,0,0.75)"
                  onChange={handleChange} />
          <Preset label="Outline" type="text" placeholder="2px solid red"
                  onChange={handleChange} />
        </PresetGroup>

        <button className="kf-btn red small full center" onClick={handleDelete}>
          Delete Step at {currentStep}%
        </button>
      </div>
    )
  } else {
    return <></>
  }
}

export default Sidebar
