<template>
  <div>
    <tabpwd></tabpwd>
  </div>
</template>
<script>
import tabpwd from '@/components/tab_pwd'
export default {
  head() {
    return {
      title: "舵手商城 - 修改密码"
    }
  },
  components: {
    'tabpwd': tabpwd
  },
  layout: 'tabinfo'
  // page component definitions

}
</script>