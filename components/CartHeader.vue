<template>
  <div id="app">
    <div class="site-header site-mini-header">
      <div class="container">
        <div class="header-logo">
          <a class="logo ir" href="/" title="舵手官网">舵手官网</a>
        </div>
        <div class="header-title has-more" id="J_miniHeaderTitle">
          <h2>我的购物车</h2>
          <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>
        <div class="topbar-info" id="J_userInfo">
          <el-dropdown>
            <span class="el-dropdown-link">
              <router-link to="/user">{{this.$store.state.user.name}}</router-link>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/user">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/order/list">我的订单</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/fav">我的收藏</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <a rel="nonfollow" href="#">退出登录</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logOut: function () {
      this.$store.dispatch('user/LogOut').then(res => {
        this.$router.push({ path: '/login' })
      })
    }
  }
}
</script>
<style scoped>
.site-mini-header {
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
}
.site-header {
  position: relative;
  z-index: 20;
  height: 100px;
}
div {
  display: block;
}
.site-header .container {
  position: relative;
}
.container {
  width: 1226px;
  *zoom: 1;
  margin-right: auto;
  margin-left: auto;
}
.site-mini-header .header-logo {
  width: 93px;
  margin-top: 26px;
}
.site-header .header-logo {
  float: left;
  width: 62px;
  margin-top: 22px;
}
.site-mini-header .logo {
  width: 48px;
  height: 48px;
}
.site-header .logo {
  position: relative;
  display: block;
  width: 55px;
  height: 55px;
  overflow: hidden;
  _zoom: 1;
  background-color: #ff6700;
  *background: url("../assets/logo-mi.png") no-repeat 50% 50%;
}
.site-mini-header a {
  color: #757575;
}
.ir {
  display: block;
  text-align: left;
  text-indent: -9999em;
  overflow: hidden;
  _zoom: 1;
}
a {
  color: #757575;
  text-decoration: none;
}
a:-webkit-any-link {
  cursor: pointer;
}
.site-mini-header .logo:before,
.site-mini-header .logo:after {
  width: 48px;
  height: 48px;
}
.site-header .logo:before {
  background: url("../assets/logo2.png") no-repeat 50% 50%;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.site-header .logo:before,
.site-header .logo:after {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 55px;
  height: 55px;
  content: "";
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.site-mini-header .has-more {
  height: 48px;
}
.site-mini-header .header-title {
  float: left;
  margin-top: 26px;
}
.site-mini-header .has-more h2 {
  float: left;
  line-height: 48px;
  margin-bottom: 0;
  position: relative;
  left: 47px;
}
.site-mini-header .header-title h2 {
  font-size: 28px;
  line-height: 48px;
  font-weight: normal;
  color: #424242;
}
.site-mini-header .header-title h2,
.site-mini-header .header-title p {
  margin: 0;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.site-mini-header .has-more p {
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 15px;
  position: relative;
  left: 47px;
}
.site-mini-header .has-more p {
  color: #757575;
  line-height: 1;
}
p,
pre {
  margin: 1em 0;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.site-mini-header .topbar-info {
  margin-top: 30px;
}
.site-mini-header .topbar-info {
  line-height: 40px;
}
.site-mini-header .topbar-cart,
.site-mini-header .topbar-info {
  position: relative;
  float: right;
  _display: inline;
  height: 40px;
}
.site-mini-header .topbar-info .link {
  padding: 0 5px;
}
</style>