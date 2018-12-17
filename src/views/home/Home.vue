<template>
  <div class="page">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style>
.home{
  font-size: 50px;
}
</style>
