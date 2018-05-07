import createSprite from './createSprite'
import {loadImageList, titleStartImg, titleHandImg, part2Biao} from './static'
import {stageWrap, resize} from './resize'

// import Part2 from './part2'

const ww = window.screen.width
const wh = window.screen.height
const baseLength = 47740 + 1400
let lastWidth = window.screen.height
let contentLength = baseLength + lastWidth
const Game = {
  app: null,
  scroller: null,
  titleStart: null,
  titleHand: null,
  stageWrap: null,
  containerWrap: null,
  scrollDirection: 'left',
  scrollPro: 0,
  init (Scroller) {
    this.stageWrap = document.querySelector('#main')
    this.containerWrap = new PIXI.Container()
    this.loadImg()
    this.initStage()
    this.beginScroll(Scroller)
  },
  loadImg () {
    const loadingWrap = document.querySelector('#loadingWrap')
    let timer
    loadImageList(() => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        loadingWrap.style.display = 'none'
      }, 300)
      // 游戏开始
      this.app && this.play()
    })
  },
  initStage () {
    const stageW = document.body.clientWidth
    const stageH = document.body.clientHeight
    this.app = new PIXI.Application({
      width: stageW,
      height: stageH,
      antialias: true,
      backgroundColor: '0xffffff',
      // transparent: true
    })
    this.app && this.stageWrap.appendChild(this.app.view)
  },
  play () {
    this.titleAndHand()
    resize(this.app, this.scroller, this.titleStart, this.titleHand, this.stageWrap, this.scrollPro)
    window.onresize = () => {
      resize(this.app, this.scroller, this.titleStart, this.titleHand, this.stageWrap, this.scrollPro)
    }

    const part2Container = new PIXI.Container()
    part2Container.x = 500
    part2Container.y = 0
    part2Container.width = 3408
    part2Container.height = 300
    part2Container.backgroundColor = '#000'

    const part2BiaoCont = new PIXI.Container()
    part2BiaoCont.x = 0
    part2Container.y = 205
    const part2BiaoBg = createSprite(part2Biao, {
            x: 0,
            y: 0
          })


    part2Container.addChild(part2BiaoCont)
    this.containerWrap.addChild(part2Container)
    this.app.stage.addChild(this.containerWrap)
    
  },
  titleAndHand () {
    const titleContainer = new PIXI.Container()
    titleContainer.x = 0
    titleContainer.y = 0
    titleContainer.width = 200
    titleContainer.height = 200
    this.titleStart = createSprite(titleStartImg, {
      x: ww / 2 - ww / 4,
      y: 150,
      width: ww / 2,
      height: wh / 25
    })
    this.titleHand = createSprite(titleHandImg, {
      x: (window.screen.height - 83) / 2 + 45,
      y: 200,
      width: ww / 12,
      height: ww / 8
    })
    const titleHandTween = TweenMax.fromTo(this.titleHand, 1.5, {x: (ww / 2)}, {x: (ww /2.5), ease:Linear.easeNone}).repeat(-1)
    titleContainer.addChild(this.titleStart, this.titleHand)
    this.app.stage.addChild(titleContainer)

    this.stageWrap.addEventListener('touchstart', () => {
      TweenMax.fromTo(titleContainer, 0.4, {alpha: 1}, {alpha: 0, onComplete: () => {
        titleContainer.visible = false
        titleHandTween.pause()
      }})
    })

  },
  beginScroll (Scroller) {
    // 创建scroller
    this.scroller = new Scroller((left, top, zoom) => {
      if (this.scrollDirection == 'top') {
        this.containerWrap.x = -top
      }
      if (this.scrollDirection == 'left') {
        this.containerWrap.x = -left
      }
      this.scrollPro = left > top ? left : top
      console.log(this.scrollPro)

    }, {
      zooming: true,
      bouncing: false
    })
    document.addEventListener('touchstart', (e) => {
      this.scroller.doTouchStart(e.touches, e.timeStamp)
    }, false)
    this.scroller.setDimensions(this.app.view.width, this.app.view.height, this.app.view.height, contentLength)

  }
}
export default Game