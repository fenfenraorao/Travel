<template>
  <div class="container" v-if="showGallary" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="list">
        <swiper-slide v-for="(item,index) of list" :key="index">
          <img class="swiper-img" :src="item" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observe: true,
        observeParents: true
      }
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    showGallary: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .swiper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
