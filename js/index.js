// 防止屏幕移动
document.addEventListener('touchmove', e => {
  e.preventDefault()
})
Game.init()