<template>
  <div class="top-container">
    <div class="top-bar">
      <div class="topbar-nav">
        <ul>
          <li class="item">
            <a href="/">HelmsMan商城</a>
          </li>
        </ul>
      </div>
      <div class="topbar-info" v-if="!isLogin">
        <a href="/login">登录</a>
        <a href="/register">注册</a>
      </div>
      <div class="topbar-info" v-else>
        <a href="#">{{username}}</a>
        <a href="/user" target="_blank">个人中心</a>
        <a href="/order/list" target="_blank">我的订单</a>
        <a href="/fav" target="_blank">我的收藏</a>
        <a href="javascript:void(0);" @click="logout">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('user/LogOut').then(res => {
        this.$router.push({ path: '/login' })
      })
    }
  },
  computed: {
    username: function () {
      return this.$store.state.user.name
    },
    isLogin: function () {
      const token = this.$store.state.user.token
      if (token === null || token === '' || token === undefined)
        return false
      return true
    },
  }
}
</script>

<style lang="scss" scoped>
.top-container {
  width: 100%;
  background: #333;
  > .top-bar {
    width: 1226px;
    background: #333;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .topbar-nav {
      > ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        > .item {
          padding: 0 0.5em;
          border-right: 1px solid #424242;
          &:last-child {
            border: none;
          }
          &:nth-child(1) {
            padding-left: 0;
          }
          & a {
            color: #b0b0b0;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
    > .topbar-info {
      margin-left: auto;
      > a {
        color: #b0b0b0;
        padding: 0 0.5em;
        border-right: 1px solid #424242;
        &:last-child {
          border: none;
        }
        &:hover {
          color: #fff;
        }
      }
    }
    > .topbar-cart {
      position: relative;
      width: 120px;
      line-height: 40px;
      text-align: center;
      background: #424242;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      > .cart {
        a {
          color: #b0b0b0;
          padding: 0 0.5em;
          border-right: 1px solid #424242;
          &:last-child {
            border: none;
          }
        }
      }
      > .active {
        a {
          color: #ff6700;
        }
        .icon {
          color: #ff6700;
        }
      }
      > .cart-detail {
        position: absolute;
        overflow: hidden;
        z-index: 3;
        left: 120px;
        transform: translate(-100%, 0);
        top: 40px;
        width: 316px;
        line-height: 96px;
        padding: 0 15px;
        color: #424242;
        background: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
//购物车动画
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  height: 96px;
  opacity: 1;
}
.expand-enter,.expand-leave-to/* .fade-leave-active in <2.1.8 */ {
  height: 0;
  opacity: 0;
  transition: all 0.4s ease;
}
</style>

