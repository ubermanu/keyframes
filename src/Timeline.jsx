import React from 'react'

function AnimationOption({ label, children }) {
  return (
    <div className="kftn-animation-prop">
      <label>{label}</label>
      {children}
    </div>
  )
}

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
          <AnimationOption label={<span>Animation<br />Duration</span>}>
            <input name="duration" type="text" value="3s" />
          </AnimationOption>

          <AnimationOption label="Iterations">
            <input name="iterations" type="text" value="infinite" />
          </AnimationOption>

          <AnimationOption label="Delay">
            <input name="delay" type="text" value="0s" />
          </AnimationOption>

          <AnimationOption label="Timing">
            <select name="timing">
              <option value="linear">Linear</option>
              <option value="ease">Ease</option>
              <option value="ease-in">Ease-In</option>
              <option value="ease-out">Ease-Out</option>
              <option value="ease-in-out">Ease-In-Out</option>
            </select>
          </AnimationOption>
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
        <span className="small">Made by <a href="https://mitch.works"
                                           target="_blank">mitch.works</a> / <a
          href="https://twitter.com/sleumasm"
          target="_blank">@sleumasm</a></span>
        <span id="closeKeyframes">Close Keyframes.app</span>
      </div>
    </div>
  )
}

export default Timeline
