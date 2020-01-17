<template>
  <div>
    <loghead></loghead>
    <nuxt />
    <logbottom></logbottom>
  </div>
</template>

<script>
import Loghead from '@/components/log_head'
import Logbottom from '@/components/log_bottom'
export default {
  components: {
    'loghead': Loghead,
    'logbottom': Logbottom
  }

}
</script>


