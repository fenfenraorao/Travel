<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div v-for="(cityObj,city) of cities" :key="city">
          <div class="title border-topbottom">{{city}}</div>
          <div class="item-list" v-for="cityName of cityObj" :key="cityName.id">
            <div class="item border-bottom">{{cityName.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'

export default {
  name: 'CityList',
  data () {
    return {
      cities: null,
      hotCities: null,
      iscroll: null
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc ({ data: { data: { hotCities, cities } } }) {
      this.cities = cities
      this.hotCities = hotCities
    }
  },
  created () {
    this.getCityInfo()
  },
  mounted () {
    this.iscroll = new BScroll(this.$refs.wrapper)
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
