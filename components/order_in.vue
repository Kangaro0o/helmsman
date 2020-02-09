<template>
  <div class="page">
    <div class="layout">
      <div class="uc-box uc-main-box">
        <div class="uc-content-box order-list-box">
          <div class="box-hd">
            <h1 class="title">
              我的订单
              <small>
                请谨防钓鱼链接或诈骗电话，
                <a
                  href="//www.mi.com/service/buy/Avoid%20Fraud/"
                  target="_blank"
                  data-stat-id="1dcad210d69d2f73"
                  onclick="_msq.push(['trackEvent', '5cc76a9bce8347f4-1dcad210d69d2f73', '//www.mi.com/service/buy/Avoid20Fraud/', 'pcpid', '']);"
                >了解更多&gt;</a>
              </small>
            </h1>
            <div class="more clearfix">
              <ul class="filter-list J_orderType">
                <li :class="{'active': isActive[4], 'first': true}">
                  <a
                    @click="changeOrderStatus(4)"
                  >全部有效订单</a>
                </li>
                <li :class="{'active': isActive[1]}">
                  <a
                    @click="changeOrderStatus(1)"
                  >待支付</a>
                </li>
                <li :class="{'active': isActive[2]}">
                  <a
                    @click="changeOrderStatus(2)"
                  >待发货</a>
                </li>
                <li :class="{'active': isActive[3]}">
                  <a
                    @click="changeOrderStatus(3)"
                  >待收货</a>
                </li>
              </ul>
              <label class="search-box">
                <input type="text" placeholder="搜索订单" class="search" style="height: 30px;" v-model="search">
                <i slot="suffix" class="el-icon-search icon-search" @click="searchOrd"></i>
              </label>
            </div>
          </div>
          <div class="box-bd">
            <div id="J_orderList">
              <ul class="order-list">
                <li class="uc-order-item uc-order-item-shipping" v-for="(item, index) in orderList" :key="index">
                  <div class="order-detail">
                    <div class="order-summary">
                      <div class="order-status">{{orderStatus[item.status]}}</div>
                    </div>
                    <table class="order-detail-table">
                      <thead>
                        <tr>
                          <th class="col-main">
                            <p class="caption-info">
                              {{item.receiver_name}}
                              <span class="sep">|</span>订单号：
                              <a
                                :href="item.order_number"
                              >{{item.order_number}}</a>
                            </p>
                          </th>
                          <th class="col-sub">
                            <p class="caption-price">
                              实付金额：
                              <span class="num">{{item.goods_price}}</span>元
                            </p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="order-items">
                            <ul class="goods-list">
                              <li>
                                <div class="figure figure-thumb">
                                  <a
                                    :href="item.goods_id"
                                  >
                                    <img
                                      :src="item.imgUrl"
                                      width="80"
                                      height="80"
                                      :alt="item.goods_name"
                                    />
                                  </a>
                                </div>
                                <p class="name">
                                  <a
                                    :href="item.goods_id"
                                  >{{item.goods_name}}</a>
                                </p>
                                <p class="price">{{item.goods_price}}</p>
                              </li>
                            </ul>
                          </td>
                          <td class="order-actions">
                            <a
                              class="btn btn-small btn-line-gray"
                              @click="toOrderInfo(item.order_number)"
                            >订单详情</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrder } from '@/api/order'
export default {
  created() {
    this.getOrderList(4);
  },

  data() {
    return {
      isActive: [0, false, false, false, true],
      currentStatus: 4,
      search: "",
      orderList: [],
      orderStatus: {"1": "待付款", "2": "待发货", "3": "待收货"},
      keyword: "all",
    }
  },

  methods: {
    getOrderList(status) {
      getOrder(status, this.keyword).then(res => {
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return;
        }
        this.orderList = res.data.ordItems;
      })
    },

    searchOrd(ev) {
      if (this.search) {
        this.getOrderList(this.currentStatus);
      }
    },

    toOrderInfo(order_number) {
      this.$router.push({ path: '/order/orderinfo', query: { oid: order_number } })
    },
    
    changeOrderStatus(status) {
      if (this.currentStatus != status) {
        this.$set(this.isActive, this.currentStatus, false);
        this.$set(this.isActive, status, true);
        this.currentStatus = status;
        console.log(this.currentStatus);
        this.getOrderList(this.currentStatus);
      }
    },
  },

  computed: {
    
  },
};
</script>

<style scoped>
span {
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

a {
  color: #757575;
  text-decoration: none;
  cursor: pointer;
}

.page {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 1000px;
  padding-top: 40px;
  padding-bottom: 30px;
}

.layout {
  width: 1000px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC";
  font-size: 14px;
  margin: 0 auto;
}

.uc-main-box {
  padding: 36px 0;
}

.uc-box {
  background: #fff;
}

.uc-content-box {
  margin: 0 48px;
}

.uc-content-box .box-hd .title {
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  line-height: 68px;
  color: #757575;
}

.uc-content-box .box-hd small {
  margin-left: 10px;
  font-size: 12px;
  line-height: 1.5;
}

.uc-content-box .box-hd small a {
  color: #757575;
}

.order-list-box .box-hd .more {
  border-bottom: 0;
  height: 56px;
}

.uc-content-box .box-hd .filter-list {
  float: left;
  margin: 0;
  padding: 18px 0;
  list-style-type: none;
  font-size: 16px;
  line-height: 1.25;
}

.content-box .box-hd .filter-list li.active {
  color: #ff6700;
}

.uc-content-box .box-hd .filter-list li.first {
  padding-left: 0;
  border-left: 0;
}

.uc-content-box .box-hd .filter-list li {
  float: left;
  padding: 0 20px;
  border-left: 1px solid #e0e0e0;
  color: #757575;
}

.uc-content-box .box-hd .filter-list li.tab-active a,
.uc-content-box .box-hd .filter-list li.active a {
  color: #ff6700;
}

.uc-content-box .box-hd .filter-list a {
  color: #757575;
}

.uc-content-box .box-hd .filter-list a:hover {
    color: #333;
}

.order-list-box .order-list {
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
}

.order-list-box .uc-order-item {
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
}

.order-list-box .uc-order-item-shipping {
  border-color: #83c44e;
}

.uc-content-box .box-hd .search-box {
  border-color: transparent;
  border: 0;
  float: right;
}

.uc-content-box .box-hd .icon-search {
  margin-top: 13px; 
  margin-right: 5px;
  left: -28px;
  position: relative;
  cursor: pointer;
}

.uc-content-box .box-hd .search {
  margin: 0;
  margin-top: 13px;
  color: #757575;
  width: 200px;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  padding-right: 30px;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  font-size: 10pt;
}

.uc-content-box .box-hd .search::-webkit-input-placeholder {
  color: #c2c2c2;
}

.uc-content-box .box-hd .search:hover {
  border-color: #b0b0b0;
}

.uc-content-box .box-hd .search:focus {
  border-color: #ff6700;
}

.uc-order-item {
  position: relative;
}

.order-list-box .uc-order-item-shipping .order-summary {
  background: #fbfff6;
}

.order-list-box .order-summary {
  padding: 25px 30px 1px;
}

.uc-order-item-shipping .order-status,
.uc-order-item-shipping .order-desc {
  color: #83c44e;
}

.uc-order-item .order-status {
  font-size: 18px;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.order-list-box .order-detail-table {
  width: 100%;
}

.order-list-box .order-detail-table th.col-main {
  padding-right: 10px;
}

.order-list-box .uc-order-item-shipping .order-detail-table th {
  background: #fbfff6;
  border-bottom: 1px solid #cfeeab;
}

.order-list-box .order-detail-table th {
  height: 28px;
  padding: 0 30px 24px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 400;
  text-align: left;
  color: #757575;
  vertical-align: bottom;
}

.order-list-box .order-detail-table th p {
  margin: 0;
}

.order-list-box .order-detail-table th .sep {
  color: #e0e0e0;
  float: none;
}

.sep,
.ndash {
  margin: 0 0.25em;
  font-family: sans-serif;
}

.order-list-box .order-detail-table th.col-sub {
  width: 240px;
  padding-left: 10px;
  text-align: right;
}

.order-list-box .order-detail-table th .num {
  height: 18px;
  margin-left: 0px;
  margin-right: 5px;
  font-size: 28px;
  font-weight: 200;
  line-height: 1;
  color: #333;
  float: none;
}

.order-list-box .order-detail-table td {
  padding: 0 30px;
}

.order-list-box .goods-list {
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
}

.order-list-box .goods-list li {
  position: relative;
  height: 44px;
  margin: 10px 0;
  padding: 18px 18px 18px 100px;
  line-height: 22px;
  color: #333;
}

.order-list-box .goods-list .figure-thumb {
  position: absolute;
  left: 0;
  top: 0;
}

.order-list-box .goods-list .figure-thumb a {
  display: block;
}

.order-list-box .goods-list .figure-thumb img {
  width: 80px;
  height: 80px;
  border: 0;
}

.order-list-box .goods-list .name {
  margin: 0;
}

.order-list-box .goods-list .name a {
  color: #333;
}

.order-list-box .goods-list .price {
  margin: 0;
}

.order-list-box .order-detail-table .order-actions {
  padding-top: 20px;
  text-align: right;
  vertical-align: top;
}

.order-list-box .order-detail-table .order-actions .btn {
  display: block;
  margin: 0 0 10px auto;
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

.btn-small {
  width: 118px;
  height: 28px;
  font-size: 12px;
  line-height: 28px;
}

.btn-line-gray {
  border-color: #b0b0b0;
  background: #fff;
  color: #757575;
}

.btn-line-gray:hover {
    color: #fff;
    background-color: #757575;
    border-color: #757575;
}
</style>