import React from 'react'
import { useStore } from './store'
import { getElementStyles } from './StylesRenderer'
import { TOGGLE_CODE_WINDOW } from './actions'

function CodeWindow() {
  const { state, dispatch } = useStore()

  function handleClose() {
    dispatch(TOGGLE_CODE_WINDOW(false))
  }

  return (
    <>
      <div id="kfCodeLightbox" style={{ display: 'block' }}
           onClick={handleClose} />
      <div className="kf-code-window" style={{ display: 'block' }}>
        <div id="closeKfCodeWindow" onClick={handleClose}>&times;</div>
        <div className="kf-code-box" style={{ display: 'block' }}
             contentEditable="true" spellCheck="false">
          {getElementStyles(state)}
        </div>
      </div>
    </>
  )
}

export default CodeWindow
