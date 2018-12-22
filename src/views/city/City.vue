<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :letter="letter" @getOffsetTop="getOffsetTop"></city-list>
    <city-alphabet :alphabet="alphabet" :top="offsetTop" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'city',
  data () {
    return {
      alphabet: null,
      letter: null,
      offsetTop: null
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    ...mapActions(['getCities']),
    handleLetterChange (letter) {
      this.letter = letter
    },
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc ({ data: { data: { hotCities, cities } } }) {
      this.getCities({ hotCities, cities })
    },
    getOffsetTop (top) {
      this.offsetTop = top
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
