import React from 'react'

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

export default Preset
