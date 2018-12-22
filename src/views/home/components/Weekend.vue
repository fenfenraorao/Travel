<template>
  <div>
    <div class="recomment-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-image-wrapper">
          <img class="item-image" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeWeekend',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      list: (state) => state.weekendList
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recomment-title
  line-height 0.8rem
  background #ccc
  text-indent 0.2rem
.item
  .item-image-wrapper
    overflow hidden
    height 0
    padding-bottom 24.5%
    .item-image
      width 100%
  .item-info
    padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    ellipsis()
    color #ccc
</style>
