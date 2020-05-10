<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-act"></slot></div>
    <div :style="actStyle"><slot name="item-text"></slot></div>
    <!-- <img src="../../assets/img/home.png" alt="">
    <div>首页</div> -->
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    name: "BarItem",
    props: {
      path: String,
      actColor: {
        type: String,
        default: '#DB6A6C'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      actStyle() {
        return this.isActive ? {color: this.actColor} : {}
      }
    },
    methods: {
      itemClick() {
        // console.log('itemClick'); 
        this.$router.replace(this.path)
      }
    }
  }
</script>
<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>