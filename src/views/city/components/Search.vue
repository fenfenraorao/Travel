<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="searchWord" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-if="searchWord" ref="list">
      <ul>
        <li class="search-item border-bottom" v-for="item of result" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-if="result.length === 0">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      interval: 300,
      iscroll: null,
      result: [],
      searchWord: null,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    searchWord () {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.result = []
        for (let val of Object.values(this.cities)) {
          let data = val.filter(item => item.spell.includes(this.searchWord) || item.name.includes(this.searchWord))
          this.result.push(...data)
        }
        if (this.$refs.list) {
          this.iscroll = new BScroll(this.$refs.list)
        }
      }, this.interval)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  background $bgColor
  padding 0 0.1rem
  .search-input
    width 100%
    height 0.62rem
    padding 0 0.1rem
    box-sizing border-box
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
.search-content
  z-index 1
  position absolute
  left 0
  right 0
  top $headerHeight + 0.72rem
  bottom 0
  overflow hidden
  background #fff
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
</style>
