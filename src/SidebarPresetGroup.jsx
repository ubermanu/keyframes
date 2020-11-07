import React, { useState } from 'react'

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

export default PresetGroup
