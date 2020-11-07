import React from 'react'
import { useStore } from './store'

function StylesRenderer() {
  const { state } = useStore()

  let animationProperties = ''
  animationProperties += state.animation.duration + ' '
  animationProperties += state.animation.iterations + ' '
  animationProperties += state.animation.delay + ' '
  animationProperties += state.animation.timing + ';'

  function getElementStyles() {
    return `
    @keyframes yourAnimation {
    ${state.steps.map(({ id, styles }) => {
      // return id + '%{' + styles.map((k, v) => k + ':' + v + ';') + '}'
    })}
    }
    .elementToAnimate {
      animation: yourAnimation ${animationProperties}
    }`
  }

  function getTimelineStyles() {
    return `
    .animate-timeline-tracker {
      animation: trackerAnimation ${animationProperties}
    }`
  }

  return (
    <style id="kfStyleContainer">
      {getElementStyles()}
      {getTimelineStyles()}
    </style>
  )
}

export default StylesRenderer
