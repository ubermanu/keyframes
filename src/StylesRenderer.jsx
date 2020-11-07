import React from 'react'
import { useStore } from './store'

const transformProps = [
  'rotate',
  'scale',
  'translateX',
  'translateY',
  'skewX',
  'skewY',
]

function getAnimationProperties(state) {
  let animationProperties = ''
  animationProperties += state.animation.duration + ' '
  animationProperties += state.animation.iterations + ' '
  animationProperties += state.animation.delay + ' '
  animationProperties += state.animation.timing + ';'

  return animationProperties
}

function getStepStyles(styles) {
  let css = {}

  for (let propertyName in styles) {
    if (styles.hasOwnProperty(propertyName)) {
      const value = styles[propertyName]
      if (transformProps.includes(propertyName)) {
        if (!('transform' in css)) {
          css['transform'] = ''
        }
        css['transform'] += ' ' + propertyName + '(' + value + ')'
      } else {
        css[propertyName] = value
      }
    }
  }

  return Object.entries(css).map(([property, value]) => `
      ${property}: ${value};
    `).join('')
}

export function getElementStyles(state) {
  const animationProperties = getAnimationProperties(state)
  return `
    @keyframes yourAnimation {
    ${state.steps.map(({ id, styles }) => `
      ${id}% {
        ${getStepStyles(styles)}
      }`).join('')}
    }
    .elementToAnimate {
      animation: yourAnimation ${animationProperties}
    }`
}

function getTimelineStyles(state) {
  const animationProperties = getAnimationProperties(state)
  return `
    .animate-timeline-tracker {
      animation: trackerAnimation ${animationProperties}
    }`
}

function StylesRenderer() {
  const { state } = useStore()
  return (
    <style id="kfStyleContainer">
      {getElementStyles(state)}
      {getTimelineStyles(state)}
    </style>
  )
}

export default StylesRenderer
