<template>
  <div id="app">
    <my-game/>
    <!-- <test></test> -->
  </div>
</template>

<script>
import MyGame from './components/MyGame'
import test from './components/test'

export default {
  name: 'App',
  components: {
    MyGame,
    test
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
