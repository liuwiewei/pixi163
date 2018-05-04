import createSprite from './createSprite'
import {loadImageList, titleStartImg, titleHandImg} from './static'
import {stageWrap, resize} from './resize'

const ww = window.screen.width
const wh = window.screen.height
const Game = {
  app: null,
  scroller: null,
  titleStart: null,
  stageWrap: null,
  init (Scroller) {
    this.stageWrap = document.querySelector('#main')
    this.loadImg()
    this.initStage(Scroller)
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
  initStage (Scroller) {
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

    // 创建scroller
    this.scroller = new Scroller((left, top, zoom) => {
    }, {
      zooming: true,
      bouncing: false
    })
    document.addEventListener('touchstart', (e) => {
      this.scroller.doTouchStart(e.touches, e.timeStamp)
    }, false)
  },
  play () {
    this.titleAndHand()
    resize(this.app, this.scroller, this.titleStart, this.stageWrap)
    window.onresize = () => {
      resize(this.app, this.scroller, this.titleStart, this.stageWrap)
    }
    
  },
  titleAndHand () {
    const titleContainer = new PIXI.Container()
    titleContainer.x = 0
    titleContainer.y = 0
    titleContainer.width = 200
    titleContainer.height = 200
    this.titleStart = createSprite(titleStartImg, {
      x: (window.screen.height - 541) / 2,
      y: 150,
      width: ww / 3 * 2
    })
    const titleHand = createSprite(titleHandImg, {
      x: (window.screen.height - 83) / 2 + 45,
      y: 200,
      width: 80,
    })
    const titleHandTween = TweenMax.fromTo(titleHand, 1.5, {x: (ww / 2 + 165)}, {x: (ww /2 + 65), ease:Linear.easeNone}).repeat(-1)
    titleContainer.addChild(this.titleStart, titleHand)
    this.app.stage.addChild(titleContainer)
  }
}
export default Game