<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperList: [
        {
          id: '001',
          src: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20181214_cpm_10281.jpg'
        },
        {
          id: '002',
          src: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20181214_cpm_10281.jpg'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 24.5%
  .swiper-img
    width 100%
</style>
