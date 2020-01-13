<template>
  <div>
       <footers></footers>
    <div>我的博客导航栏在这里</div>
    <nuxt/>
   
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    components: {
    'footers': Footer
  }
}
</script>

