<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 可直接进行页面跳转 -->
    <a href="./detail.html" target="_blank">到详情页</a>
  </div>
</template>

<script>
//import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* 指定background-image需要显示指定盒子宽高 */
  background-image: url(../assets/logo.png);
}
</style>
