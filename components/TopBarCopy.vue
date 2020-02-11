<template>
  <div class="site-topbar">
    <div class="container">
      <div class="topbar-nav">
        <a rel="nofollow" href="//www.mi.com/index.html">小米商城</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//www.miui.com/" target="_blank">MIUI</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//iot.mi.com/index.html" target="_blank">IoT</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//i.mi.com/" target="_blank">云服务</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//jr.mi.com?from=micom" target="_blank">金融</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//youpin.mi.com/" target="_blank">有品</a>
        <span class="sep">|</span>
        <a rel="nofollow" href="//xiaoai.mi.com/" target="_blank">小爱开放平台</a>
      </div>
      <!--  topbar-cart-active -->
      <div id="J_miniCartTrigger" class="topbar-cart">
        <a rel="nofollow" id="J_miniCartBtn" href="//static.mi.com/cart/" class="cart-mini">
          <em class="iconfont-cart"></em>
          <em class="iconfont-cart-full hide"></em>购物车
          <span class="cart-mini-num J_cartNum">（0）</span>
        </a>
        <div id="J_miniCartMenu" class="cart-menu" style="height: 0px;">
          <div class="menu-content">
            <div class="loading hide">
              <div class="loader"></div>
            </div>
            <ul id="J_miniCartList" class="cart-list hide"></ul>
            <div id="J_miniCartListTotal" class="cart-total clearfix hide"></div>
            <div class="msg msg-error hide"></div>
            <div class="msg msg-empty hide">购物车中还没有商品，赶紧选购吧！</div>
          </div>
        </div>
      </div>
      <div id="J_siteUserInfo" class="topbar-info">
        <span class="user">
          <a rel="nofollow" class="user-name" href="//www.mi.com/user/portal" target="_blank">
            <span class="name">Wynn</span>
            <i class="el-icon-arrow-down"></i>
          </a>
          <div id="J_userMenuWrapper" class="user-menu-wrapper" style="height: 0px;">
            <ul class="user-menu">
              <li>
                <a rel="nofollow" href="//www.mi.com/user/portal" target="_blank">个人中心</a>
              </li>
              <li>
                <a rel="nofollow" href="//www.mi.com/user/favorite" target="_blank">我的喜欢</a>
              </li>
              <li>
                <a rel="nofollow" id="J_userLogout" href="//order.mi.com/site/logout">退出登录</a>
              </li>
            </ul>
          </div>
        </span>
        <span class="sep">|</span>
        <a rel="nofollow" class="link link-order" href="//static.mi.com/order/" target="_blank">我的订单</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.iconfont-arrow-down-mini:before {
  content: "\E61C";
}
.site-topbar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}

.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}

.site-topbar .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}
.site-topbar a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}
a,
a:hover {
  text-decoration: none;
}

a {
  color: #757575;
}

a {
  background-color: rgba(0, 0, 0, 0);
}

div {
  display: block;
}

.site-topbar .sep {
  margin: 0 0.3em;
  color: #424242;
}
.ndash,
.sep {
  margin: 0 0.25em;
  font-family: sans-serif;
}

.site-topbar .topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-size: 12px;
}
.site-topbar .cart-mini {
  position: relative;
  z-index: 32;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242;
}

.site-topbar .cart-mini em {
  margin-right: 4px;
  font-size: 20px;
  line-height: 20px;
  vertical-align: -4px;
}

.hide {
  display: none !important;
}

.site-topbar .cart-menu {
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 31;
  width: 316px;
  height: 0;
  color: #424242;
  background: #fff;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  -webkit-transition: height 0.3s;
  transition: height 0.3s;
}

.site-topbar .cart-menu .menu-content {
  padding: 20px 0 0;
}

.site-topbar .cart-menu .loading,
.site-topbar .cart-menu .msg {
  margin: 0 20px 20px;
  text-align: center;
}

.loading {
  padding: 20px 0;
}

.loader,
.loader:after,
.loader:before {
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation-name: loader;
  animation-name: loader;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.loader {
  position: relative;
  margin: 0 auto;
  width: 4px;
  height: 20px;
  background: #ff6700;
  overflow: visible;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.site-topbar .cart-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.site-topbar .cart-total {
  padding: 15px 20px;
  background: #fafafa;
}

.site-topbar .cart-menu .msg {
  padding: 20px 0 20px;
}

.site-topbar .topbar-info {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
}
.site-topbar .topbar-info .link,
.site-topbar .topbar-info .message,
.site-topbar .topbar-info .sep,
.site-topbar .topbar-info .user {
  float: left;
}

.site-topbar .user {
  position: relative;
  width: 110px;
  padding: 0;
  white-space: nowrap;
}

.site-topbar .user-name {
  position: relative;
  z-index: 5;
  display: block;
  width: 110px;
  height: 40px;
  text-align: center;
}
.site-topbar .user-name .name {
  display: inline-block;
  width: auto;
  max-width: 75px;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  overflow: hidden;
}
.site-topbar .user-name i {
  font-size: 18px;
  line-height: 18px;
  vertical-align: 9px;
}

.site-topbar .user-menu-wrapper {
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 3;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.3s;
  transition: height 0.3s;
  background: #fff;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.site-topbar .user-menu {
  width: 110px;
  margin: 0;
  padding: 7px 0;
  list-style-type: none;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.site-topbar .user-menu a {
  display: block;
  padding: 3px 30px;
  line-height: 2;
}
.site-topbar a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}
.site-topbar .topbar-info .sep {
  margin: 0;
}
</style>

