let type = 'WebGL'
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type)


const Game = window.Game = {
  app: null,
  scroller: null,
  titleStart: null,
  init () {
    this.loadImg()
    this.initStage()
    resize(this.app, this.scroller, this.titleStart)
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
      this.play()
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
    this.app && stageWrap.appendChild(this.app.view)

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
    // const titleContainers = this.titleAndHand()
    // this.app.stage.addChild(titleContainers)
    
  },
  titleAndHand () {
    const titleContainer = new PIXI.Container()
    titleContainer.x = 0
    titleContainer.y = 0
    this.titleStart = createSprite(titleStartImg, {
      x: (window.screen.height - 541) / 2,
      y: 276
    })
    titleContainer.addChild(this.titleStart)
    return titleContainer
  }
}