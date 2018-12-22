<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img-wrapper">
            <img class="icon-img" :src="item.imgUrl" alt>
          </div>
          <p class="icon-content">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    ...mapState({
      list: (state) => state.iconList
    }),
    pages () {
      const pages = []
      if (this.list && this.list.length > 0) {
        this.list.forEach((item, index) => {
          const i = Math.floor(index / 8)
          if (!pages[i]) pages[i] = []
          pages[i].push(item)
        })
      }
      return pages
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons
  margin-top 0.2rem
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
