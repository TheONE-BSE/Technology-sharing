let WINDOW_WIDTH = 1024
let WINDOW_HEIGHT = 768
let RADIUS = 8
let MARGIN_TOP = 60
let MARGIN_LEFT = 30

window.onload = function() {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')

  context.width = WINDOW_WIDTH
  context.height = WINDOW_HEIGHT

  setInterval(() => {
    render(context)
  }, 1000)
}

function render(cxt) {
  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)

  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  readerDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt)
  readerDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt)
  readerDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt)
  readerDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt)
  readerDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt)
  readerDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt)
  readerDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt)
  readerDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt)
}

function readerDigit(x, y, num, cxt) {
  cxt.fillStyle = 'rgb(0, 102, 153)'

  for (let i in digit[num]) {
    for (let j in digit[num][i]) {
      if (digit[num][i][j] === 1) {
        cxt.beginPath()
        cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI)
        cxt.closePath()

        cxt.fill()
      }
    }
  }
}