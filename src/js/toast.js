import $ from 'jquery'

const kfToast = $('#kfToast')

export function showToast(message) {
  setTimeout(() => {
    kfToast.text(message)
    kfToast.animate({
      left: '0px',
    }, 250, $.noop)
  }, 100)

  setTimeout(() => {
    $('#kfToast').animate({
      left: '-240px',
    }, 250, $.noop)
  }, 4000)
}
