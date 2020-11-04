// Get target element from page
import $ from 'jquery'

const getURL = chrome.extension.getURL
let target = null

// TODO: Remove listener once its done
$('body').children()
  .mouseover(function(e) {
    if (!target) {
      $('.kf-element-picker').removeClass('kf-element-picker')
      $(e.target).addClass('kf-element-picker')
    }
    return false
  })
  .mouseout(function() {
    if (!target) {
      $(this).removeClass('kf-element-picker')
    }
  })

// TODO: Remove listener once its done
$(document).click(function(event) {
  if (!target) {
    $('.kf-element-picker').removeClass('kf-element-picker')
    event.preventDefault()
    target = event.target

    console.log('Target element selected:', target)

    // Inject HTML Content
    // Append sidebar
    $.get(getURL('ui/sidebar.html'), function(data) {
      $('body').append(data)
    })

    // Append timeline
    $.get(getURL('ui/timeline.html'), function(data) {
      $('body').append(data)
    })
  }
})

// Wait for target element before executing actual functions
// TODO: Implement promise
export function waitForTarget(fn) {
  if (target) {
    fn(target)
  } else {
    setTimeout(function() {
      waitForTarget(fn)
    }, 100)
  }
}
