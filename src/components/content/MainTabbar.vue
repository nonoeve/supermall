<template>
  <tab-bar>
    <bar-item path="/home" actColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/home_act.png" alt="">
      <div slot="item-text">首页</div>
    </bar-item>
    <bar-item path="/class">
      <img slot="item-icon" src="~assets/img/tabbar/class.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/class_act.png" alt="">
      <div slot="item-text">分类</div>
    </bar-item>
    <bar-item path="/gwc">
      <img slot="item-icon" src="~assets/img/tabbar/gwc.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/gwc_act.png" alt="">
      <div slot="item-text">购物车</div>
    </bar-item>
    <bar-item path="/my">
      <img slot="item-icon" src="~assets/img/tabbar/my.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/my_act.png" alt="">
      <div slot="item-text">我的</div>
    </bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar"
import BarItem from "components/common/tabbar/BarItem"

  export default {
    name: 'MainTabbar',
    components: {
      TabBar,
      BarItem
    }
  }
</script>
<style>
</style>