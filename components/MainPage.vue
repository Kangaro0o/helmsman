<template>
  <div>
    <topHeader @kw="getKeyword"></topHeader>
    <div class="main">
      <div class="main-top">
        <span class="main-nav"></span>
        <mainCarousel></mainCarousel>
      </div>
      <div class="main-page">
        <!--秒杀专栏-->
        <mainSecKill></mainSecKill>
        <!--其他商品-->
        <mainGoods :keyword="keyword"></mainGoods>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import MainCarousel from '@/components/MainCarousel'
import MainSecKill from '@/components/MainSecKill'
import MainGoods from '@/components/MainGoods'

export default {
  components: {
    'topHeader': TopHeader,
    'mainCarousel': MainCarousel,
    'mainSecKill': MainSecKill,
    'mainGoods': MainGoods
  },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    getKeyword(kw) {
      this.keyword = kw
    }
  }
}
</script>

<style lang="scss">
.main {
  > .main-top {
    width: 1226px;
    margin: 0 auto;
    background: #fff;
    position: relative;
  }
  .main-page {
    position: relative;
    width: 100%;
    margin: 0 auto;
    background: #f5f5f5;
  }
  .main-nav {
    width: 1226px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: flex-start;
    height: 458px;
  }
}
</style>


