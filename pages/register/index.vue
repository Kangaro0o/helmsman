<template>
  <div>
    <reg></reg>
  </div>
</template>
<script>
import reg from '@/components/Reg'
export default {
  head() {
    return {
      title: "舵手商城 - 注册"
    }
  },
  components: {
    'reg': reg
  },
  layout: 'login'
  // page component definitions

}
</script>