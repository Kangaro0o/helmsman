<template>
<div class="body">
    <div class="breadcrumbs">
        <div class="micontainer">
            <a href="/">首页</a>
            <span class="sep">/</span>
            <span>收货地址
            </span>
        </div>
    </div>
    <div class="mi-user">
        <div class="micontainer">
            <div class="row"> 
                <div class="span4">
                    <div id="J-userMenu" class="uc-box uc-sub-box">
                        <div class="uc-nav-box">
                        <div class="box-hd"><h3 class="title">订单中心</h3></div>
                        <div class="box-bd">
                            <ul class="uc-nav-list J_navList">
                            <li class="ulclass"><a class="J-noRandom" href="static.mi.com/order/">我的订单</a></li>
                            <li data-type="11" class="ulclass"><a class="J_tuanList" href="static.mi.com/order/?type=11">团购订单</a></li>
                            <li class="ulclass"><a href="//order.mi.com/user/comment">评价晒单</a></li>
                            <li class="ulclass"><a href="//order.mi.com/user/recharge">话费充值订单</a></li>
                            <li class="ulclass"><a href="//huanxin.mi.com/order/list">以旧换新订单</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="uc-nav-box">
                        <div class="box-hd"><h3 class="title">个人中心</h3></div>
                        <div class="box-bd">
                            <ul id="J_orderNavList" class="uc-nav-list">
                            <li class="ulclass"><a href="//order.mi.com/portal">我的个人中心</a></li>
                            <li class="ulclass" ><a href="//order.mi.com/message/list">消息通知</a></li>
                            <li class="ulclass"><a href="//order.mi.com/invite/list">购买资格</a></li>
                            <li class="ulclass"><a href="//order.mi.com/cashAccount">现金账户</a></li>
                            <li class="ulclass"><a href="#">小米礼品卡</a></li>
                            <li class="ulclass"><a href="#">现金券</a></li>
                            <li class="ulclass"><a href="#">喜欢的商品</a></li>
                            <li class="ulclass"><a href="#">优惠券</a></li>
                            <li class="ulclass"><a href="#" class="active">收货地址</a></li>
                            <li class="ulclass"><a href="#">红包</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="uc-nav-box">
                        <div class="box-hd"><h3 class="title">售后服务</h3></div>
                        <div class="bx-bd">
                            <ul class="uc-nav-list">
                                <li class="ulclass"><a href="#">服务记录</a></li>
                                <li class="ulclass"><a href="#">申请服务</a></li>
                                <li class="ulclass"><a href="#">领取快递报销</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="uc-nav-box">
                        <div class="box-hd"><h3 class="title">账户管理</h3></div>
                        <div class="box-bd">
                            <ul class="uc-nav-list">
                            <li class="ulclass"><a href="#">个人信息</a></li>
                            <li class="ulclass"><a href="#">修改密码</a></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div class="mi-address-box span16">
                        <div class="box">
                            <h1>收货地址</h1>
                            <div class="address-box">
                                <div class="address-list">
                                    <div class="address-item">
                                        <div class="add-desc">
                                            <i><span class="temp2 "></span></i>
                                            <span class="temp">添加新地址</span>
                                        </div>
                                    </div>
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
import Footer from '@/components/Footer'
export default {
    components: {
        'userfooter': Footer
    },
    layout: 'user'
}
</script>
<style >
.temp{
    margin-top: 1px;
    margin-left:-11px;
}
 .active{
     color:#ff9650;   
 }
   .address-list{
       height:200px;
   }
   .address-item{
       display:inline-block;
       width:268px;
       height:178px;
       border: 1px solid #e0e0e0;
       cursor:pointer;
       position:relative;
       margin-bottom:20px;
       vertical-align:top;
       transition:all .4s ease;
       
   }.temp2{
       display:block;
       width:51px;
       height:51px;
       /* margin:0 auto 8px;
       font-size:30px;
       line-height:30px;
       background-color:#e0e0e0;
       border-radius:17px;
       text-align:center;
       transition:all .4s ease;
       color:#fff; */
       background:url(/img/add-address.jpg) no-repeat;
      
       }
   .add-desc{
       position:absolute;
       top:45%;
       left:40%;
       transform:translate(-50%,-50%,0);
       color:#b0b0b0;
   }
   .address-box{
     margin-top:15px;
     }
  .box{
      margin:0 48px;
      font-size:15px;
      font-weight:400;
      line-height:68px;
      color:#757575;
  }
  .mi-address-box{
      background:#fff;
      padding:20px 0;
      display:inline;
  }
 .span16{
     width:978px;
     float:left;
     margin-left:14px;
     min-height:1px;
 }
 .ulclass{
     line-height:27px;
     font-size:14px;
     padding-left:20px;
 }
 .title{
     font-size:16px;
     font-weight:400;
     line-height:40px;
     color:#333;
     padding-left:20px;
 }
 .box-hd{
     height: 40px;
 }
 .uc-nav-list{
     margin:0;
     padding:0;
     list-style-type:none;}
 .uc-nav-box{
     margin-bottom:12px;
 }
 .uc-sub-box{
     padding:36px 0;
 }
 .uc-box{
    background:#fff;
}
.mi-user{
    display: block;
    padding:0px;
}
.mi-address{
    padding-bottom:40px;
    background:#f5f5f5;
}
.span4{
    width:234px;
    float:left;
    margin-left:14px;
    min-height:1px;
    
}
.row{
    margin-left:-14px;
    display:block;
}
.sep{
    margin:0 .5em;
    color: #b0b0b0;
}
.breadcrumbs{
     height:40px;
     font-size:12px;
     line-height:40px;
     background:#f5f5f5;
     color:#616161;
}
.micontainer{
    width:1226px;
    margin-right:auto;
    margin-left:auto;
}
.body{
    background-color:#f5f5f5;
    display:block;
    height:984px;
}
</style>