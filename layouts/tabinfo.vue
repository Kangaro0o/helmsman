<template>
  <div id = "app">
    <topbar></topbar>
    <nuxt/>
    <logbottom></logbottom>
  </div>
</template>

<script>
import topbar from '@/components/TopBar'
import log_bottom from '@/components/log_bottom'
export default {
  components: {
    'topbar': topbar,
    'logbottom': log_bottom
  }
}
</script>

<style scoped>
  #app {
    font-size: 14px;
    font-family: arial,"Hiragino Sans GB", "Microsoft YaHei","微軟正黑體","儷黑 Pro", sans-serif;
    color: #757575;
  }
</style>