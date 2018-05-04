<template>
<div class="game-wrap">
  <div class="loading_wrap center" id="loadingWrap">
    <div class="loading_img center">
        <p class="loading_num" id="loadingNum">0%</p>
        <p class="loading_hand"></p>
    </div>
  </div>
  <div class="main" id="main"></div>
</div>
</template>

<script>
import * as PIXI from 'pixi.js'
import Game from '../assets/pixi/game'
export default {
  name: 'MyGame',
  data () {
    return {
    }
  },
  mounted () {
    let type = 'WebGL'
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }
    PIXI.utils.sayHello(type)
    // 防止屏幕移动
    document.addEventListener('touchmove', e => {
      e.preventDefault()
    })
    // Game.init()
    const stageW = document.body.clientWidth
    const stageH = document.body.clientHeight
    const app = new PIXI.Application({
      width: stageW,
      height: stageH,
      antialias: true,
      backgroundColor: '0xffffff',
    })
    document.querySelector('#main').appendChild(app.view)

    PIXI.loader
        .add('/static/part1/hand.png')
        .load(setUp)
    
    function setUp () {
      const texture = PIXI.loader.resources['/static/part1/hand.png'].texture
      const sprite = new PIXI.Sprite(texture)
      app.stage.addChild(sprite)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('../assets/css/index.css');
.loading_wrap {
  display: none;
}
</style>
