import React, { useRef, useState } from 'react'
import TimelineStep from './TimelineStep'
import { useStore } from './store'
import { ADD_STEP, SET_ANIMATION_OPTION } from './actions'

function AnimationOption({ label, children }) {
  return (
    <div className="kftn-animation-prop">
      <label>{label}</label>
      {children}
    </div>
  )
}

function Timeline() {
  const { state, dispatch } = useStore()
  const [playing, setPlaying] = useState(false)
  const markerEl = useRef(null)
  let newStepId = 0

  function startAnimation() {
    setPlaying(true)
    state.element.classList.add('elementToAnimate')
  }

  function stopAnimation() {
    setPlaying(false)
    state.element.classList.remove('elementToAnimate')
  }

  function handleMouseMove(e) {
    const element = e.target
    const boundingRect = element.getBoundingClientRect()
    const elementMousePos = e.pageX - boundingRect.left
    newStepId = Math.round(elementMousePos / element.offsetWidth * 100)

    // FIXME: Marker is slow
    if (markerEl.current && markerEl.current instanceof HTMLElement) {
      markerEl.current.style.left = newStepId + '%'
      markerEl.current.querySelector('b').innerHTML = newStepId + '%'
    }
  }

  function handleClick() {
    dispatch(ADD_STEP(newStepId))
  }

  function handleChange(e) {
    dispatch(SET_ANIMATION_OPTION(e.target.name, e.target.value))
  }

  return (
    <div className="kf-timeline">
      <div className="kf-timeline-nav">
        <div className="kftn-left">
          {!playing && (
            <button className="kf-btn" onClick={startAnimation}>
              Start Animation
            </button>
          )}
          {playing && (
            <button className="kf-btn red" onClick={stopAnimation}>
              Stop Animation
            </button>
          )}
        </div>

        <div className="kftn-mid">
          <AnimationOption label={<span>Animation<br />Duration</span>}>
            <input name="duration" type="text" value="3s"
                   onChange={handleChange} />
          </AnimationOption>

          <AnimationOption label="Iterations">
            <input name="iterations" type="text" value="infinite"
                   onChange={handleChange} style={{ width: '84px' }} />
          </AnimationOption>

          <AnimationOption label="Delay">
            <input name="delay" type="text" value="0s"
                   onChange={handleChange} />
          </AnimationOption>

          <AnimationOption label="Timing">
            <select name="timing" style={{ width: '84px' }}
                    onChange={handleChange}>
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

      <div id="kfTimelineBody" onMouseMove={handleMouseMove}
           onClick={handleClick}>
        <div id="timelineTracker"
             className={playing ? 'animate-timeline-tracker' : ''} />
        <div id="timelineMarker" ref={markerEl}><b /></div>
        {state.steps.map((step, k) => <TimelineStep key={k} {...step} />)}
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
