<template>
  <div>
    <log></log>
  </div>
</template>
<script>
import log from '@/components/log_in'
export default {
  head() {
    return {
      title: "舵手商城 - 登录"
    }
  },
  components: {
    'log': log
  },
  layout: 'login'
  // page component definitions

}
</script>