<template>
  <div class="body">
    <div class="site-header">
      <div class="container">
        <div class="header-logo">
          <a class="logo" href="//www.mi.com/index.html" title="小米官网"></a>
        </div>
        <div class="header-title" id="J_miniHeaderTitle">
          <h2>支付订单</h2>
        </div>
        <div class="topbar-info" id="J_userInfo">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{this.$store.state.user.name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/user">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/order">我的订单</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/fav">我的喜欢</router-link>
              </el-dropdown-item>

              <el-dropdown-item>
                <a rel="nonfollow" href="#">退出登录</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="sep">|</span>
          <div class="el-dropdown">
            <span class="el-dropdown-link">
              <router-link to="/order">我的订单</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-order">
      <div class="order-info clearfix">
        <div class="fl">
          <h2 class="title">订单提交成功！去付款咯~</h2>
          <p class="order-time" id="J_deliveDesc"></p>
          <p class="order-time">
            请在
            <span class="pay-time-tip">2小时</span>
            内完成支付，超时后将取消订单
          </p>
          <p class="post-info" id="J-postinfo">收货信息:{{this.address}}</p>
        </div>
        <div class="fr">
          <p class="total">
            应付总额
            <span class="money">
              <em>{{this.orderprice}}</em>元
            </span>
          </p>
        </div>
      </div>
      <div class="order-down">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="订单详情" name="1">
            <div class="order-detail" style="display: block;">
              <ul>
                <li class="clearfix">
                  <div class="label">订单号:</div>
                  <div>
                    <span class="order-num">5200123644001679</span>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="label">收获信息:</div>
                  <div class="content">{{this.address}}</div>
                </li>
                <li class="clearfix">
                  <div class="label">商品名称:</div>
                </li>

                <li class="clearfix">
                  <div class="label">发票信息</div>
                  <div class="content">电子发票个人</div>
                </li>
              </ul>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <i class="iconfont icon-right">√</i>
    </div>
    <div class="section section-payment">
      <div class="cash-title" id="J_cashTitle">选择以下支付方式</div>
      <div class="payment-box">
        <div class="payment-header clearfix">
          <h3 class="title">支付平台</h3>
          <!-- <span class="desc"></span> -->
        </div>
        <div class="payment-body">
          <ul class="clearfix payment-list">
            <li class="J_bank">
              <a href="#" />
              <img
                src="//s01.mifile.cn/i/banklogo/payOnline_zfb.png?ver2015"
                alt="支付宝"
                style="margin-left:0;"
              />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//c1.mifile.cn/f/i/16/pay/weixinpay.png" alt="微信支付" style="margin-left: 0;" />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img
                src="//s01.mifile.cn/i/banklogo/unionpay.png?ver2015"
                alt="银联"
                style="margin-left: 0;"
              />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img
                src="//s01.mifile.cn/i/banklogo/micash.png?ver2015"
                alt="小米钱包"
                style="margin-left: 0;"
              />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_nyyh.png?ver2015" alt />
            </li>
          </ul>
          <div class="event-desc">
            <p>小米钱包： 享最高立减99元</p>
            <a href="//www.mi.com/c/payrule/" class="more" target="_blank">了解更多</a>
          </div>
        </div>
      </div>
      <div class="payment-box">
        <div class="payment-header clearfix">
          <h3 class="title">银行借记卡及信用卡</h3>
        </div>
        <div class="payment-header clearfix">
          <ul class="clearfix payment-list">
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_zsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_gsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_jsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_jtyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_zgyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_youzheng.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_gfyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_pufa.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_gdyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_xyyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_msyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_shyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_bjnsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_nbyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_hzyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_shnsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_fcyh.png?ver2015" alt />
            </li>
            <li class="J_showMore">
              <span class="text hide">查看更多</span>
              <span class="text">收起更多</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="payment-box payment-box-last">
        <div class="payment-header clearfix">
          <h3 class="title">快捷支付</h3>
          <span class="desc">(支持以下各银行信用卡以及部分银行借记卡)</span>
        </div>
        <div class="payment-body">
          <ul class="clearfix payment-list">
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_zsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_jtyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_jsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_gsyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_zxyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_gdyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_zgyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_shncsyyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_xyyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_nyyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_payh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_hyyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <a href="#" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_gfyh.png?ver2015" alt />
            </li>
            <li class="J_bank">
              <input type="radio" name="payOnlineBank" id="BOB-KQ" value="BOB-KQ" />
              <img src="//s01.mifile.cn/i/banklogo/payOnline_bjyh.png?ver2015" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      orderprice: this.$route.query["price"],
      address: this.$route.query["address"],
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: {
    pagefooter: Footer
  },
  layout: "payment"
  // page component definitions
};
</script>
<style scoped>
.order-num {
  color: #ff6700;
}
.order-down {
  margin-top: 100px;
  margin-left: 30px;
  height: 80px;
}
.order-detail {
  display: none;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}
.content {
  float: left;
}
.label {
  float: left;
  width: 85px;
}
.total {
  margin-bottom: 10px;
  color: #757575;
}
.money {
  color: #ff6700;
  font-size: 24px;
}
.fl {
  float: left;
}
.fr {
  float: right;
  text-align: right;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.event-desc {
  width: 894px;
  background-color: #fafafa;
  padding: 20px;
  border: 1px solid #e0e0e0;
  font-size: 12px;
  line-height: 2;
  position: relative;
}
.title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: normal;
  line-height: 36px;
  width: 300px;
}
.order-time span {
  margin: 0 5px;
  color: #ff6700;
}
.sep {
  color: #e0e0e0;
}
.site-header {
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
}
.body {
  font-size: 14px;
  line-height: 28px;
  font-weight: normal;
  color: #424242;
}
.topbar-info {
  margin-top: 40px;
  line-height: 40px;
  position: relative;
  float: right;
  height: 40px;
}
.header-logo {
  width: 93px;
  margin-top: 26px;
  float: left;
}
.header-title {
  margin-top: 41px;
  float: left;
  font-size: 20px;
}
.logo {
  position: relative;
  display: block;
  background-color: #ff6700;
  width: 55px;
  height: 55px;
  background: url(/img/logo-mi.png) no-repeat;
}
.order-info {
  padding: 20px 0;
  margin-left: 130px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
}
.icon-right {
  width: 80px;
  height: 80px;
  line-height: 80px;
  position: absolute;
  top: 40px;
  left: 50px;
  font-size: 80px;
  color: #83c44e;
  text-align: center;
  border: 2px solid #83c44e;
  border-radius: 42px;
  overflow: hidden;
}
.section {
  background-color: #fff;
  padding: 30px 48px;
  margin-bottom: 30px;
  color: #424242;
}
.section-order {
  padding-left: 183px;
  position: relative;
}
.section-payment {
  margin-left: 30px;
}
.footerclass {
  float: left;
}
.container {
  width: 1226px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  height: 100px;
}
.cash-title {
  height: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 18px;
  min-width: 1226px;
}
.section {
  padding: 30px 48px;
  margin-bottom: 30px;
  background-color: #fff;
  color: #424242;
  display: block;
}
.payment-box {
  float: left;
  font-size: 16px;
  color: #616161;
}
.payment-body {
  display: block;
}
.payment-header {
  margin-bottom: 15px;
  margin: 0;
  padding: 0;
}
.payment-list {
  margin: 0 0 0 -14px;
  padding: 0;
  overflow: hidden;
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
.desc {
  margin-left: 10px;
  margin-top: 6px;
  font-size: 12px;
  color: #b0b0b0;
}
.clearfix {
  *zoom: 1;
}
.clearfix::before {
  clear: both;
}
.clearfix::after {
  content: " ";
  display: table;
}
</style>