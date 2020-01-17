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
import log1 from '@/components/log1'
export default {
    components: {
    'footers': Footer,
    'log1': log1
  }
}
</script>


