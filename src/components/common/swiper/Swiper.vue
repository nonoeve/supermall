<template>

</template>
<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      totalwidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 3000)
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex *this.totalwidth)
      },this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },
    scrollContent(currentPosition) {
      this.scrolling = true
      this.swiperStyle.transition = 'transform' + this.animDuration + 'ms'
      this.setTransform(currentPosition)
      this.checkPosition()
      this.scrolling = false
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalwidth)
        } else if (this.currentIndex <= 0){
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalwidth)
        }
        this.$emit('transitionEnd', this.currentIndex-1)
      }, this.animDuration)
    }
  }
}
</script>
<style>
</style>