let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
  cities: null,
  hotCities: null,
  iconList: null,
  recommendList: null,
  swiperList: null,
  weekendList: null
}
