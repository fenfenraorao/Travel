<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs" ref="headerAbs">
      <div class="iconfont icon-fanhui"></div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">景点详情
      <router-link to="/">
        <div class="iconfont icon-fanhui"></div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      opacityStyle: {
        opacity: 0
      },
      showAbs: true
    }
  },
  components: {
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        this.opacityStyle = {
          opacity: opacity > 1 ? 1 : opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.4rem
  height 0.4rem
  line-height 0.4rem
  border-radius 0.2rem
  text-align center
  background rgba(0, 0, 0, 0.8rem)
  .icon-fanhui
    color #fff
    font-size 0.2rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  color #fff
  background $bgColor
  font-size 0.4rem
  text-align center
  .icon-fanhui
    position absolute
    left 0
    top 0
    width 0.64rem
    color #fff
</style>
