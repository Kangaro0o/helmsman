<template>
  <div class="mi-checkout page-main">
    <div class="container">
      <div class="checkout-wrap">
        <div class="checkout-detail">
          <div class="fixed-header" style="display: none;">
            <div class="fixed-address-choose">
              <a
                href="javascript:void(0)"
                class="choose-btn btn btn-primary"
              >选择该收货地址</a>
              <div class="address-title">
                <span class="address-desc">刘文</span>
                <span class="address-desc">15850682877</span>
                <span class="address-desc">江苏 南京市 鼓楼区 汉口路22号 南京大学鼓楼校区</span>
              </div>
            </div>
          </div>
          <div class="detail-section address-detail">
            <div class="address-header">
              <span class="header-title">收货地址</span>
            </div>
            <div class="address-list show-less-list" style>
              <div
                class="address-item"
                :class="{'active': item.aid === selectedAddress}"
                v-for="(item, index) in addressList"
                :key="index"
                @click="selectAddress(item.aid)"
              >
                <div class="address-info">
                  <div class="name">
                    {{item.receiver_name}}
                    <span style="color: rgb(176, 176, 176);"></span>
                  </div>
                  <div class="tel">{{item.receiver_phone}}</div>
                  <div class="address-con">
                    <!-- <span>江苏</span>
                    <span>南京市</span>
                    <span>鼓楼区</span>
                    <span>湖南路街道</span>-->
                    <span class="info">{{item.address}}</span>
                  </div>
                  <div class="address-action">
                    <span>修改</span>
                  </div>
                </div>
                <div class="address-info-solt" style="display: none;"></div>
              </div>
              <div class="address-item">
                <div class="add-desc">
                  <i class="iconfont el-icon-circle-plus"></i>
                  <span>添加新地址</span>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-section">
            <div class="detail-header">购买的商品</div>
            <div class="goods-list">
              <div class="good-item">
                <div class="item-desc good-img">
                  <img :src="goodsInfo.image" />
                </div>
                <div class="item-desc good-name">
                  <a :href="'goods/detail?gid=' + goodsInfo.gid" target="_blank">
                    <span>{{goodsInfo.name}}</span>
                  </a>
                </div>
                <div class="item-desc">
                  <div class="special-handling-differentiate">
                    <div class="item-desc good-price">{{goodsInfo.price}}元 x {{goodsInfo.num}}</div>
                    <div class="item-desc good-status"></div>
                    <div class="item-desc good-total">{{goodsInfo.price * goodsInfo.num}}元</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-section">
            <!---->
            <div class="section-options section-shipment">
              <div class="options-desc options-header">
                <div class="title">配送方式</div>
              </div>
              <div class="options-desc options-body">
                <div class="options-list">
                  <div class="options-item selected">包邮</div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-section count-detail">
            <div class="section-bill">
              <div class="bill-item">
                <div class="bill-name">商品件数：</div>
                <div class="bill-money">{{goodsInfo.num}}件</div>
              </div>
              <div class="bill-item">
                <div class="bill-name">商品总价：</div>
                <div class="bill-money">{{goodsInfo.price * goodsInfo.num}}元</div>
              </div>
              <div class="bill-item">
                <div class="bill-name">运费：</div>
                <div class="bill-money">0元</div>
              </div>
              <div class="bill-item total-price">
                <div class="bill-name">应付总额：</div>
                <div class="bill-money">
                  <em>{{goodsInfo.price * goodsInfo.num}}</em>元
                </div>
              </div>
            </div>
          </div>
          <div class="detail-section footer-detail clearfix">
            <div class="footer-address">
              <div class="selecter-address">
                <div class="address-name">{{defaultReceiver}}</div>
                <div class="address-desc">
                  <span>{{defaultAddress}}</span>
                  <!-- <a >修改</a> -->
                </div>
              </div>
            </div>
            <div class="handle-action">
              <div class="operating-button">
                <a
                  data-log_code="bid=3515489.8&amp;bpm=25.83.3513216.1&amp;next=26.82"
                  :href="'/order/submit?aid=' + selectedAddress"
                  class="btn btn-primary"
                >立即下单</a>
                <a href="javascript:void(0);" class="btn btn-return" @click="goBack">返回购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getGoodsFromCart } from '@/api/order'
import { getaddressItems } from '@/api/address'
import { getDefaultAddressId } from '@/api/user'
export default {
  layout: 'layout-confirm-order',
  created() {
    this.getAddressList()
  },
  mounted() {
    this.getCart()
    this.initSelectedAddress()
  },
  data() {
    return {
      goodsInfo: '',
      addressList: [],
      defaultReceiver: '',
      defaultAddress: '',
      selectedAddress: 0
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    initSelectedAddress() {
      this.selectedAddress = getDefaultAddressId()
    },
    getCart() {
      this.goodsInfo = getGoodsFromCart()
    },
    getAddressList() {
      getaddressItems().then(res => {
        // TODO 没做请求成功判断（貌似不用判断）
        this.addressList = res.data
        // 选中默认收货地址
        this.selectDefaultAddress()
      })

    },
    selectDefaultAddress(aid) {
      for (let i = 0; this.addressList != null && i < this.addressList.length; i++) {
        if (this.addressList[i].aid === this.selectedAddress) {
          this.defaultReceiver = this.addressList[i].receiver_name + " " + this.addressList[i].receiver_phone
          this.defaultAddress = this.addressList[i].address
        }
      }
    },
    selectAddress(aid) {
      this.selectedAddress = aid
      this.selectDefaultAddress()
    }
  }
}
</script>
<style scoped>
.page-main {
  padding: 40px 0 60px;
  background: #f5f5f5;
}
div {
  display: block;
}
.page-main .container {
  width: 1226px;
  margin: 0 auto;
  background: #fff;
}
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}
.checkout-detail {
  position: relative;
  padding: 48px 0 0;
}
.checkout-detail .fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  border-top: 1px solid #e0e0e0;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.checkout-detail .fixed-header .fixed-address-choose {
  position: relative;
  width: 1226px;
  margin: 0 auto;
}
.checkout-detail .fixed-header .fixed-address-choose .choose-btn {
  float: right;
}
.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
a {
  /* color: #757575; */
  text-decoration: none;
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
  color: #b0b0b0;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.checkout-detail .fixed-header .fixed-address-choose .address-title {
  margin: 15px 0 0;
  line-height: 40px;
  color: #757575;
}
.checkout-detail
  .fixed-header
  .fixed-address-choose
  .address-title
  .address-desc {
  display: inline-block;
  margin-right: 25px;
}
.checkout-detail
  .fixed-header
  .fixed-address-choose
  .address-title
  .address-desc {
  display: inline-block;
  margin-right: 25px;
}
.checkout-detail .detail-section {
  position: relative;
  padding: 0 24px;
}
.checkout-detail .address-detail .address-header {
  margin: 0 0 20px;
}
.checkout-detail .address-detail .address-header .header-title {
  color: #333;
  font-size: 18px;
  line-height: 20px;
}
.address-list .address-item {
  display: inline-block;
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
  vertical-align: top;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.address-list .address-item.active,
.address-list .address-item.active:hover {
  border-color: #ff6700;
}
.address-list .address-action,
.address-list .address-info,
.address-list .telephone {
  line-height: 22px;
  color: #757575;
}
.address-list .address-info {
  padding: 15px 24px 0;
}
.address-list .name {
  font-size: 18px;
  color: #333;
  line-height: 30px;
  margin-bottom: 10px;
}
.address-list .name span {
  float: right;
  font-size: 14px;
  color: #757575;
}
.address-list .address-con span {
  display: inline-block;
  margin-right: 3px;
  word-wrap: break-word;
}
.address-list .address-con .info {
  width: 100%;
}
.address-list .address-item .show-action.address-action {
  opacity: 1;
}
.address-list .address-action {
  text-align: right;
  position: absolute;
  right: 24px;
  bottom: 10px;
  opacity: 0;
}
.address-list .address-action span {
  color: #ff6700;
  margin-left: 10px;
}
.address-list .address-action span {
  color: #ff6700;
  margin-left: 10px;
}
.address-list .address-item {
  display: inline-block;
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
  vertical-align: top;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.address-list .add-desc {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  color: #b0b0b0;
}
.address-list .iconfont {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto 8px;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
}
.checkout-detail .detail-section {
  position: relative;
  padding: 0 24px;
}
.checkout-detail .detail-section .detail-header {
  color: #333;
  font-size: 18px;
  line-height: 40px;
}
.goods-list {
  padding: 5px 0;
  border-bottom: 1px solid #e0e0e0;
}
.goods-list .good-item {
  position: relative;
  padding: 10px 0;
}
.goods-list .good-item .good-img {
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
}
.goods-list .good-item .item-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  color: #424242;
}
img {
  border: 0;
}
.goods-list .good-item .good-name {
  width: 650px;
}
.goods-list .good-item .item-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  color: #424242;
}
.goods-list .good-item .good-name a {
  color: #424242;
}
a,
a:hover {
  text-decoration: none;
}
a {
  background-color: rgba(0, 0, 0, 0);
}
.goods-list .good-item .item-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  color: #424242;
}
.goods-list .good-item .good-price {
  width: 150px;
  text-align: center;
}
.goods-list .good-item .item-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  color: #424242;
}
.goods-list .good-item .good-status {
  width: 100px;
  text-align: center;
}
.goods-list .good-item .item-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  color: #424242;
}
.goods-list .good-item .good-total {
  width: 190px;
  text-align: center;
  color: #ff6701;
}
.goods-list .good-item .item-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
}
.checkout-detail .detail-section .section-options {
  padding: 25px 0;
  border-bottom: 1px solid #e0e0e0;
}
.checkout-detail .detail-section .section-options .options-header {
  width: 150px;
}
.checkout-detail .detail-section .section-options .options-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.checkout-detail .detail-section .section-options .options-header .title {
  color: #333;
  font-size: 18px;
  line-height: 38px;
}
.checkout-detail .detail-section .section-options .options-desc {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.checkout-detail .detail-section .section-options .options-list {
  width: 960px;
}
.checkout-detail .detail-section .section-options .options-list .selected {
  border-color: #fff;
  color: #ff6700;
}
.checkout-detail .detail-section .section-options .options-list .options-item {
  display: inline-block;
  height: 38px;
  line-height: 38px;
  margin-right: 14px;
  border: 1px solid #fff;
  /* color: #333; */
}
.checkout-detail .count-detail {
  position: relative;
  min-height: 130px;
  padding: 20px 0;
  margin: 0 48px;
}
.checkout-detail .count-detail .section-bill {
  position: absolute;
  right: 0;
  bottom: 20px;
}
.checkout-detail .count-detail .section-bill .bill-item {
  position: relative;
  padding-left: 126px;
  line-height: 2;
  text-align: right;
}
.checkout-detail .count-detail .section-bill .bill-item .bill-name {
  position: absolute;
  top: 0;
  left: 0;
  width: 126px;
  white-space: nowrap;
  color: #757575;
}
.checkout-detail .count-detail .section-bill .bill-item .bill-money {
  color: #ff6700;
}
.checkout-detail .count-detail .section-bill .bill-item {
  position: relative;
  padding-left: 126px;
  line-height: 2;
  text-align: right;
}
.checkout-detail .count-detail .section-bill .total-price {
  margin: 10px 0 0;
}
.checkout-detail .count-detail .section-bill .bill-item .bill-name {
  position: absolute;
  top: 0;
  left: 0;
  width: 126px;
  white-space: nowrap;
  color: #757575;
}
.checkout-detail .count-detail .section-bill .total-price .bill-name {
  margin-top: 5px;
}
.checkout-detail .count-detail .section-bill .bill-item .bill-money {
  color: #ff6700;
}
.checkout-detail .count-detail .section-bill .bill-item .bill-money em {
  font-style: normal;
}
.checkout-detail .count-detail .section-bill .total-price em {
  font-size: 30px;
  line-height: 1;
}
.checkout-detail .footer-detail {
  top: -20px;
  padding: 20px 48px 35px 48px;
  border-top: 2px solid #f5f5f5;
}
.checkout-detail .detail-section {
  position: relative;
}
.checkout-detail .footer-detail .footer-address {
  float: left;
}
.checkout-detail .footer-detail .footer-address .selecter-address {
  line-height: 20px;
  color: #424242;
}
.checkout-detail .footer-detail .footer-address .selecter-address a {
  color: #ff6700;
  cursor: pointer;
}
a {
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
}
.checkout-detail .footer-detail .handle-action {
  float: right;
}
.checkout-detail .footer-detail .handle-action .btn {
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
