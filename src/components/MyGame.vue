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
import {Scroller} from 'scroller'
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
    Game.init(Scroller)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('../assets/css/index.css');
</style>
