import Game from './pixi/game'

let type = 'WebGL'
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type)
// 防止屏幕移动
document.addEventListener('touchmove', e => {
  e.preventDefault()
})
Game.init()