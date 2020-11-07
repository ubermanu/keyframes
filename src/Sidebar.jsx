import React, { useState } from 'react'
import { UPDATE_STEP_PROPERTY } from './actions'
import { useStore } from './store'

function PresetGroup({ title, children }) {
  const [active, setActive] = useState(false)
  const toggle = () => setActive(a => !a)

  return (
    <div className="kf-presets">
      <div className={`kf-presets-header ${active ? 'kf-well-active' : ''}`}
           onClick={toggle}>{title}</div>
      <div className="kf-preset-well"
           style={{ display: active ? 'block' : 'none' }}>{children}</div>
    </div>
  )
}

function Preset({ label, ...inputProps }) {
  return (
    <div className="kf-preset-option">
      <div className="kf-po-label">{label}</div>
      <div className="kf-po-value">
        <input className="kf-po-input" {...inputProps} />
      </div>
    </div>
  )
}

function Sidebar() {
  const { state, dispatch } = useStore()

  function handleChange(e) {
    dispatch(UPDATE_STEP_PROPERTY(state.currentStep, e.target.name, e.target.value))
  }

  return (
    <div className="kf-sidebar">
      <div className="ts-header">
        CSS Properties at <span className="kf-current-step">0</span>%
      </div>
      <div className="ts-subheader">
        Don't forget units when necessary.
        <br />
        <small>& if you change a value on one step, it should have a value on
          every step, even if it's the same or 0.</small>
      </div>

      <PresetGroup title={'Transform'}>
        <Preset label={'Rotate'} type="text" placeholder="180deg"
                id="presetRotate" />
        <Preset label={'Scale'} type="number" step="0.1" placeholder="1.5"
                id="presetScale" />
        <Preset label={'TranslateX'} type="text" placeholder="100px"
                id="presetTransX" />
        <Preset label={'TranslateY'} type="text" placeholder="-20%"
                id="presetTransY" />
        <Preset label={'SkewX'} type="text" placeholder="15deg"
                id="presetSkewX" />
        <Preset label={'SkewY'} type="text" placeholder="-25deg"
                id="presetSkewY" />
        <Preset label={'Transform Origin'} type="text" placeholder="50% 50%"
                id="presetTransOrigin" />
      </PresetGroup>

      <PresetGroup title={'Colors & Font'}>
        <Preset label={'Background'} type="text" placeholder="#a5c9e4"
                id="presetBG" />
        <Preset label={'Opacity'} type="number" max="1" min="0"
                step="0.01" placeholder="0.5" id="presetOpacity" />
        <Preset label={'Color (Text)'} type="text" placeholder="#f0f99c"
                id="presetColor" />
        <Preset label={'Font Size'} type="text" placeholder="18px"
                id="presetFontSize" />
        <Preset label={'Font Weight'} type="text" placeholder="bolder"
                id="presetFontWeight" />
      </PresetGroup>

      <PresetGroup title={'Size & Spacing'}>
        <Preset label={'Width'} type="text" placeholder="100px"
                id="presetWidth" />
        <Preset label={'Height'} type="text" placeholder="120px"
                id="presetHeight" />
        <Preset label={'Margin'} type="text" placeholder="5px"
                id="presetMargin" />
        <Preset label={'Padding'} type="text" placeholder="10px"
                id="presetPadding" />
      </PresetGroup>

      <PresetGroup title={'Border & Shadow'}>
        <Preset label={'Border'} type="text" placeholder="5px solid red"
                id="presetBorder" />
        <Preset label={'Box Shadow'} type="text"
                placeholder="10px 10px 5px 2px rgba(0,0,0,0.75)"
                id="presetShadow" />
        <Preset label={'Outline'} type="text" placeholder="2px solid red"
                id="presetOutline" />
      </PresetGroup>

      <button id="deleteKeyframePos" className="kf-btn red small full center">
        Delete Step at <b className="kf-current-step" />%
      </button>
    </div>
  )
}

export default Sidebar
