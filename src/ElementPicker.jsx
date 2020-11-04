import React, { useEffect } from 'react'
import Toast from './Toast'
import $ from 'jquery'
import { useStore } from './store'
import { SELECT_ELEMENT } from './actions'

/**
 * Selects an element on the page.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function ElementPicker() {

  const { dispatch } = useStore()

  function handleMouseOver(e) {
    $('.kf-element-picker').removeClass('kf-element-picker')
    $(e.target).addClass('kf-element-picker')
    return false
  }

  function handleMouseOut(e) {
    $(e.target).removeClass('kf-element-picker')
  }

  function handleClick(e) {
    $('.kf-element-picker').removeClass('kf-element-picker')
    e.preventDefault()
    console.log('Target element selected:', e.target)
    dispatch(SELECT_ELEMENT(e.target))
  }

  useEffect(() => {
    $('body').children()
      .on('mouseover.1604510142', handleMouseOver)
      .on('mouseout.1604510142', handleMouseOut)
    $(document).on('click.1604510142', handleClick)

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
