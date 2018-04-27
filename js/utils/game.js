let type = 'WebGL'
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type)
const Game = window.Game = {
  init () {
    this.initStage()
  },
  initStage () {
    const stageW = document.body.clientWidth
    const stageH = document.body.clientHeight
    const app = new PIXI.Application({
      width: stageW,
      height: stageH,
      antialias: true,
      backgroundColor: '0xffffff'
    })
    document.body.appendChild(app.view)
  }
}