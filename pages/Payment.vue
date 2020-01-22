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
            <span class="user">
                <a rel="nofollow" class="user-name" href="//my.mi.com/portal" target="_blank">
                <span class="name">衔烛句芒</span>
                <i class="iconfont"></i>
                </a>
            <ul class="user-menu" style="display:none;">
            <li><a rel="nonfollow" href="//my.mi.com/portal" target="_blank">个人中心</a></li>
            <li><a rel="nonfollow" href="https://order.mi.com/user/comment" target="_blank">评价晒单</a></li>
            <li><a rel="nonfollow" href="https://order.mi.com/user/favorite" target="_blank">我的喜欢</a></li>
            <li><a rel="nonfollow" href="//account.xiaomi.com/" target="_blank">小米账号</a></li>
            <li><a rel="nonfollow" href="https://order.mi.com/site/logout">退出登录</a></li>
            </ul>
            </span>
            <span class="sep">|</span>
            <a rel="nofollow" class="link link-order" href="//static.mi.com/order/" target="_blank">我的订单</a>
            </div>              
      </div>
      </div>
      <div class="section section-order">
          <div class="order-info clearfix">
              <div class="f1">
                  <h2 class="title">订单提交成功！去付款咯~</h2>
                  <p class="order-time" id="J_deliveDesc"></p>
                  <p class="order-time">请在<span class="pay-time-tip">5小时15分</span>
                  内完成支付，超时后将取消订单</p>
                  <p class="post-info" id="J-postinfo">收货信息:test 15850682367 &nbsp;&nbsp;江苏省南京市鼓楼区汉口路22号南京大学南苑四舍</p>
              </div>
          </div>
          <i class="iconfont icon-right">√</i>
      </div>
      <div class="payment-body">
      <div class="cash-title" id="J_cashTitle">选择以下支付方式</div>
      <div class="payment-box">
          <div class="payment-header clearfix">
              <h3 class="title">支付平台</h3>
              <!-- <span class="desc"></span> -->
        </div>
        <div  class="payment-body">
            <ul class="clearfix payment-list">
                <li class="J_bank"><a href="#" /><img src="//s01.mifile.cn/i/banklogo/payOnline_zfb.png?ver2015" alt="支付宝" style="margin-left:0;"/></li>
                <li class="J_bank"><a href="#"/><img src="//c1.mifile.cn/f/i/16/pay/weixinpay.png" alt="微信支付" style="margin-left: 0;"/></li>
                <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/unionpay.png?ver2015" alt="银联" style="margin-left: 0;"/></li>
                <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/micash.png?ver2015" alt="小米钱包" style="margin-left: 0;"/></li> 
                <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_nyyh.png?ver2015" alt=""/></li>                   
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
              <li class="J_bank"><a href="#"/><img src="//s01.mifile.cn/i/banklogo/payOnline_zsyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_gsyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_jsyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_jtyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_zgyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_youzheng.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#"/> <img src="//s01.mifile.cn/i/banklogo/payOnline_gfyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_pufa.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_gdyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_xyyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_msyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_shyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_bjnsyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#"/> <img src="//s01.mifile.cn/i/banklogo/payOnline_nbyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_hzyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_shnsyh.png?ver2015" alt=""/></li>
              <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_fcyh.png?ver2015" alt=""/></li> 
              <li class="J_showMore">
                                <span class="text hide">查看更多</span>
                                <span class="text ">收起更多</span>
                            </li> 
          </ul>
        </div>
      </div>
      <div class="payment-box payment-box-last">
          <div class="payment-header clearfix">
              <h3 class="title">快捷支付</h3>
              <span class="desc">(支持以下各银行信用卡以及部分银行借记卡)</span>
          </div>
          <div  class="payment-body">
              <ul class="clearfix  payment-list  ">
                  <li class="J_bank"><a href="#"/><img src="//s01.mifile.cn/i/banklogo/payOnline_zsyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_jtyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_jsyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_gsyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_zxyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_gdyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_zgyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_shncsyyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_xyyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_nyyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_payh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_hyyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><a href="#" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_gfyh.png?ver2015" alt=""/></li>
                  <li class="J_bank"><input type="radio" name="payOnlineBank" id="BOB-KQ" value="BOB-KQ" /> <img src="//s01.mifile.cn/i/banklogo/payOnline_bjyh.png?ver2015" alt=""/></li> 
              </ul>
          </div>
      </div>
  </div>
  </div>
   
  
</template>
<script>
import Footer from '@/components/Footer'

export default {
  components: {
    'pagefooter': Footer
  },
  layout: 'payment'
  // page component definitions
  
}
</script>
<style>
.event-desc{
    width: 894px;
    background-color: #fafafa;
    padding: 20px;
    border: 1px solid #e0e0e0;
    font-size: 12px;
    line-height: 2;
    position: relative;
}
.title{
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: normal;
    line-height: 36px;
    width:300px;
    
}
.order-time span{
     margin: 0 5px;
    color: #ff6700;
}
.sep{
        color: #e0e0e0;
}
.site-header{
    font-size: 12px;
    border-bottom: 2px solid #ff6700;
    background: #fff;
    color: #b0b0b0;
}
.body{
  font-size: 14px;
    line-height: 28px;
    font-weight: normal;
    color: #424242;
}
.topbar-info{
    margin-top:30px;
    line-height:40px;
    position: relative;
    float:right;
    height: 40px;
}
.header-logo
{   
    width:93px;
    margin-top:26px;
    float:left;
   
}
.header-title{
    margin-top:41px;
    float:left;
    font-size:20px;

}
.logo{
    position:relative;
    display:block;
    background-color:#ff6700;
    width:55px;
    height:55px;
    background:url(../assets/logo-mi.png) no-repeat;
}
.order-info{
    padding:20px 0;
    margin-left:130px;}
.iconfont{
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
}
.icon-right{
        width:80px;
        height:80px;
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
.section{
     background-color: #fff;
     padding:30px 48px;
     margin-bottom:30px;
     color:#424242;
 }
    .section-order{
    padding-left: 183px;
    position:relative;
    
   
}
.payment-body{
    margin-left:30px;
}
.footerclass{
    float:left;
}
.container{
     width: 1226px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    height: 100px;
   

}
.cash-title{
    height:50px;
    margin-bottom:30px;
    border-bottom:1px solid #e0e0e0;
    font-size:18px;
    min-width: 1226px;
}
.section{
    padding:30px 48px;
    margin-bottom:30px;
    background-color:#fff;
    color:#424242;
    display:block;
}
.payment-box{
    float:left;
    font-size:16px;
    color:#616161;
}
.payment-body{
    display:block;
   
}
.payment-header{
    margin-bottom:15px;
    margin:0;
    padding:0;
  
}
.payment-list{
    margin:0 0 0 -14px;
    padding:0;
    overflow:hidden;
}
.payment-list li{
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
    -webkit-transition: all .4s;
    transition: all .4s;
}
.desc{
    
    margin-left: 10px;
    margin-top: 6px;
    font-size: 12px;
    color: #b0b0b0;
}
.clearfix{
    *zoom: 1;
}
.clearfix::before{
    clear:both;
}
.clearfix::after{
  content: " ";
    display: table;
}
</style>