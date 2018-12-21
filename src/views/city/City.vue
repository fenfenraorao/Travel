<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
      @getOffsetTop="getOffsetTop"
    ></city-list>
    <city-alphabet :alphabet="alphabet" :top="offsetTop" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'city',
  data () {
    return {
      alphabet: null,
      cities: null,
      hotCities: null,
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
    handleLetterChange (letter) {
      this.letter = letter
    },
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc ({ data: { data: { hotCities, cities } } }) {
      this.cities = cities
      this.hotCities = hotCities
      this.alphabet = Object.keys(cities)
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
