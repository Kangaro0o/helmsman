<template>
  <div>
    <mainPage></mainPage>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage'

export default {
  layout: 'home',
  head() {
    return {
      title: '舵手商城-首页',
      meta: [
        { hid: 'main-page', name: 'description', content: '走过路过不容错过，这里啥都有啊！！！' }
      ]
    }
  },
  components: {
    'mainPage': MainPage
  },
  methods: {

  }
}
</script>
