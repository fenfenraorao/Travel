<template>
  <div class="homeHeader">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主体
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont icon-jiantou"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {

    }
  },
  props: {
    city: {
      type: String,
      default: ''
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.homeHeader
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    .icon-fanhui
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    width 1.24rem
    text-align center
    color #fff
    .icon-jiantou
      font-size 0.24rem
</style>
