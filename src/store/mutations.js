export default {
  changeCity (state, name) {
    state.city = name
    try {
      localStorage.city = name
    } catch (e) {}
  },
  getCities (state, { hotCities, cities }) {
    state.cities = cities
    state.hotCities = hotCities
  },
  getIndex (state, { iconList, recommendList, swiperList, weekendList }) {
    state.iconList = iconList
    state.recommendList = recommendList
    state.swiperList = swiperList
    state.weekendList = weekendList
  }
}
