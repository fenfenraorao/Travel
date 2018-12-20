<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :alphabet="alphabet"></city-alphabet>
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
      hotCities: null
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc ({ data: { data: { hotCities, cities } } }) {
      this.cities = cities
      this.hotCities = hotCities
      this.alphabet = Object.keys(cities)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
