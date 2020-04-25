<template>
  <div class="page-main">
    <div class="container confirm-box">
      <form target="_blank" action="#" id="J_payForm" method="post">
        <div class="section section-order">
          <div class="order-info clearfix">
            <div class="fl">
              <h2 class="title">最后一步！去付款咯～</h2>
              <p class="order-time" id="J_deliverDesc"></p>
              <p class="post-info" id="J_postInfo">收货信息：{{address}}</p>
            </div>
            <div class="fr">
              <p class="total">
                应付总额：
                <span class="money">
                  <em>{{cart.price * cart.num}}</em>元
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="section section-payment">
          <div class="cash-title" id="J_cashTitle">选择以下支付方式付款</div>

          <div class="payment-box">
            <div class="payment-body">
              <ul class="clearfix payment-list J_paymentList J_linksign-customize">
                <li
                  class="J_bank"
                  :class="{'selected': payWay === '支付宝'}"
                  @click="selectPayWay('支付宝')"
                >
                  <img
                    src="//s01.mifile.cn/i/banklogo/payOnline_zfb.png?ver2015"
                    alt="支付宝"
                    style="margin-left: 0;"
                  />
                </li>
                <li id="J_weixin" :class="{'selected': payWay === '微信'}" @click="selectPayWay('微信')">
                  <img
                    src="//c1.mifile.cn/f/i/16/pay/weixinpay.png"
                    alt="微信支付"
                    style="margin-left: 0;"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section footer-detail clearfix">
          <div class="handle-action">
            <div class="operating-button">
              <a href="javascript:void(0);" class="btn btn-primary" @click="pay">确认支付</a>
              <a href="javascript:void(0);" class="btn btn-return" @click="goBack">返回上一级</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { getAddressById } from '@/api/address'
import { getGoodsFromCart, createOrder, createSecKillOrder } from '@/api/order'
export default {
  layout: 'layout-submit-order',
  created() {
    this.getAddress()
  },
  mounted() {
    this.getCart()
  },
  data() {
    return {
      payWay: '支付宝',
      addressId: this.$route.query.aid,
      address: '',
      cart: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    selectPayWay(payWay) {
      this.payWay = payWay
    },
    getCart() {
      this.cart = getGoodsFromCart()
    },
    getAddress() {
      getAddressById(this.addressId).then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = this.$resultCode.getSuccessStatus()
        // 如果出错则弹框提示
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          })
          return
        }
        let address = res.data
        this.address = address.receiverName + " "
          + address.receiverPhone + " " + address.address
      })
    },
    buyCommonGoods(params) {
      createOrder(params).then(res => {
        let status = this.$resultCode.getStatus(res.code)
        this.$message({
          message: res.message,
          type: status.type
        })
        setTimeout(_ => {
          this.$router.push({ path: '/order/list' })
        }, 1500)
      })
    },
    buySecKillGoods(params) {
      createSecKillOrder(params).then(res => {
        let status = this.$resultCode.getStatus(res.code)
        this.$message({
          message: res.message,
          type: status.type
        })
        setTimeout(_ => {
          this.$router.push({ path: '/order/list' })
        }, 1500)
      })
    },
    pay() {
      let params = {
        'addressId': this.addressId,
        'goodsId': this.cart.id,
        'payWay': this.payWay,
        'num': this.cart.num
      }
      if (this.cart.isSecKill) {
        this.buySecKillGoods(params)
      } else {
        this.buyCommonGoods(params)
      }
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
  *zoom: 1;
  margin-right: auto;
  margin-left: auto;
}
form {
  margin: 0;
  display: block;
}
.section-order {
  height: 100px;
  padding-left: 183px;
  position: relative;
}
.section {
  padding: 30px 48px;
  margin-bottom: 30px;
  background-color: #fff;
  color: #424242;
}
.order-info {
  padding: 20px 0;
}
.clearfix {
  *zoom: 1;
}
.order-info .fl {
  float: left;
}
.order-info .title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: normal;
  line-height: 36px;
}
.section h2,
.section h3,
.section p,
.section li {
  margin: 0;
  padding: 0;
}
h2 {
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.order-info .order-time {
  color: #616161;
  margin-bottom: 5px;
  line-height: 2;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.order-info .order-time span {
  margin: 0 5px;
  color: #ff6700;
}
.order-info .post-info {
  color: #616161;
  -webkit-transition: height 0.3s ease;
  transition: height 0.3s ease;
}
.order-info .fr {
  float: right;
  text-align: right;
}
.order-info .total {
  margin-bottom: 10px;
  color: #757575;
}
.money {
  color: #ff6700;
  font-size: 14px;
}
.money em {
  font-style: normal;
  font-size: 24px;
}
a {
  color: #757575;
  text-decoration: none;
}
a:-webkit-any-link {
  cursor: pointer;
}
.cash-title {
  height: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 18px;
}
.payment-box {
  margin-bottom: 30px;
}
.payment-box .payment-header {
  margin-bottom: 15px;
}
.clearfix {
  *zoom: 1;
}
.payment-box .payment-header .title {
  float: left;
  font-size: 16px;
  color: #616161;
}
.section h2,
.section h3,
.section p,
.section li {
  margin: 0;
  padding: 0;
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
.payment-box .payment-header .desc {
  float: left;
  margin-left: 10px;
  margin-top: 6px;
  font-size: 12px;
  color: #b0b0b0;
}
.section ul,
.section li {
  list-style: none;
}
.payment-list {
  margin: 0 0 0 -14px;
  padding: 0;
  overflow: hidden;
  _zoom: 1;
}
menu,
ol,
ul {
  padding: 0 0 0 40px;
}
dl,
menu,
ol,
ul {
  margin: 1em 0;
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
.payment-list .selected {
  border-color: #ff6700;
}
.payment-list li {
  float: left;
  width: 174px;
  height: 60px;
  line-height: 60px;
  margin-left: 14px;
  margin-bottom: 14px;
  border: 1px solid #e0e0e0;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  _zoom: 1;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.footer-detail {
  height: 34px;
}
.footer-detail .handle-action {
  float: right;
}
.footer-detail .handle-action .btn {
  float: right;
  margin-left: 30px;
  vertical-align: top;
}
.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
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
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
a {
  text-decoration: none;
}
</style>
