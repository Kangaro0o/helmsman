<template>
  <div>
    <loghead></loghead>
    <nuxt/>
    <logbottom></logbottom>
  </div>
  
</template>

<script>
import log_head from '@/components/log_head'
import log_bottom from '@/components/log_bottom'
export default {
  components: {
    'loghead': log_head,
    'logbottom': log_bottom
  }
}
</script>


