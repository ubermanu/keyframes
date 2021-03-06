import React from 'react'
import Preset from './SidebarPreset'
import PresetGroup from './SidebarPresetGroup'
import { DELETE_STEP } from './actions'
import { useStore } from './store'

function Sidebar() {
  const { state, dispatch } = useStore()
  const { currentStep } = state

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

        <PresetGroup title="Transform" open={true}>
          <Preset label="Rotate" type="text" placeholder="180deg"
                  name="rotate" />
          <Preset label="Scale" type="number" step="0.1" placeholder="1.5"
                  name="scale" />
          <Preset label="TranslateX" type="text" placeholder="100px"
                  name="translateX" />
          <Preset label="TranslateY" type="text" placeholder="-20%"
                  name="translateY" />
          <Preset label="SkewX" type="text" placeholder="15deg"
                  name="skewX" />
          <Preset label="SkewY" type="text" placeholder="-20deg"
                  name="skewY" />
          <Preset label="Transform Origin" type="text" placeholder="50% 50%"
                  name="transform-origin" />
        </PresetGroup>

        <PresetGroup title="Colors & Font">
          <Preset label="Background" type="text" placeholder="#a5c9e4"
                  name="background" />
          <Preset label="Opacity" type="number" max="1" min="0"
                  step="0.01" placeholder="0.5"
                  name="opacity" />
          <Preset label="Color (Text)" type="text" placeholder="#f0f99c"
                  name="color" />
          <Preset label="Font Size" type="text" placeholder="18px"
                  name="font-size" />
          <Preset label="Font Weight" type="text" placeholder="bolder"
                  name="font-weight" />
        </PresetGroup>

        <PresetGroup title="Size & Spacing">
          <Preset label="Width" type="text" placeholder="100px"
                  name="width" />
          <Preset label="Height" type="text" placeholder="120px"
                  name="height" />
          <Preset label="Margin" type="text" placeholder="5px"
                  name="margin" />
          <Preset label="Padding" type="text" placeholder="10px"
                  name="padding" />
        </PresetGroup>

        <PresetGroup title="Border & Shadow">
          <Preset label="Border" type="text" placeholder="5px solid red"
                  name="border" />
          <Preset label="Box Shadow" type="text"
                  placeholder="10px 10px 5px 2px rgba(0,0,0,0.75)"
                  name="box-shadow" />
          <Preset label="Outline" type="text" placeholder="2px solid red"
                  name="outline" />
        </PresetGroup>

        <button className="kf-btn red small full center"
                style={{ marginTop: '20px' }} onClick={handleDelete}>
          Delete Step at {currentStep}%
        </button>
      </div>
    )
  } else {
    return <></>
  }
}

export default Sidebar
