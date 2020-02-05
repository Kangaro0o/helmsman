<template>
<div id="app">
        <div class="phone-header">
               <div class="phone-header-nav"><span>首页</span>
               <i class="el-icon-arrow-right"></i>
               <span>全部结果</span>
               <i class="el-icon-arrow-right"></i>
               
               </div>
                
        </div>
        <div class="filter-list" id="j_filterList">
                <ul class="item show-less" id="list_item_class">
                <span class="label">分类:</span> 
                <li class="liactive" v-for="(item,index) in list2Items" :key="index" >
                <a @click="addClassfun2(index)" v-bind:class='{active:flag===index}'>
                {{item}}
                </a>

                </li>
                
                
                <span class="classer-more"><i class="el-icon-arrow-down icon-more">  </i></span>
                </ul>
        </div>
        <div class="phone-orderBy">
          <div class="phone-list-box">
               <div style="height:30px;">
                <ul class="order-list">
                <li v-for="(liitem,index) in liItems" :key="index" @click="addClassfun(index)" v-bind:class='{active:i===index}'>
                <a  @click="addClassfun(index)" v-bind:class='{active:i===index}'>{{liitem.name}}</a>
                </li>        
                </ul>
               
             </div>
          <div class="phone-list" id="J_goodsList">
                  <!-- <router-view v-if="isrouteralive"> -->
                <div v-for="(item,index) in goodsItems" :key="index" class="phone-box">
                   <div class="phone-img"> <img :src="item.imgurl" alt/> </div>
                   <h2 class="phone-desc">{{item.goods_name}}</h2>
                   <p class="phone-price">{{item.goods_price}}元起，<del>3000元起</del></p>
                   <p >{{item.desc}}</p>
                   <el-button type="danger">立即购买</el-button>
                </div>
         <!-- </router-view> -->
        </div>
        <div class="phone-list-dottom">
           <el-pagination  :small="true" :background="true" 
                      layout="prev, pager, next"
            :total="20">
           </el-pagination> 
            <span>{{this.$store.state.user.name}}</span>  
         </div>
        
          </div>
             
        </div>
       
</div>
</template>
<script scoped>
import {getgoodsItems, goodsApi} from '@/api/goods'

export default {
     created(){
      this.getgoodsItems()
     },

     data()
     {
             return {
                //      isrouteralive:true,
                     goodsItems:[],
                //      varchangecolor1:false,
                //      varchangecolor2:false,
                //      varchangecolor3:false,
                //      varchangecolor4:false,
                //      isactive:false,
                     i:0,
                     flag:0,
                     keywords:null,
                     OrderBy:null,
                     total:0,//总条数
                     currentpage:1,//当前页
                     pagesize:10,//每页大小
                     liItems:[{id: 1,name:'综合'},{id:2,name:'新品'},{id:3,name:'销量'},{id:4,name:'价格↑'}],
                     list2Items:['全部','手机','出行','包','日用百货','手机配件','手机贴膜','更多']
             };
     },
     
     computed:{
             computedclass:function(){
                     return{
                             changecolor:this.varchangecolor,
                             
                     }
             },
             
     },
     methods: {
        //      reload(){
        //              this.isrouteralive=true
        //              this.$nextTick(function(){
        //                      this.isrouteralive=true
        //              })
        //      },
             islogin(){
                    const token=this.$store.user.token
                    if(token !=null || token !="")
                       ;
                    else
                      ;
             },

             addClassfun2(index) {
                     this.flag=index;
             },
             addClassfun(index) {
                     this.i=index;
                     if(index==2)
                      {  this.OrderBy=1
                        
                      
                        console.log(goodsItems)
                      }
                     else
                       { this.OrderBy=2;
                //        this.$router.go(0);
                        console.log("test");
                       }
             },
             getgoodsItems(){
             getgoodsItems().then(res => {
                     let status=this.$resultCode.getStatus(res.code)
                     let success=this.$resultCode.getSuccessStatus()
                     if(status !== success)
                     {
                             Message({
                                     message:res.message,
                                     type: status.type
                             })
                             return
                     }
                     this.goodsItems = res.data.goodsItems
             })},
          
     },
     components: {

     },
     layout: 'goodslist'
}
</script>
<style scoped>
 .active {
        color:#ff6700;
}
.phone-list-dottom{
        height:50px;
        float:left;
        padding-left:550px;
}
.phone-price{
    margin: 0 0 15px;
    color: #ff6700;
}
.phone-price del{
        color:#b0b0b0;
}
.phone-box{
    position: relative;
    float: left;
    width: 296px;
    height: 383px;
    padding-top: 47px;
    margin-right: 14px;
    margin-bottom: 14px;
    text-align: center;
    background: #fff;
    transition: box-shadow .5s linear;
}
.phone-list-box{
      
        height:2000px;
}
.phone-list{
        
        background:#f5f5f5;
        padding-left:6%;
        margin-top:30px;
        height:75%;
        width:1250px;
}
.type-list{
        background:#fff;
        width:100px;
        height:30px;
        float:right;
}
.active{
      float:left;  
}
.order-list{
     height:30px;
     line-height:30px;
     float:left;
     padding-left:60px;

}

.order-list li{
      float:left;
        padding-left:30px;
        border-left:1px solid #e0e0e0;
        padding-right:30px;
}
.phone-orderBy{
        background:#f5f5f5;
        padding: 20px 0 100px;
        
}
.icon-more{
        margin-left: -84px;
}
 .liactive{
         margin-left:90px;
         float:left;
 }
 .allactive{
                margin-left:90px; 
                float:left;
 }        
  .classer-more{
          margin-left:90px;
  }
 .filter-list{
         height:55px;
         background:#fff;
         color:#757575;
         margin-top:35px;
 }
 .label{
         padding-left:90px;
         float:left;
 }
 .phone-header{
         background:#f5f5f5;
         height:40px;
 }
 .phone-header-nav{
        padding-left:90px;
        padding-top:10px;
        color:#757575; 
 }


 li a:hover{
        color:#ff6700;
          cursor: pointer;
          outline: 0;
 } 
</style>