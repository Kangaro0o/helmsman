<template>
  <div class="main">
    <div class="main-top">
      <span class="main-nav"></span>
      <mainCarousel></mainCarousel>
    </div>
    <div class="main-page">
      <!--秒杀专栏-->
      <mainSecKill></mainSecKill>
      <!--家电-->
      <!-- <householdAppliances></householdAppliances> -->
      <!--智能-->
      <!-- <intelligence></intelligence> -->
      <!--搭配-->
      <!-- <collocation></collocation> -->
      <!--配件-->
      <!-- <parts></parts> -->
      <!--周边-->
      <!-- <relatedProducts></relatedProducts> -->
      <!--为你推荐-->
      <!-- <recommend></recommend> -->
      <!--热评产品-->
      <!-- <hotGoods></hotGoods> -->
      <!--内容-->
      <!-- <miContent></miContent> -->
      <!--视频-->
      <!-- <miVideo></miVideo> -->
    </div>
  </div>
</template>

<script>
import MainCarousel from '@/components/MainCarousel'
import MainSecKill from '@/components/MainSecKill'
// import HouseholdAppliances from './HouseholdAppliances'
// import Intelligence from './Intelligence'
// import Collocation from './Collocation'
// import Parts from './Parts'
// import RelatedProducts from './RelatedProducts'
// import Recommend from './Recommend'
// import HotGoods from './HotGoods'
// import MiContent from './MiContent'
// import MiVideo from './MiVideo'

export default {
  components: {
    'mainCarousel': MainCarousel,
    'mainSecKill': MainSecKill,
    // 'householdAppliances': HouseholdAppliances,
    // 'intelligence': Intelligence,
    // 'collocation': Collocation,
    // 'parts': Parts,
    // 'relatedProducts': RelatedProducts,
    // 'recommend': Recommend,
    // 'hotGoods': HotGoods,
    // 'miContent': MiContent,
    // 'miVideo': MiVideo
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


