<template>
  <div id="#app">
    <topBar></topBar>
    <topHeader></topHeader>
    <nuxt />
    <!-- <footers></footers> -->
  </div>
</template>
<script>
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