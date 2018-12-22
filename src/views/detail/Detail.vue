<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDtailInfoSucc)
    },
    getDtailInfoSucc ({ data: { ret, data } }) {
      if (ret && data) {
        let { sightName, bannerImg, gallaryImgs, categoryList } = data
        this.sightName = sightName
        this.bannerImg = bannerImg
        this.gallaryImgs = gallaryImgs
        this.list = categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
