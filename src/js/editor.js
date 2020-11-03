import $ from 'jquery'

let keyframeTargetElement = null

// Set up variables
let currentStep = 0

// Variable containing all steps
let stepStyles = {}
let stepValues = {}

// Update data on page
function updatePageData() {
  // Update current step number
  $('.kf-current-step').each(() => {
    $(this).text(currentStep)
  })
}

// Append styles to page
let animationProperties = ''

// Live update CSS on target element
let targetStyles = ''

/**
 * Presets elements in sidebar.
 * @type {jQuery|HTMLElement}
 */
const presetRotate = $('#presetRotate')
const presetScale = $('#presetScale')
const presetTransX = $('#presetTransX')
const presetTransY = $('#presetTransY')
const presetSkewX = $('#presetSkewX')
const presetSkewY = $('#presetSkewY')

const presetTransOrigin = $('#presetTransOrigin')
const presetBG = $('#presetBG')
const presetOpacity = $('#presetOpacity')
const presetColor = $('#presetColor')
const presetFontSize = $('#presetFontSize')
const presetFontWeight = $('#presetFontWeight')

const presetWidth = $('#presetWidth')
const presetHeight = $('#presetHeight')
const presetMargin = $('#presetMargin')
const presetPadding = $('#presetPadding')
const presetBorder = $('#presetBorder')
const presetShadow = $('#presetShadow')
const presetOutline = $('#presetOutline')

function hasTransformPresets() {
  return presetRotate.val()
    || presetScale.val()
    || presetTransX.val()
    || presetTransY.val()
    || presetSkewX.val()
    || presetSkewY.val()
}

function updateTargetStyles() {

  let css = {}

  // Transform props
  let transform = []
  if (hasTransformPresets()) {
    if (presetRotate.val()) {
      transform.push('rotate(' + presetRotate.val() + ')')
    }
    if (presetScale.val()) {
      transform.push('scale(' + presetScale.val() + ')')
    }
    if (presetTransX.val()) {
      transform.push('translateX(' + presetTransX.val() + ')')
    }
    if (presetTransY.val()) {
      transform.push('translateY(' + presetTransY.val() + ')')
    }
    if (presetSkewX.val()) {
      transform.push('skewX(' + presetSkewX.val() + ')')
    }
    if (presetSkewY.val()) {
      transform.push('skewY(' + presetSkewY.val() + ')')
    }
    css['transform'] = transform.join(' ')
  }

  css['transform-origin'] = presetTransOrigin.val()

  // Colors & Fonts
  css['background'] = presetBG.val()
  css['opacity'] = presetOpacity.val()
  css['color'] = presetColor.val()
  css['font-size'] = presetFontSize.val()
  css['font-weight'] = presetFontWeight.val()

  // Size & Spacing
  css['width'] = presetWidth.val()
  css['height'] = presetHeight.val()
  css['margin'] = presetMargin.val()
  css['padding'] = presetPadding.val()

  // Border / shadow
  css['border'] = presetBorder.val()
  css['box-shadow'] = presetShadow.val()
  css['outline'] = presetOutline.val()

  const styles = css.filter(prop => prop !== undefined && prop !== null)
  $(keyframeTargetElement).attr('style', '')
  $(keyframeTargetElement).css(styles)
}

const animationDuration = $('#animationDuration')
const animationIterations = $('#animationIterations')
const animationDelay = $('#animationDelay')
const animationTiming = $('#animationTiming')

const kfStyleContainer = $('#kfStyleContainer')

function appendStyles() {
  // Prepare animation properties
  animationProperties = ''
  if (!animationDuration.val()) {
    animationDuration.val('3s')
  }
  if (!animationIterations.val()) {
    animationIterations.val('infinite')
  }
  if (!animationDelay.val()) {
    animationDelay.val('0s')
  }
  // 3s infinite ease-in-out
  animationProperties += animationDuration.val() + ' '
  animationProperties += animationIterations.val() + ' '
  animationProperties += animationDelay.val() + ' '
  animationProperties += animationTiming.val() + ';'

  kfStyleContainer.empty()
  kfStyleContainer.append('@keyframes yourAnimation{')

  $.each(stepStyles, function(key, val) {
    kfStyleContainer.append(key + '%{' + val + '}')
  })

  kfStyleContainer.append('}\n')
  kfStyleContainer.append('.elementToAnimate{ animation: yourAnimation ' + animationProperties + '}')
  kfStyleContainer.append('.animate-timeline-tracker{ animation: trackerAnimation ' + animationProperties + '}')
}

function getPresetValues() {
  return [
    presetRotate.val(),
    presetScale.val(),
    presetTransX.val(),
    presetTransY.val(),
    presetSkewX.val(),
    presetSkewY.val(),
    presetTransOrigin.val(),
    presetBG.val(),
    presetOpacity.val(),
    presetColor.val(),
    presetFontSize.val(),
    presetFontWeight.val(),
    presetWidth.val(),
    presetHeight.val(),
    presetMargin.val(),
    presetPadding.val(),
    presetBorder.val(),
    presetShadow.val(),
    presetOutline.val(),
  ]
}

function setPresetValues(values) {
  presetRotate.val(values[0])
  presetScale.val(values[1])
  presetTransX.val(values[2])
  presetTransY.val(values[3])
  presetSkewX.val(values[4])
  presetSkewY.val(values[5])
  presetTransOrigin.val(values[6])
  presetBG.val(values[7])
  presetOpacity.val(values[8])
  presetColor.val(values[9])
  presetFontSize.val(values[10])
  presetFontWeight.val(values[11])
  presetWidth.val(values[12])
  presetHeight.val(values[13])
  presetMargin.val(values[14])
  presetPadding.val(values[15])
  presetBorder.val(values[16])
  presetShadow.val(values[17])
  presetOutline.val(values[18])
}

// TODO: Get preset styles

const kfTimelineBody = $('#kfTimelineBody')

// Add a new step
// Or change to existing
function changeStep(percent) {

  let newStepPercent = percent
  let prevStep = currentStep

  stepStyles[prevStep] = targetStyles
  stepValues[prevStep] = getPresetValues()

  if (!stepStyles[newStepPercent]) {
    stepStyles[newStepPercent] = targetStyles
    stepValues[prevStep] = getPresetValues()
  } else {
    // Set target element styles form existing step
    targetStyles = stepStyles[newStepPercent]

    // Set input vals
    setPresetValues(stepValues[newStepPercent])
    updateTargetStyles()
  }

  // Clear timeline before adding again
  kfTimelineBody.empty()
  kfTimelineBody.append('<div id="timelineTracker"></div>')
  kfTimelineBody.append('<div id="timelineMarker"><b></b></div>')

  $.each(stepStyles, function(key, val) {
    kfTimelineBody.append(
      `<div class="timeline-step" id="timelineStep-${key}" data-step="${key}"
            style="left: ${key}%"><label>${key}</label></div>`,
    )
  })

  currentStep = newStepPercent
  // Set active class for current timeline step;
  $('.timeline-step').removeClass('active')
  $('#timelineStep-' + newStepPercent).addClass('active')

  updatePageData()
}

function startAnimation() {
  $('#kfStartAnimationButton').css('display', 'none')
  $('#kfStopAnimationButton').css('display', 'flex')
  changeStep(currentStep)
  appendStyles()
  $(keyframeTargetElement).addClass('elementToAnimate')
  $('#timelineTracker').addClass('animate-timeline-tracker')
}

function stopAnimation() {
  $('#kfStopAnimationButton').css('display', 'none')
  $('#kfStartAnimationButton').css('display', 'flex')
  $(keyframeTargetElement).removeClass('elementToAnimate')
  $('#timelineTracker').removeClass('animate-timeline-tracker')
}

// Click timeline step, go to that step
$('.timeline-step').click(function() {
  changeStep($(this).getAttribute('data-step'))
})


// Delete Step
// Delete Step
// Delete Step
$('#deleteKeyframePos').click(function() {
  let stepToDelete = currentStep
  changeStep(0)
  delete stepStyles[stepToDelete]
  delete stepValues[stepToDelete]
  changeStep(0)
})


// Click Timeline
// Click Timeline
// Click Timeline
var hoverNewStepPos = 0
$('#kfTimelineBody').mousemove(function(event) {
  var elementMousePos = event.pageX - $('#kfTimelineBody').offset().left + 5
  var elementWidth = $('#kfTimelineBody').width()

  var percentagePos = (elementMousePos / elementWidth * 100)

  var markerLeft = percentagePos.toString().substring(0, 4)

  $('#timelineMarker').css({ 'left': markerLeft + '%' })
  $('#timelineMarker b').text(markerLeft.split('.')[0] + '%')
  hoverNewStepPos = markerLeft.split('.')[0]
})

// Click timeline to add new step
// NOT on timeline step
$('#kfTimelineBody').click(function() {
  changeStep(hoverNewStepPos)
})


// Show Output CSS
// Show Output CSS
// Show Output CSS
$('#showOutputButton').click(function() {

  changeStep(currentStep)
  appendStyles()

  $('#kfOutput').empty()
  // Tell people to follow me on Twitter
  $('#kfOutput').append('/* I hope this was helpful! */\n')
  $('#kfOutput').append('/* Follow me on Twitter 🐤 <a href=\'https://twitter.com/sleumasm\' target=\'_blank\'>@sleumasm</a> to see what I\'m up to. */\n')
  $('#kfOutput').append('/* Also check out my other project I\'m working on - <a href=\'https://ceev.io\' target=\'_blank\'>Ceev.io</a>. A pretty cool online resume creator 📃. */\n\n\n')

  $('#kfOutput').append('/* Your animation code is below! 👇👇👇 */\n')
  $('#kfOutput').append('___________________________________________\n\n\n')

  $('#kfOutput').append('@keyframes yourAnimation{\n')

  $.each(stepStyles, function(key, val) {
    $('#kfOutput').append('    ' + key + '%{\n        ' + val.replace(/\;/g, ';\n        '))
    $('#kfOutput').append('}\n')
  })
  $('#kfOutput').append('}\n\n')
  $('#kfOutput').append('.elementToAnimate{\n    animation: yourAnimation ' + animationProperties + '\n}')

  // Actual Show Output
  $('#kfOutput').css('display', 'block')
  $('#kfCodeLightbox').css('display', 'block')
  $('.kf-code-window').css('display', 'flex')
})

// Toggle wells on sidebar
$('.kf-presets-header').click(function() {
  $(this).next('.kf-preset-well').slideToggle(100)
  $(this).toggleClass('kf-well-active')
})


// Close Lightbox and Editor
$('#kfCodeLightbox, #closeKfCodeWindow').click(function() {
  $('#kfCodeLightbox').css('display', 'none')
  $('.kf-code-window').css('display', 'none')
  // Hide Output code
  $('#kfOutput').css('display', 'none')
})


$('.kf-po-input').keyup(function(event) {
  updateTargetStyles()
  stopAnimation()
})
// Stop animation if changing animation props
$('#animationTiming, #animationDelay, #animationIterations, #animationDuration').focus(function(event) {
  stopAnimation()
})

// Convert a bunch of onclicks to scripts
$('#animationProperties').click(function() {
  stopAnimation()
})

$('#deleteCurrentStep').click(function() {
  deleteCurrentStep()
})
$('#kfStartAnimationButton').click(function() {
  startAnimation()
})
$('#kfStopAnimationButton').click(function() {
  stopAnimation()
})

// Terminate App
$('#closeKeyframes').click(function() {
  $('.kf-sidebar, .kf-timeline, #kfCodeLightbox, .kf-code-window, #kfToast').remove()
  stopAnimation()
  $('#styleContainer').empty()
  $(keyframeTargetElement).attr('style', '')
})

export function init(element) {
  keyframeTargetElement = element

  // Set initial step to 0
  changeStep('0')
}
