<template>
  <div>
    <favor></favor>
  </div>
</template>
<script>
import favor from '@/components/favor'
export default {
  head() {
    return {
      title: "舵手商城 - 收藏商品"
    }
  },
  components: {
    'favor': favor
  },
  layout: 'default'
  // page component definitions

}
</script>