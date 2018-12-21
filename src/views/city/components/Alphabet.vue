<template>
  <div class="list">
    <div
      class="item"
      v-for="item in alphabet"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="throttle"
      @touchend="handleTouchEnd"
      @click="handleLetterClick(item)"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      interval: 300,
      startY: 0,
      timer: null,
      touchStatus: false
    }
  },
  props: {
    alphabet: Array,
    top: Number
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (letter) {
      this.$emit('change', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const touchY = e.touches[0].clientY - this.top - this.startY
        const eachHieght = e.target.offsetHeight
        const index = Math.floor(touchY / eachHieght)
        if (index > -1 && index < this.alphabet.length) {
          this.handleLetterClick(this.alphabet[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    throttle (e) {
      let canRun = true
      if (!canRun) return
      canRun = false
      setTimeout(() => {
        this.handleTouchMove.apply(this, arguments)
        canRun = true
      }, this.interval)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top $headerHeight + 0.72rem
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>
