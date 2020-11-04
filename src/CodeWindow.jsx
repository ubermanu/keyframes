import React from 'react'

function CodeWindow() {
  return (
    <div className="kf-code-window">
      <div id="closeKfCodeWindow">&times;</div>

      <div className="kf-code-box" id="kfOutput" contentEditable="true"
           spellCheck="false"></div>

      <div className="kf-code-box" id="targetCSSCode" contentEditable="true"
           spellCheck="false">/* Styles for the element being animated */

        display: block;
        width: 70px;
        height: 70px;
        background-color: SlateBlue;
        border-radius: 3px;
        margin: 0 auto;
      </div>

      <div className="kf-code-box" id="stageCSSCode" contentEditable="true"
           spellCheck="false">/* Styles for the white stage/container element */

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 80%;
        height: 80%;
        background-color: white;
        margin: 0 auto;
      </div>

    </div>
  )
}

export default CodeWindow
