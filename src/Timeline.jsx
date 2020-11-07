import React, { useRef, useState } from 'react'
import { useStore } from './store'
import { ADD_STEP, SET_ANIMATION_OPTION } from './actions'
import $ from 'jquery'

function AnimationOption({ label, children }) {
  return (
    <div className="kftn-animation-prop">
      <label>{label}</label>
      {children}
    </div>
  )
}

function TimelineStep({ id }) {
  return (
    <div className="timeline-step" id={`timelineStep-${id}`}
         data-step={id} style={{ left: `${id}%` }}>
      <label>{id}</label>
    </div>
  )
}

function Timeline() {
  const { state, dispatch } = useStore()
  const markerEl = useRef(null)
  let hoverNewStepPos = 0

  function startAnimation() {
    $('#kfStartAnimationButton').css('display', 'none')
    $('#kfStopAnimationButton').css('display', 'flex')
    // changeStep(currentStep)
    // appendStyles()
    $(state.element).addClass('elementToAnimate')
    $('#timelineTracker').addClass('animate-timeline-tracker')
  }

  function stopAnimation() {
    $('#kfStopAnimationButton').css('display', 'none')
    $('#kfStartAnimationButton').css('display', 'flex')
    $(state.element).removeClass('elementToAnimate')
    $('#timelineTracker').removeClass('animate-timeline-tracker')
  }

  function handleMouseMove(e) {
    const elementMousePos = e.pageX - $(e.target).offset().left + 5
    const elementWidth = $(e.target).width()
    const percentagePos = (elementMousePos / elementWidth * 100)
    const markerLeft = percentagePos.toString().substring(0, 4)

    // FIXME: Marker is slow
    $(markerEl.current).css('left', markerLeft + '%')
    $('b', markerEl.current).text(markerLeft.split('.')[0] + '%')
    hoverNewStepPos = markerLeft.split('.')[0]
  }

  function handleClick(e) {
    console.log(hoverNewStepPos)
    dispatch(ADD_STEP(hoverNewStepPos))
  }

  function handleChange(e) {
    dispatch(SET_ANIMATION_OPTION(e.target.name, e.target.value))
  }

  return (
    <div className="kf-timeline">
      <div className="kf-timeline-nav">
        <div className="kftn-left">
          <button className="kf-btn" id="kfStartAnimationButton"
                  onClick={startAnimation}>
            Start Animation
          </button>
          <button className="kf-btn red" id="kfStopAnimationButton"
                  onClick={stopAnimation}>
            Stop Animation
          </button>
        </div>

        <div className="kftn-mid">
          <AnimationOption label={<span>Animation<br />Duration</span>}>
            <input name="duration" type="text" value="3s"
                   onChange={handleChange} />
          </AnimationOption>

          <AnimationOption label="Iterations">
            <input name="iterations" type="text" value="infinite"
                   onChange={handleChange} />
          </AnimationOption>

          <AnimationOption label="Delay">
            <input name="delay" type="text" value="0s"
                   onChange={handleChange} />
          </AnimationOption>

          <AnimationOption label="Timing">
            <select name="timing" onChange={handleChange}>
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
        <div id="timelineTracker" />
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
