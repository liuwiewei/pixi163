
const timer1Delay = 200
const baseLength = 47740 + 1400
let timer1 = null
let scrollDirection = 'top'
let lastWidth = window.screen.height
let contentLength = baseLength + lastWidth
// let scrollPro =  0

const iniW = 1040
const iniH = 640
let tarW = 0
let tarH = 0

// 竖屏
const v = (app, scroller, titleStart, titleHand, stageWrap, scrollPro) => {
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
  
        titleStart.x = wh / 2 - wh / 4
        titleStart.y = 150
        titleStart.width = wh / 2
        titleStart.height = wh / 40

        titleHand.x = (window.screen.width - 83) / 2 + 45
        titleHand.y = 200
        titleHand.width = wh / 12
        titleHand.height = wh / 8
        TweenMax.fromTo(titleHand, 1.5, {x: (wh / 2)}, {x: (wh /2.5), ease:Linear.easeNone}).repeat(-1)
        
      }, timer1Delay)
    }
  }, timer1Delay)
}

// 横屏
const h = (app, scroller, titleStart, titleHand, stageWrap, scrollPro) => {
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
        
        titleStart.x = ww / 2 - ww / 4,
        titleStart.y = 150

        titleHand.x = (window.screen.height - 83) / 2 + 45
        titleHand.y = 200
        titleHand.width = ww / 12
        titleHand.height = ww / 8
        TweenMax.fromTo(titleHand, 1.5, {x: (ww / 2)}, {x: (ww /2.5), ease:Linear.easeNone}).repeat(-1)
       
      }, timer1Delay)
    }
  }, timer1Delay)
}

const resize = (app, scroller, titleStart, titleHand, stageWrap, scrollPro) => {
  if (window.orientation === 90 || window.orientation === -90) {
    // 横屏
    h(app, scroller, titleStart, titleHand, stageWrap, scrollPro)
  } else {
    // 竖屏
    v(app, scroller, titleStart, titleHand, stageWrap, scrollPro)
  }
  
}
export {
  stageWrap,
  resize
}