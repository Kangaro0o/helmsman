<template>
  <div>
    <tabin></tabin>
  </div>
</template>
<script>
import tabin from '@/components/tab_in'
export default {
  head() {
    return {
      title: "舵手商城 - 修改信息"
    }
  },
  components: {
    'tabin': tabin
  },
  layout: 'tabinfo'
  // page component definitions

}
</script>