<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">thunder</h1>
      <h2 class="subtitle">My super-duper Nuxt.js project123456456</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        <el-button @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
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
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
