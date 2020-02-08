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
                                    <div class="address-item" @click="dialogFormVisible=true">
                                        <div class="add-desc" >
                                            <i><span class="temp2 "></span></i>
                                            <span class="temp">添加新地址</span>

                                        </div>
                                    </div>
                                    <div  class="address-item" v-for="(item,index) in list" :key="index">
                                    <div class="name">{{item.receiver_name}}</div>
                                    <div class="tel">{{item.receiver_phone}}</div>
                                    <div class="address">{{item.address}}</div>
                                     <!-- <div class="postcode">{{item.postcode}}</div> -->
                                    <div  class="address-action"><span class="operate">修改</span><span class="operate">删除</span></div>
                                    </div>
                                </div> 
                            </div> 

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
            <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible" show-word-limit>
  <el-form :model="form">
    <el-form-item >
      <el-input type="text" placeholder="姓名" v-model="form.receiver_name"   maxlength="10"></el-input>
      <el-input placeholder="手机号" v-model="form.receiver_phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item >
  
      <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
      <el-input placeholder="详细地址" v-model="form.receiver_address"></el-input>
       <el-input placeholder="邮编" v-model="form.receiver_postcode" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="adddiv">确 定</el-button>
  </div>
</el-dialog>
    </div>
    
</template>
<script>
import Footer from '@/components/Footer'
import {getaddressItems ,addaddress} from '@/api/address'
export default {
    created(){
        this.getaddressItems()
    },
    components: {
        'userfooter': Footer
    },
    data (){
        return{
            list:[],
            text:'',
            value:[],
            options:[    {
                value:'jiangsu',
                label:'江苏省',
                children:[{
                    value:'nanjing',
                    label:'南京市',
                    children:[{
                        value:'gulou',
                        label:'鼓楼区',
                         },
                        {
                            value:'jiangning',
                            label:'江宁区'
                        },
                        {
                            value:'xuanwu',
                            label:'玄武区'
                        },
                        {   value:'yuhuatai',

                            label:'雨花台'
                        },
                        {
                            value:'lishui',
                            label:'溧水区'
                        }
                    ]

                },
                {
                    value:'taizhou',
                    label:'泰州市',
                    children:[{
                        value:'xinhua',
                        label:'兴化市'
                    },{
                        vaule:'jiangjiang',
                        label:'靖江市'
                    },{
                        value:'jiangyan',
                        label:'姜堰市'
                    },{
                        value:'taixing',
                        label:'泰兴市'
                    }]
                },{
                    value:'yangzhou',
                    label:'扬州市',
                    
                },
                {
                    value:'xuzhou',
                    label:'徐州市',
                },
                {
                    value:'suqian',
                    label:'宿迁市',

                },{
                    value:'zhenjiang',
                    label:'镇江市'
                },
                ]
            },{
                value:'beijing',
                label:'北京市',
                children:[{value:'dongcheng',
                    label:'东城区'
                },{value:'fangshan',label:'房山区'},{value:'chaoyangqu',label:'朝阳区'}]
            },
            {
                value:'shanghai',
                label:'上海市',
                children:[{value:'minghang',label:'闵行区'},{value:'jiading',label:'嘉定区'},{value:'baoshan',label:'宝山区'},{value:'songjia',label:'松江区'}]
            },
            {
                value:'shenzhen',
                label:'深圳市'
            },
            {
                value:'guangdong',
                label:'广东省'
            }
            ],
            dialogFormVisible: false,
        form: {
          receiver_name: '',
          receiver_postcode:'',
          receiver_phone:'',
          receiver_address:'',
         region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

    }},methods:{
        getaddressItems(){
            getaddressItems().then(res=>{
                let status =this.$resultCode.getStatus(res.code)
                let success= this.$resultCode.getSuccessStatus()
                if(status !== success)
                {
                    Message({
                        message:res.message,
                        type:status.type
                    })
                    return 
                }
                this.list=res.data.addresslist
            })

        },
        addaddress(){

        },
         handleChange(value) {
        console.log(value);
      },
      adddiv(){
          this.dialogFormVisible = false
          this.list.push({receiver_name:this.form.receiver_name,receiver_phone:this.form.receiver_phone,address:this.form.receiver_address,postcode:this.form.postcode})
          this.addaddress()//向后台添加地址
      }
    },
    layout: 'user'
}
</script>
<style >
.postcode{

}
  .operate{
      margin-left:15px;
  }
.name{
    font-size:18px;
    color:#333;
    line-height:30px;
    margin-bottom:10px;
}
.tel{
    line-height:22px;
    color:#757575;
}
.temp{
    margin-top: 1px;
    margin-left:-11px;
}
 .active{
     color:#ff9650;   
 }
   .address-list{
     
   }
   .address-action{
    display:none;
   
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
       margin-left:5px;
       
   }
     .address-item:hover .address-action{
    display:block;
    margin-left:120px;
    /* text-align:right;
    right:24px;
    bottom:10px;
    opacity:0; */
    color:#ff9650;
    
}
   .temp2{
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