<template>
  <div>
    <oIn></oIn>
  </div>
</template>
<script>
import oIn from '@/components/order_in'
export default {
  head() {
    return {
      title: "舵手商城 - 查看订单"
    }
  },
  components: {
    'oIn': oIn
  },
  layout: 'default'
  // page component definitions

}
</script>