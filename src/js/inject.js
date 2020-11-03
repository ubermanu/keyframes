import $ from 'jquery'
import { showToast } from './toast'
import { waitForTarget } from './element-picker'
import { init as runKeyframes } from './editor'

// Append CSS File to head
// TODO: Make it removable
$('head').append('<link href="' + chrome.extension.getURL('styles/css/keyframes.css') + '" rel="stylesheet">')

// Append timeline
$.get(chrome.extension.getURL('ui/floatingElements.html'), function(data) {
  $('body').append(data)
})

showToast('Click on an element you would like to animate.')
waitForTarget(runKeyframes)
