<template>
  <div class="page-main">
    <div class="container">
      <div class="buy-succ-box clearfix">
        <div id="J_goodsBox" class="goods-content">
          <div class="goods-img">
            <img src="../../assets/success.png" width="64" height="64" />
          </div>
          <div class="goods-info">
            <h3>已成功加入购物车！</h3>
            <span class="name">
              {{goodsInfo.name}}
              <!---->
            </span>
          </div>
        </div>
        <div class="actions J_actBox">
          <p class="hide J_notic">有商品未成功加入购物车，可以在购物车中查看</p>
          <a href="javascript:void(0);" class="btn btn-line-gray J_goBack" @click="goBack">返回上一级</a>
          <a class="btn btn-primary" @click="goCart">去购物车结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsFromCart } from '@/api/order'
export default {
  update() {
    this.goodsInfo = getGoodsFromCart()
  },
  data() {
    return {
      goodsInfo: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goCart() {
      this.$router.push({ path: '/buy/cart' })
    }
  }
}
</script>

<style scoped>
.page-main {
  padding: 38px 0;
  background: #f5f5f5;
}
div {
  display: block;
}
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}
.buy-succ-box {
  margin-bottom: 26px;
  padding: 0 0 28px 0;
  height: 68px;
  border-bottom: 1px solid #e0e0e0;
}
.buy-succ-box .goods-content {
  float: left;
}
.buy-succ-box .goods-img {
  float: left;
  width: 64px;
  height: 64px;
}
img {
  border: 0;
}
.buy-succ-box .goods-info {
  float: left;
  margin-left: 20px;
}
.buy-succ-box .goods-info h3 {
  margin: 0;
  color: #424242;
  font-size: 24px;
  font-weight: 400;
  margin-top: 3px;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.buy-succ-box .goods-info .name,
.buy-succ-box .goods-info .price {
  margin-right: 15px;
  font-size: 14px;
  color: #757575;
}
.buy-succ-box .actions {
  float: right;
}
.buy-succ-box .actions .hide {
  display: none;
}
.buy-succ-box .actions p {
  text-align: right;
  color: red;
  margin: 0;
  font-size: 12px;
}
.hide {
  display: none !important;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.buy-succ-box .actions .btn-line-gray {
  background: none;
}
.buy-succ-box .actions .btn {
  width: 180px;
  margin-left: 12px;
  margin-top: 5px;
}
.btn-line-gray {
  border-color: #b0b0b0;
  background: #fff;
  color: #b0b0b0;
}
.btn {
  display: inline-block;
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
a,
a:hover {
  text-decoration: none;
}
a {
  color: #757575;
}
.buy-succ-box .actions .btn {
  width: 180px;
  margin-left: 12px;
  margin-top: 5px;
}
.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
</style>