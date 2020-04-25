<template>
  <div class="page-main">
    <div class="container">
      <div class="cart-loading loading hide" id="J_cartLoading">
        <div class="loader"></div>
      </div>
      <div class="cart-empty hide" id="J_cartEmpty">
        <h2>您的购物车还是空的！</h2>
        <p class="login-desc">登录后将显示您之前加入的商品</p>
        <a
          href="javascript:void(0);"
          class="btn btn-primary btn-login"
          id="J_loginBtn"
        >立即登录</a>
        <a
          href="//list.mi.com/0"
          class="btn btn-primary btn-shoping J_goShoping"
        >马上去购物</a>
      </div>
      <div id="J_cartBox" class>
        <div class="addonitems-tips hide J_addonitemsTips"></div>
        <div class="cart-goods-list">
          <div class="list-head clearfix">
            <div class="col col-check">
              <i class="iconfont icon-checkbox icon-checkbox-selected" id="J_selectAll">√</i>全选
            </div>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-num">数量</div>
            <div class="col col-total">小计</div>
            <div class="col col-action">操作</div>
          </div>
          <div class="list-body" id="J_cartListBody">
            <div class="item-box">
              <div class="item-table J_cartGoods">
                <div class="item-row clearfix">
                  <div class="col col-check">
                    <i
                      class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox"
                      data-status="1"
                    >√</i>
                  </div>
                  <div class="col col-img">
                    <a href="//item.mi.com/1200600016.html" target="_blank">
                      <img alt :src="goodsInfo.image" width="80" height="80" />
                    </a>
                  </div>
                  <div class="col col-name">
                    <div class="tags"></div>
                    <div class="tags"></div>
                    <h3 class="name">
                      <a href="//item.mi.com/1200600016.html" target="_blank">{{goodsInfo.name}}</a>
                    </h3>
                  </div>
                  <div class="col col-price">
                    {{goodsInfo.price}}
                    <p class="pre-info"></p>
                  </div>
                  <div class="col col-num">
                    <div class="change-goods-num clearfix J_changeGoodsNum">{{goodsInfo.num}}</div>
                  </div>
                  <div class="col col-total">
                    {{goodsInfo.price * goodsInfo.num}}元
                    <p class="pre-info"></p>
                  </div>
                  <div class="col col-action">
                    <el-popover placement="top" width="160" v-model="visible">
                      <p>确定删除吗？</p>
                      <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                      </div>
                      <el-button type="danger" icon="el-icon-delete" slot="reference" circle></el-button>
                    </el-popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="raise-buy-box" id="J_raiseBuyBox"></div>
        <div class="cart-bar clearfix cart-bar-fixed" id="J_cartBar">
          <div class="section-left">
            <a href="//list.mi.com/0" class="back-shopping J_goShoping">继续购物</a>
            <span class="cart-total">
              共
              <i id="J_cartTotalNum">1</i> 件商品，已选择
              <i id="J_selTotalNum">1</i> 件
            </span>
            <span class="cart-coudan hide" id="J_coudanTip">
              ，还需
              <i id="J_postFreeBalance">0.00</i> 元即可免邮费
              <a href="javascript:void(0);" id="J_showCoudan">立即凑单</a>
            </span>
          </div>
          <span class="activity-money hide">
            活动优惠：减
            <i id="J_cartActivityMoney">0</i> 元
          </span>
          <span class="total-price">
            合计：
            <em id="J_cartTotalPrice">{{goodsInfo.price * goodsInfo.num}}</em>元
          </span>
          <a href="/order/confirm" class="btn btn-a btn btn-primary">去结算</a>

          <div class="no-select-tip hide" id="J_noSelectTip">
            请勾选需要结算的商品
            <i class="arrow arrow-a"></i>
            <i class="arrow arrow-b"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsFromCart } from '@/api/order'
export default {
  head() {
    return {
      title: "舵手商城 - 购物车"
    }
  },
  layout: 'layout-cart',
  mounted() {
    this.goodsInfo = getGoodsFromCart()
  },
  data() {
    return {
      visible: false,
      goodsInfo: {}
    }
  }
}
</script>

<style scoped>
.page-main {
  padding-top: 38px;
  padding-bottom: 38px;
  background: #f5f5f5;
}
div {
  display: block;
}
.container {
  width: 1226px;
  *zoom: 1;
  margin-right: auto;
  margin-left: auto;
}
.loading {
  padding: 20px 0;
}
.hide {
  display: none !important;
}
.loader,
.loader:before,
.loader:after {
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
  -webkit-animation-direction: alternate-reverse;
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
  -webkit-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  transform: scale(1, 1);
}
.cart-empty {
  height: 273px;
  padding-left: 558px;
  margin: 65px 0 130px;
  /* background: url("") no-repeat 124px 0; */
  color: #b0b0b0;
  overflow: hidden;
  _zoom: 1;
}
.cart-empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}
h2 {
  font-size: 1.5em;
  margin: 0.83em 0;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.cart-empty .login-desc {
  display: none;
  margin: 0 0 20px;
  font-size: 20px;
  color: #b0b0b0;
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
.cart-empty .btn-login {
  display: none;
}
.cart-empty .btn {
  width: 170px;
  height: 48px;
  line-height: 48px;
}
.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
.btn {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 158px;
  height: 38px;
  padding: 0;
  margin: 0;
  border: 1px solid #b0b0b0;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  color: #b0b0b0;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
a {
  color: #757575;
  text-decoration: none;
}
.cart-empty .btn {
  width: 170px;
  height: 48px;
  line-height: 48px;
}
.addonitems-tips {
  text-align: right;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 20px;
  margin-bottom: 13px;
}
.cart-goods-list {
  background-color: #fff;
}
.cart-goods-list .list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .col-check .icon-checkbox-selected {
  color: #fff;
  border-color: #ff6700;
  background-color: #ff6700;
}
.cart-goods-list .col-check .icon-checkbox {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #e0e0e0;
  margin-left: 24px;
  background-color: #fff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}
.cart-goods-list .list-head .icon-checkbox {
  margin-right: 15px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
i {
  font-style: italic;
}
.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-name {
  width: 380px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}
.cart-goods-list .item-box {
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.cart-goods-list .item-table {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
.cart-goods-list .item-table .item-row {
  display: table-row;
  *zoom: 1;
}
.clearfix {
  *zoom: 1;
}
.cart-goods-list .item-table .col {
  display: table-cell;
  vertical-align: middle;
  *float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .col-check .icon-checkbox-selected {
  color: #fff;
  border-color: #ff6700;
  background-color: #ff6700;
}
.cart-goods-list .col-check .icon-checkbox {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #e0e0e0;
  margin-left: 24px;
  background-color: #fff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.cart-goods-list .item-box .col-img {
  width: 80px;
  height: 80px;
  padding-right: 40px;
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
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}
.cart-goods-list .col-name {
  width: 380px;
}
.cart-goods-list .item-box .tags,
.cart-goods-list .item-sub-box .tags {
  margin-bottom: 6px;
}
.cart-goods-list .col-name .name {
  line-height: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  _zoom: 1;
}
.cart-goods-list .col-name .name,
.cart-goods-list .col-name .desc {
  width: 380px;
  margin: 0;
}
h3 {
  font-size: 1.17em;
  margin: 1em 0;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.cart-goods-list .col-name .name a {
  color: #424242;
}
/* .cart-goods-list .col-name .name a,
.cart-goods-list .col-name .desc a {
  color: #ff6700;
} */
.cart-goods-list .item-box .col-price,
.cart-goods-list .item-sub-box .col-price {
  font-size: 16px;
}
.cart-goods-list .col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .item-box .pre-info {
  margin: 0;
  font-size: 12px;
  color: #b0b0b0;
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
.cart-goods-list .item-box .col-num,
.cart-goods-list .item-sub-box .col-num {
  font-size: 16px;
}
.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .item-box .col-total,
.cart-goods-list .item-sub-box .col-total {
  color: #ff6700;
  font-size: 16px;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .item-box .pre-info {
  margin: 0;
  font-size: 12px;
  color: #b0b0b0;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}
.cart-goods-list .item-box .col-action .del,
.cart-goods-list .item-sub-box .col-action .del {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 12px;
  color: #757575;
  font-size: 16px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.raise-buy-box {
  margin: 20px 0;
}
.cart-bar {
  height: 50px;
  text-align: right;
  background-color: #fff;
  -webkit-transition: background 0.3s ease, top 0.3s ease;
  transition: background 0.3s ease, top 0.3s ease;
  position: relative;
}
.cart-bar .section-left {
  float: left;
}
.cart-bar .back-shopping {
  line-height: 50px;
  margin-left: 32px;
}
.cart-bar a {
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.cart-bar .cart-total {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  color: #757575;
}
.cart-bar .cart-total i {
  color: #ff6700;
}
.cart-bar i {
  font-style: normal;
}
.cart-bar .cart-coudan {
  color: #757575;
}
.hide {
  display: none !important;
}
.cart-bar .cart-coudan a {
  margin-left: 3px;
  color: #ff6700;
}
.cart-bar .total-price {
  padding-left: 13px;
  color: #ff6700;
}
.cart-bar .total-price em {
  font-style: normal;
  font-size: 30px;
}
.cart-bar .activity-money {
  padding: 0 13px;
  border-right: 1px solid #eee;
  color: #757575;
}
.cart-bar .btn {
  width: 200px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  margin-left: 50px;
  vertical-align: top;
}
.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
.cart-bar .no-select-tip {
  width: 200px;
  height: 48px;
  line-height: 48px;
  position: absolute;
  top: -58px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ff6700;
  color: #ff6700;
  text-align: center;
}
.cart-bar .no-select-tip .arrow-a {
  bottom: -8px;
  margin-left: -10px;
  border-width: 8px 10px 0;
  border-color: #ff6700 transparent transparent;
  z-index: 1;
}
.cart-bar .no-select-tip .arrow {
  display: block;
  width: 0;
  height: 0;
  border-style: solid dashed dashed;
  overflow: hidden;
  _zoom: 1;
  position: absolute;
  left: 50%;
}
.cart-bar .no-select-tip .arrow-b {
  bottom: -7px;
  margin-left: -8px;
  border-width: 7px 8px 0;
  border-color: #fff transparent transparent;
  z-index: 2;
}
</style>
