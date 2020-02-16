<template>
<div id="app">
        <div class="phone-header">
               <div class="phone-header-nav"><span>首页</span>
               <i class="el-icon-arrow-right"></i>
               <span>全部结果</span>
               <i class="el-icon-arrow-right"></i>
               <!-- 当前页面商品种类 -->
               <span>{{this.$router.params}}</span>
               
               </div>
                
        </div>
        <div class="filter-list" id="j_filterList">
                 <span class="label">分类:</span> 
                <ul class="item-show-less" id="list_item_class">
               
                <li style="float:left; margin-left:60px;" v-for="(item,index) in navItems" :key="index" @click="addClassfun2(index)" v-bind:class='{active:flag===index}' >
                <a @click="addClassfun2(index)" v-bind:class='{active:flag===index}'>
                {{item.name}}
                </a>
                </li>
                
                </ul>
                <span class="classer-more"><i class="el-icon-arrow-down icon-more">  </i></span>
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
                   <div class="phone-img"> <img :src="item.imgUrl" alt/> </div>
                   <h2 class="phone-desc">{{item.goods_name}}</h2>
                   <p class="phone-price">{{item.goods_price}}元起，<del>3000元起</del></p>
                   <p >{{item.desc}}</p>
                   <p style="display:block;">销量: {{item.count}}</p>
                   <el-button type="danger"><router-link :to="{path:'/goods/detail',query:{gid:item.gid}}">立即购买</router-link></el-button>
                </div>
         <!-- </router-view> -->
        </div>
        <div class="phone-list-dottom">
           <el-pagination  background layout="prev, pager, next" :total="20" :page-size="pagesize"  :current-page="pagenum"
          @current-change="handlecurrentchange"  @prev-click="handlepreclick"  @next-click="handlenextclick">
           </el-pagination>

           <!-- <el-pagination background layout="prev, pager, next"  :total="20" :page-size="pagesize"  :current-page="pagenum"
          @current-change="handlecurrentchange"  @prev-click="handlepreclick"  @next-click="handlenextclick"  >
</el-pagination> -->
         </div>
          </div>       
        </div>
       
</div>
</template>
<script >
import {getgoodsItems,getgoodsItems2} from '@/api/goods'
import {getNavItems} from '@/api/menu'
import request from '@/service'
import TopHeader from '@/components/TopHeader'
export default {
     created(){
      this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
      this.getNavItems()
    },
     data()
     {
             return {
                     goodsItems:[],
                     i:0,
                     flag:0,
                     keyword:null,//查询关键词
                     orderby:'default',//排序方式，默认是gid
                     type:'miphone',//商品类型
                     total:0,//总条数
                     pagesize:12,//每页显示条目
                     pagenum:0,//当前页
                     liItems:[{id: 1,name:'综合'},{id:3,name:'销量'},{id:4,name:'价格↑'}],
                     navItems:[],
                     show:false
                
             };
     },
     
  
     methods: {
             getNavItems()
             {
         getNavItems().then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = this.$resultCode.getSuccessStatus()
        // 如果出错了，则弹框提示
        if (status !== success) {
          Message({
            message: res.message,
            type: status.type
          })
          return
        }
        this.navItems = res.data
      })
             },
             handlecurrentchange(val)
             {
                     this.pagenum=val
                     console.log(this.pagenum)
                     this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
             },
             addClassfun2(index) {
                    this.flag=index;
                    this.type=this.navItems[index].type
                    this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
                   console.log(this.$route.params.navItems)
                   console.log('test')
                   console.log( this.type)
                    console.log(this.$route.params.orderby)
                //    console.log(test)
                //    console.log(index);



             },
             addClassfun(index){
                     this.i=index;
                     if(index==1)//选择以销量为排序方式
                      {  this.orderby='salecount'
                        //  this.updategoodsItems()
                         this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
                         console.log(this.orderby)
                      }
                     else if(index==2) //选择以价格升序为排序方式  
                       { this.orderby='price';  
                        this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
                        console.log(this.orderby)
                       }
             },
             handlepreclick()
             {
                     this.pagenum-=1
                    this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
                      console.log(this.pagenum)
                    
             },
             handlenextclick()
             {       this.pagenum+=1
                    this.getgoodsItems(this.type,this.orderby,this.pagenum,this.pagesize,this.keyword)
                     console.log(this.pagenum)
                     
             },
 
             getgoodsItems(type,orderby,pagenum,pagesize,keyword){
                     if(this.keyword == null){
             getgoodsItems2(type,orderby,pagenum,pagesize).then(res => {
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
                     this.goodsItems = res.data
                     console.log(this.goodsItems)
             })}else{
                      getgoodsItems(type,orderby,pagenum,pagesize,keyword).then(res => {
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
                     this.goodsItems = res.data
                     console.log(this.goodsItems)
             })
             }
             
             },
          
     },
     components: {
              'topHeader':TopHeader
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
        font-size:200px;
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