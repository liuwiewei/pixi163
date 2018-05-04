
const timer1Delay = 200
const baseLength = 47740 + 1400
let timer1 = null
let scrollDirection = 'top'
let lastWidth = window.screen.height
let contentLength = baseLength + lastWidth
let scrollPro =  0

const iniW = 1040
const iniH = 640
let tarW = 0
let tarH = 0
// const ww = window.screen.width
// const wh = window.screen.height

const v = (app, scroller, titleStart, stageWrap) => {
  const screenOrientation = "horizontal"
  setTimeout(() => {
    const ww = window.screen.width
    const wh = window.screen.height
    tarW = wh
    tarH = tarW*iniH/iniW
    stageWrap.style.width = `${wh}px`
    stageWrap.style.height = `${ww}px`
    stageWrap.style.transform = `translate3d(-50%, -50%, 0) rotate(90deg)`
    stageWrap.style['-webkit-transform'] = `translate3d(-50%, -50%, 0) rotate(90deg)`
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
        titleStart.y = 150
      }, timer1Delay)
    }
  }, timer1Delay)
}

const h = (app, scroller, titleStart, stageWrap) => {
  setTimeout(() => {
    const ww = window.screen.width
    const wh = window.screen.height
    tarW = ww
    tarH = tarW*iniH/iniW
    stageWrap.style.width = `${ww}px`
    stageWrap.style.height = `${wh}px`
    stageWrap.style.transform = `translate3d(-50%, -50%, 0)`
    stageWrap.style['-webkit-transform'] = `translate3d(-50%, -50%, 0)`
    if (scroller) {
      app.renderer.autoResize = true
      app.renderer.resize(ww, wh)
      timer1 && clearTimeout(timer1)
      timer1 = setTimeout(() => {
        scrollDirection = 'left'
        lastWidth = ww
        contentLength = baseLength + lastWidth
        scroller.setDimensions(app.view.width, app.view.height, contentLength, app.view.height)
        scroller.scrollTo(scrollPro, 0, false)
  
        titleStart.x = (lastWidth - 541) / 2
        titleStart.y = 150
      }, timer1Delay)
    }
  }, timer1Delay)
}

const resize = (app, scroller, titleStart, stageWrap) => {
  if (window.orientation === 90 || window.orientation === -90) {
    // 横屏
    h(app, scroller, titleStart, stageWrap)
  } else {
    // 竖屏
    v(app, scroller, titleStart, stageWrap)
  }
  
}
export {
  stageWrap,
  resize
}