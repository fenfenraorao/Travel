<template>
  <div class="homeHeader">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input"><span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主体</div>
    <div class="header-right">城市<span class="iconfont icon-jiantou"></span></div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .homeHeader
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .icon-fanhui
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background: #fff
      border-radius: .1rem
      color #ccc
    .header-right
      width: 1.24rem
      text-align: center
      .icon-jiantou
        font-size .24rem
</style>
