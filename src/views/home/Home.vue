<template>
  <div class="page">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recomment></home-recomment>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'
import HomeWeekend from './components/Weekend'

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
    }
  },
  computed: {
    ...mapState(['iconList', 'recommendList', 'swiperList', 'weekendList'])
  },
  methods: {
    ...mapActions(['getIndex']),
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc ({ data: { data: { iconList, recommendList, swiperList, weekendList } } }) {
      this.getIndex({ iconList, recommendList, swiperList, weekendList })
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
