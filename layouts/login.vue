<template>
  <div>
       <log></log>
       
    <div>我的博客导航栏在这里</div>
    <nuxt/>
    <footers></footers>
   
  </div>
  
</template>

<script>
import Footer from '@/components/Footer'
import log from '@/components/log_in'
export default {
    components: {
    'footers': Footer,
    'log': log
  }
}
</script>


