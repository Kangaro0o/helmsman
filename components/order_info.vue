<template>
  <div class="page">
    <div class="span16">
      <div class="uc-box uc-main-box">
        <div class="uc-content-box order-view-box">
          <div class="box-hd">
            <h1 class="title">
              订单详情
              <small>
                请谨防钓鱼链接或诈骗电话，
                <a href="https://www.baidu.com">了解更多&gt;</a>
              </small>
            </h1>
            <div class="more clearfix">
              <h2 class="subtitle">
                订单号：{{this.$route.query.oid}}
                <span class="tag tag-subsidy"></span>
              </h2>
            </div>
          </div>
          <div class="box-bd">
            <div class="uc-order-item uc-order-item-shipping">
              <div class="order-detail">
                <div class="order-summary">
                  <div class="order-status">{{orderStatus[Info.status]}}</div>
                  <!-- <div class="order-progress">
                  </div>-->
                </div>
                <table class="order-items-table">
                  <tbody>
                    <tr>
                      <td class="col col-thumb">
                        <div class="figure figure-thumb">
                          <a :href="Info.goods_id">
                            <img :src="Info.imgUrl" width="80" height="80" alt />
                          </a>
                        </div>
                      </td>
                      <td class="col col-name">
                        <p class="name">
                          <a :href="Info.goods_id">{{Info.goods_name}}</a>
                        </p>
                      </td>
                      <td class="col col-price">
                        <p class="price">{{Info.goods_price}}元 × {{Info.count}}</p>
                      </td>
                      <td class="col col-actions"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 订金盲约订单 -->

              <div id="editAddr" class="order-detail-info">
                <h3>收货信息</h3>
                <table class="info-table">
                  <tbody>
                    <tr>
                      <th>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</th>
                      <td>{{Info.receiver_name}}</td>
                    </tr>
                    <tr>
                      <th>联系电话：</th>
                      <td>{{Info.receiver_phone}}</td>
                    </tr>
                    <tr>
                      <th>收货地址：</th>
                      <td>{{Info.address}}</td>
                    </tr>
                    <tr>
                      <th>邮政编码：</th>
                      <td>{{Info.postcode}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div id="editTime" class="order-detail-info">
                <h3>订单支付</h3>
                <table class="info-table">
                  <tbody>
                    <tr>
                      <th>创建时间：</th>
                      <td>{{Info.create_time}}</td>
                    </tr>
                    <tr>
                      <th>支付时间：</th>
                      <td>{{Info.pay_time}}</td>
                    </tr>
                    <tr>
                      <th>支付方式：</th>
                      <td>{{Info.pay_type}}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="actions"></div>
              </div>
              <div class="order-detail-total">
                <table class="total-table">
                  <!-- 预售 开始支付定金 -->
                  <tbody>
                    <tr>
                      <th>商品总价：</th>
                      <td>
                        <span class="num">{{Info.goods_price}}</span>元
                      </td>
                    </tr>
                    <tr>
                      <th class="total">实付金额：</th>
                      <td class="total">
                        <span class="num">{{Info.goods_price}}</span>元
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="delete">
                  <a class="btn btn-small btn-line-gray" @click="delOrdFun">删除订单</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrdInfo } from '@/api/order'
import { delOrd } from '@/api/order'
export default {
  data() {
    return {
      Info: [],
      orderStatus: { "1": "待付款", "2": "待发货", "3": "待收货" },
    }
  },
  created() {
    this.OrdInfoFun();
  },
  methods: {
    delOrdFun() {
      delOrd(this.$route.query.oid).then(res => {
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return;
        }
        this.$message({
          message: res.message,
          type: status.type
        });
        this.$router.push("/order");
      });

    },
    OrdInfoFun() {
      getOrdInfo(this.$route.query.oid).then(res => {
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return;
        }
        this.Info = res.data.ordItemsInfo;
      });
    },

  }
};
</script>




<style scoped>
.span16 {
  width: 978px;
  margin: 0 auto;
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC";
  font-size: 14px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.clearfix[data-v-4343120c] {
  height: 56px;
}
.order-view-box .uc-order-item .order-detail {
  padding: 25px 0;
  margin-bottom: 5px;
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
.order-view-box .uc-order-item .order-detail-info {
  position: relative;
  _height: 120px;
  height: auto;
  min-height: 120px;
  padding: 6px 0 12px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

user agent stylesheet div {
  display: block;
}
.uc-content-box .box-hd .more {
  border-bottom: 1px solid #e0e0e0;
}
.uc-content-box .box-hd .subtitle {
  float: left;
  font-size: 18px;
  font-weight: 400;
  color: #333;
}
.uc-content-box .box-hd .tag-subsidy {
  background-color: #2196f3;
}
.uc-content-box .box-hd .actions {
  float: right;
  padding-top: 5px;
}
.uc-order-item {
  position: relative;
}

.order-view-box .uc-order-item .order-status {
  margin-bottom: 25px;
}
.uc-order-item-shipping .order-status,
.uc-order-item-shipping .order-desc {
  color: #83c44e;
}
.uc-order-item .order-status {
  font-size: 18px;
}
.order-view-box .uc-order-item .order-progress {
  height: 65px;
  margin-bottom: 15px;
}
.order-view-box .uc-order-item .progress-list {
  width: 880px;
  height: 20px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  border-radius: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #424242;
  background-color: #eee;
}
.clearfix {
  *zoom: 1;
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
user agent stylesheet ol {
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.order-view-box .uc-order-item .progress-list .step-done {
  background-color: #83c44e;
  color: #fff;
}
.order-view-box .uc-order-item .progress-list .step-first {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.order-view-box .uc-order-item .progress-list .step {
  float: left;
  width: 176px;
  height: 20px;
}
user agent stylesheet li {
  display: list-item;
  text-align: -webkit-match-parent;
}

user agent stylesheet li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.order-view-box .uc-order-item .progress-list .step-active {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #83c44e;
  color: #fff;
}

.order-view-box .uc-order-item .order-items-table .col-thumb {
  width: 100px;
}
.order-view-box .uc-order-item .order-items-table .col {
  height: 90px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
  color: #333;
}
user agent stylesheet td {
  display: table-cell;
  vertical-align: inherit;
}

.order-view-box .uc-order-item .order-detail-info {
  position: relative;
  _height: 120px;
  height: auto;
  min-height: 120px;
  padding: 6px 0 12px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.order-view-box .uc-order-item .order-detail-total .total-table {
  width: 255px;
  margin: 0 0 0 auto;
  color: #757575;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
.uc-content-box .box-hd small {
  margin-left: 10px;
  font-size: 12px;
  line-height: 1.5;
}
.order-view-box .uc-order-item .order-detail-info .actions .btn {
  display: block;
  margin: 0 0 10px auto;
}

.btn-small {
  width: 118px;
  height: 28px;
  font-size: 12px;
  line-height: 28px;
  margin-top: 12px;
}
.btn-line-gray {
  border-color: #b0b0b0;
  background: #fff;
  color: #757575;
  margin-top: 20px;
}
.order-view-box .uc-order-item .order-items-table {
  width: 100%;
}

.order-view-box .uc-order-item .order-items-table .col-thumb {
  width: 100px;
}

.order-view-box .uc-order-item .order-items-table .col-name {
  width: 290px;
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
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
view-box .uc-order-item .order-detail-info {
  position: relative;
  _height: 120px;
  height: auto;
  min-height: 120px;
  padding: 6px 0 12px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}
.order-view-box .uc-order-item .order-detail-info .info-table {
  color: #757575;
}

.order-view-box .uc-order-item .order-detail-info .info-table th {
  width: 80px;
  font-weight: 400;
}

.order-view-box .uc-order-item .order-detail-info .info-table th,
.order-view-box .uc-order-item .order-detail-info .info-table td {
  padding: 3px 0;
  text-align: left;
}
.order-view-box .uc-order-item .order-items-table .col-name {
  width: 290px;
}
user agent stylesheet th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
}
.order-view-box .uc-order-item .order-detail-info h3 {
  margin: 0 0 15px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
}
.btn {
  display: block;
  width: 158px;
  height: 38px;
  padding: 0;
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
  float: right;
}

.btn-line-gray:hover {
  color: #fff;
  background-color: #757575;
  border-color: #757575;
}
.page {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 1000px;
  padding-top: 40px;
  padding-bottom: 30px;
}
.delete {
  height: 60px;
  margin-top: 30px;
}
</style>
