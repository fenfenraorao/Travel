<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont icon-fanhui"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  color #fff
  background $bgColor
  font-size 0.4rem
  position relative
  text-align center
  .icon-fanhui
    position absolute
    left 0
    top 0
    width 0.64rem
    color #fff
</style>
