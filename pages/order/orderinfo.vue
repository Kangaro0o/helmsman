<template>
  <div>
    <oInfo></oInfo>
  </div>
</template>
<script>
import oInfo from '@/components/order_info'
export default {
  head() {
    return {
      title: "舵手商城 - 订单详情"
    }
  },
  components: {
    'oInfo': oInfo
  },
  layout: 'default'
  // page component definitions

}
</script>