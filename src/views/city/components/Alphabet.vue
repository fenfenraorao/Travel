<template>
  <div class="list">
    <div class="item" v-for="item in alphabet" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {

    }
  },
  props: {
    alphabet: {
      type: Array
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
