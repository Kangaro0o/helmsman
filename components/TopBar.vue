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
      <div class="topbar-info">
        <a href="/login">登录</a>
        <a href="/fav">注册</a>
      </div>
      <div class="topbar-cart" @mouseenter="cartEnter" @mouseleave="cartOut">
        <div class="cart" :class="{'active': cartStatus}">
          <span class="icon"></span>
          <a href="#">
            购物车（
            <span>0</span>）
          </a>
        </div>
        <transition name="expand">
          <div class="cart-detail" v-show="cartStatus">购物车中还没有商品，赶快选购吧！</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartStatus: false
    }
  },
  methods: {
    cartEnter: function () {
      this.cartStatus = true
    },
    cartOut: function () {
      this.cartStatus = false
    }
  },
  components: {

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

