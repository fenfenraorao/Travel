<template>
  <div class="page">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recomment :list="recommendList"></home-recomment>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecomment,
    HomeWeekend
  },
  data () {
    return {
      city: null,
      iconList: null,
      recommendList: null,
      swiperList: null,
      weekendList: null
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc ({ data: { data: { city, iconList, recommendList, swiperList, weekendList } } }) {
      this.city = city
      this.iconList = iconList
      this.recommendList = recommendList
      this.swiperList = swiperList
      this.weekendList = weekendList
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>
