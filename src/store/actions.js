export default {
  changeCity ({ commit }, name) {
    commit('changeCity', name)
  },
  getCities ({ commit }, { hotCities, cities }) {
    commit('getCities', { hotCities, cities })
  },
  getIndex ({ commit }, { iconList, recommendList, swiperList, weekendList }) {
    commit('getIndex', { iconList, recommendList, swiperList, weekendList })
  }
}
