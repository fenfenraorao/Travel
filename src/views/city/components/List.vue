<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div v-for="(cityObj,city) of cities" :key="city" :ref="city">
          <div class="title border-topbottom">{{city}}</div>
          <div class="item-list" v-for="cityName of cityObj" :key="cityName.id">
            <div
              class="item border-bottom"
              @click="handleCityClick(cityName.name)"
            >{{cityName.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'CityList',
  data () {
    return {
      iscroll: null
    }
  },
  computed: {
    ...mapState(['cities', 'hotCities'])
  },
  mounted () {
    this.iscroll = new BScroll(this.$refs.wrapper)
    this.$emit('getOffsetTop', this.$refs.wrapper.offsetTop)
  },
  props: {
    letter: String
  },
  methods: {
    handleCityClick (name) {
      this.$store.dispatch('changeCity', name)
      this.$router.push('/')
    }
  },
  watch: {
    letter (n) {
      if (n) {
        this.iscroll.scrollToElement(this.$refs[n][0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  left 0
  right 0
  top $headerHeight + 0.72rem
  bottom 0
  overflow hidden
.title
  line-height 0.54rem
  background #eee
  padding-left 0.2rem
  font-size 0.26rem
  color #666
.button-list
  display flex
  flex-wrap wrap
  padding 0.1rem 0.6rem 0.1rem 0.1rem
  .button-wrapper
    width 33.33%
    .button
      margin 0.1rem
      padding 0.1rem 0
      text-align center
      border 0.02rem solid #ccc
      border-radius 0.06rem
.item-list
  .item
    line-height 0.76rem
    padding-left 0.2rem
</style>
