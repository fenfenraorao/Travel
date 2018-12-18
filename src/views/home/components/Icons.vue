<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img-wrapper">
            <img class="icon-img" :src="item.src" alt>
          </div>
          <p class="icon-content">{{item.content}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '001',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点热门景点热门景点热门景点热门景点'
      },
      {
        id: '002',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '003',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '004',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '005',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '006',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '007',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '008',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      },
      {
        id: '009',
        src: '//img.alicdn.com/imgextra/i2/3/TB2wp40cMoSMeJjSspaXXbMOFXa_!!3-2-luban.png_320x320q90.jpg_.webp',
        content: '热门景点'
      }],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const i = Math.floor(index / 8)
        if (!pages[i]) pages[i] = []
        pages[i].push(item)
      })
      return pages
    }
  },
  components: {
  }
}
</script>
<style lang="stylus">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-pagination-bullet-active
  background #fff
.icons
  overflow hidden
  height 0
  padding-bottom 50%
  .icon
    position relative
    float left
    width 25%
    overflow hidden
    height 0
    padding-bottom 25%
    .icon-img-wrapper
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img
        display block
        margin 0 auto
        height 100%
    .icon-content
      position absolute
      bottom 0
      left 0
      right 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
