import React from 'react'

function Sidebar() {
  return (
    <div className="kf-sidebar">
      <div className="ts-header">
        CSS Properties
        at <span className="kf-current-step">0</span>%
      </div>
      <div className="ts-subheader">
        Don't forget units when necessary.
        <br />
        <small>& if you change a value on one step, it should have a value on
          every step, even if it's the same or 0.</small>
      </div>

      <div className="kf-presets">
        <div className="kf-presets-header kf-well-active">Transform</div>
        <div id="transformProps" className="kf-preset-well">
          <div className="kf-preset-option">
            <div className="kf-po-label">Rotate</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="180deg"
                     id="presetRotate" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Scale</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="number" step="0.1"
                     placeholder="1.5" id="presetScale" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">TranslateX</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="100px"
                     id="presetTransX" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">TranslateY</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="-20%"
                     id="presetTransY" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">SkewX</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="15deg"
                     id="presetSkewX" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">SkewY</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="-25deg"
                     id="presetSkewY" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Transform Origin</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="50% 50%"
                     id="presetTransOrigin" />
            </div>
          </div>
        </div>
      </div>

      <div className="kf-presets">
        <div className="kf-presets-header">Colors & Font</div>
        <div className="kf-preset-well">
          <div className="kf-preset-option">
            <div className="kf-po-label">Background</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="#a5c9e4"
                     id="presetBG" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Opacity</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="number" max="1" min="0"
                     step="0.01" placeholder="0.5" id="presetOpacity" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Color (Text)</div>
            <div className="kf-po-value">
              <input className="kf-po-input" placeholder="#f0f99c"
                     id="presetColor" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Font Size</div>
            <div className="kf-po-value">
              <input className="kf-po-input" placeholder="18px"
                     id="presetFontSize" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Font Weight</div>
            <div className="kf-po-value">
              <input className="kf-po-input" placeholder="bolder"
                     id="presetFontWeight" />
            </div>
          </div>
        </div>
      </div>


      <div className="kf-presets">
        <div className="kf-presets-header">Size & Spacing</div>
        <div className="kf-preset-well">
          <div className="kf-preset-option">
            <div className="kf-po-label">Width</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="100px"
                     id="presetWidth" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Height</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text" placeholder="120px"
                     id="presetHeight" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Margin</div>
            <div className="kf-po-value">
              <input className="kf-po-input" placeholder="5px"
                     id="presetMargin" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Padding</div>
            <div className="kf-po-value">
              <input className="kf-po-input" placeholder="10px"
                     id="presetPadding" />
            </div>
          </div>
        </div>
      </div>

      <div className="kf-presets">
        <div className="kf-presets-header">Border & Shadow</div>
        <div className="kf-preset-well">
          <div className="kf-preset-option">
            <div className="kf-po-label">Border</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text"
                     placeholder="5px solid red" id="presetBorder" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Box Shadow</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text"
                     placeholder="10px 10px 5px 2px rgba(0,0,0,0.75);"
                     id="presetShadow" />
            </div>
          </div>
          <div className="kf-preset-option">
            <div className="kf-po-label">Outline</div>
            <div className="kf-po-value">
              <input className="kf-po-input" type="text"
                     placeholder="2px solid red" id="presetOutline" />
            </div>
          </div>
        </div>
      </div>


      <button id="deleteKeyframePos" className="kf-btn red small full center">
        Delete Step at&nbsp;<b className="kf-current-step"></b>%
      </button>

    </div>
  )
}

export default Sidebar
