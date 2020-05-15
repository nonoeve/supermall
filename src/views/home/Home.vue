<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
  </div>
</template>
<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()
    }
  }
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>