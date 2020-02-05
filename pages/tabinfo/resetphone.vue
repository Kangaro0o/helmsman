<template>
  <div>
    <tabphone></tabphone>
  </div>
</template>
<script>
import tabphone from '@/components/tab_phone'
export default {
  head() {
    return {
      title: "舵手商城 - 修改手机号"
    }
  },
  components: {
    'tabphone': tabphone
  },
  layout: 'tabinfo'
  // page component definitions

}
</script>