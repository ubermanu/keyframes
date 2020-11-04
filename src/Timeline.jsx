import React from 'react'

function Timeline() {
  return (
    <div className="kf-timeline">

      <div className="kf-timeline-nav">

        <div className="kftn-left">
          <button className="kf-btn" id="kfStartAnimationButton">
            Start Animation
          </button>

          <button className="kf-btn red" id="kfStopAnimationButton">
            Stop Animation
          </button>
        </div>

        <div className="kftn-mid">
          <div className="kftn-animation-prop">
            <label>Animation<br />Duration</label>
            <input type="text" value="3s" id="animationDuration" />
          </div>
          <div className="kftn-animation-prop">
            <label>Iterations</label>
            <input type="text" value="infinite" id="animationIterations" />
          </div>
          <div className="kftn-animation-prop">
            <label>Delay</label>
            <input type="text" value="0s" id="animationDelay" />
          </div>
          <div className="kftn-animation-prop">
            <label>Timing</label>
            <select id="animationTiming">
              <option value="linear">Linear</option>
              <option value="ease">Ease</option>
              <option value="ease-in">Ease-In</option>
              <option value="ease-out">Ease-Out</option>
              <option value="ease-in-out">Ease-In-Out</option>
            </select>
          </div>
        </div>

        <div className="kftn-right">

          <button className="kf-btn green" id="showOutputButton">
            Show Output CSS
          </button>
        </div>

      </div>

      <div id="kfTimelineBody">
        <div id='timelineMarker'>
          <b>50%</b>
        </div>
      </div>

      <div className="timeline-footer">
        <span>Click Timeline to add step</span>
        <span className="small">Made by <a href="https://mitch.works" target="_blank">mitch.works</a> / <a
          href="https://twitter.com/sleumasm"
          target="_blank">@sleumasm</a></span>
        <span id="closeKeyframes">Close Keyframes.app</span>
      </div>
    </div>
  )
}

export default Timeline
