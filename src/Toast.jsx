import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

function Toast({ message }) {
  const divEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      $(divEl.current).animate({
        left: '0px',
      }, 250, $.noop)
    }, 100)

    setTimeout(() => {
      $(divEl.current).animate({
        left: '-240px',
      }, 250, $.noop)
    }, 4000)
  }, [])

  return (
    <div id="kfToast" ref={divEl}>{message}</div>
  )
}

export default Toast
