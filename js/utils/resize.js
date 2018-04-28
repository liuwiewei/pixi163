const stageWrap = document.querySelector('#main')
const iniW = 1040
const iniH = 640
const timer1Delay = 200
const baseLength = 47740 + 1400
let timer1 = null
let scrollDirection = 'top'
let lastWidth = window.screen.height
let contentLength = baseLength + lastWidth
let scrollPro =  0

const v = (app, scroller, titleStart) => {
  const screenOrientation = "horizontal"
  const ww = window.screen.width
  const wh = window.screen.height
  const tarW = ww
  const tarH = tarW*iniH/iniW
  stageWrap.style.width = `${wh}px`
  stageWrap.style.height = `${ww}px`
  if (scroller) {
    app.renderer.autoResize = true
    app.renderer.resize(wh, ww)
    timer1 && clearTimeout(timer1)
    timer1 = setTimeout(() => {
      scrollDirection = 'top'
      lastWidth = wh
      contentLength = baseLength + lastWidth - 390
      scroller.setDimensions(app.view.width, app.view.height, app.view.height, contentLength)
      scroller.scrollTo(0, scrollPro, false)
      titleStart.x = (lastWidth - 541) / 2
      titleStart.y = 276
    }, timer1Delay)
  }

}
const resize = (app, scroller, titleStart) => {
  v(app, scroller, titleStart)
}