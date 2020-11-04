import React, { useEffect } from 'react'
import Toast from './Toast'
import $ from 'jquery'

function ElementPicker() {
  useEffect(() => {

    // const getURL = chrome.extension.getURL
    let target = null

    // TODO: Remove listener once its done
    $('body').children()
      .on('mouseover.1604510142', function(e) {
        if (!target) {
          $('.kf-element-picker').removeClass('kf-element-picker')
          $(e.target).addClass('kf-element-picker')
        }
        return false
      })
      .on('mouseout.1604510142', function() {
        if (!target) {
          $(this).removeClass('kf-element-picker')
        }
      })

    // TODO: Remove listener once its done
    $(document).on('click.1604510142', function(event) {
      if (!target) {
        $('.kf-element-picker').removeClass('kf-element-picker')
        event.preventDefault()
        target = event.target

        console.log('Target element selected:', target)
      }
    })

    return () => {
      $('body').children().off('mouseover.1604510142').off('mouseout.1604510142')
      $(document).off('click.1604510142')
    }
  }, [])

  return (
    <>
      <Toast message="Click on an element you would like to animate." />
    </>
  )
}

export default ElementPicker
