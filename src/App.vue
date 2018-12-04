<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <img class="watermark" alt="logo" src="./assets/logo.png">
    <div class="main">
      <router-view keep-alive></router-view>
    </div>
    <div class="foot">
      版权所有：华中师范大学研究生院 2012<span class="hidden-sm-and-down"> All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'
import debounce from '@/common/helper/debounce'
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'app',
  components: {
    Header
  },
  methods: {
    
  },
  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
@import "./common/stylus/variable"
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  position:relative
  width:100%
  width: 100%
  min-height:100%
  .header
    background-color: $color-theme
    height: 78px
    width: 100%
    position: fixed
    top: 0
    z-index: 9
    box-shadow: 0 2px 6px rgba(0,0,0,.2)
  .main
    padding-top: 78px
    z-index: 5
  .foot
    position: absolute
    bottom: 0
    background-color: $color-theme
    height: 60px
    width: 100%
    color: #fff
    text-align: center
    line-height: 60px
    margin-top: 20px
  .watermark
    position: fixed
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 325px
    height: auto
    z-index: -1
</style>
