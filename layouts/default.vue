<template>
  <div id="app">
    <topBar></topBar>
    <topHeader></topHeader>
    <nuxt />
    <footers></footers>
  </div>
</template>

<script>
import '@/assets/reset.css'
import TopBar from '@/components/TopBar'
import TopHeader from '@/components/TopHeader'
import Footer from '@/components/Footer'
export default {
  components: {
    'topBar': TopBar,
    'topHeader': TopHeader,
    'footers': Footer
  }
}
</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC";
}
</style>