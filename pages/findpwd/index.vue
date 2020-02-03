<template>
  <div>
    <findp1></findp1>
  </div>
</template>
<script>
import findp1 from '@/components/find_p1'
export default {
  head() {
    return {
      title: "舵手商城 - 找回密码"
    }
  },
  components: {
    'findp1': findp1
  },
  layout: 'login'
  // page component definitions

}
</script>