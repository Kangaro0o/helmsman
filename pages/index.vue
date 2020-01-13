<template>
  <div class="container"></div>
</template>

<script>
import { login } from '@/api/login'

export default {
  data() {
    return {
      userInfo: {
        username: 'kelvin',
        password: '123456'
      }
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('Login', this.userInfo)
    }
  },
  components: {
  }
}
</script>
