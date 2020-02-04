<template>
<div id="app">
        <div class="phone-header">
               <div class="phone-header-nav"><span>首页</span></div> 
        </div>
        <div class="filter-list" id="j_filterList">
                <ul class="item show-less" id="list_item_class">
                <span class="label">分类:</span> 
                <li class="allactive">全部</li>
                <li class="liactive">手机</li>
                <li class="liactive">出行</li>
                <li class="liactive">包</li>
                <li class="liactive">日用百货</li>
                <li class="liactive">手机配件</li>
                <li class="liactive">手机贴膜</li>
                
                <li class="liactive" v-for="l in 4" :key="l"> </li>
                <span class="classer-more">更多</span><i class="el-icon-arrow-down icon-more">  </i>
                </ul>
        </div>
        <div class="phone-orderBy">
          <div class="phone-list-box">
               <div style="height:30px;">
                <ul class="order-list">
                        <li class="active"><a>综合</a></li>
                        <li class="order-item"><a>新品</a></li>                        
                        <li class="order-item"><a>销量</a></li>
                        <li class="order-item"><a>价格</a><i class="el-icon-top"></i></li>
                </ul>
               
             </div>
          <div class="phone-list" id="J_goodsList">
                <div v-for="(item,index) in goodsItems" :key="index" class="phone-box">
                   <div class="phone-img"> <img :src="item.imgurl" alt/> </div>
                   <h2 class="phone-desc">{{item.goods_name}}</h2>
                   <p class="phone-price">{{item.goods_price}}元起，<del>3000元起</del></p>
                   <p >{{item.desc}}</p>
                   <el-button type="danger">立即购买</el-button>
                </div>
         
        </div>
        <div class="phone-list-dottom">
           <el-pagination  :small="true" :background="true" 
                      layout="prev, pager, next"
            :total="20">
           </el-pagination> 
         </div>  
          </div>
             
        </div>
       
</div>
</template>
<script scoped>
import {getgoodsItems} from '@/api/goods'
export default {
     created(){
      this.getgoodsItems()
     },
     data()
     {
             return {
                     goodsItems:[],
             };
     },
     methods: {
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
             })}
     },
     components: {

     },
     layout: 'goodslist'
}
</script>
<style >
 
 a:hover{
         background-color:#ff6700;
          cursor: pointer;
          outline: 0;
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
        margin-left: 4px;
}
.classer-more{

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
        padding-left:100px;
        padding-top:10px;
        color:#757575; 
 }



</style>