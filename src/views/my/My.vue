<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">我的</div></nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "My",
    components: {
      NavBar
    }
  }
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>