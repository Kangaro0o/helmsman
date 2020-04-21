<template>
  <div id="app">
    <submitOrderHeader></submitOrderHeader>
    <nuxt />
    <footers></footers>
  </div>
</template>

<script>
import '@/assets/reset.css'
import submitOrderHeader from '@/components/SubmitOrderHeader'
import Footer from '@/components/Footer'
export default {
  components: {
    'submitOrderHeader': submitOrderHeader,
    'footers': Footer
  }
}
</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC";
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333;
  background-color: #fff;
  min-width: 1226px;
}
</style>