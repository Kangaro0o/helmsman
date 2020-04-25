<template>
  <div class="body">
    <div class="header">
      <h2 class="J-proName">{{goodsInfo.goods_name}}</h2>
    </div>
    <div class="pro-choose-main">
      <div class="xm-boybox">
        <div class="lunbo">
          <div class="image-box">
            <el-carousel height="560px" trigger="click" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(item,index) in imagelist" :key="index">
                <img :src="item" height="560" width="560" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="detail">
          <div>
            <h1
              class="pro-title"
              style="padding-top:15px;padding-bottom:15px;"
            >{{goodsInfo.goods_name}}</h1>
            <p class="sale-desc" style="“padding-top:10px;padding-bottom:15px;">{{goodsInfo.desc}}</p>
            <div style="padding-top:20px;">
              <span class="final-price">{{goodsInfo.goods_price}} 元</span>
            </div>
          </div>
          <div class="pro-list">
            选择购买数量
            <el-input-number v-model="num" :min="0" :max="goodsInfo.count"></el-input-number>
            <span class="total-price">
              总计
              <font>{{goodsTotalPrice}}</font>元
            </span>
          </div>
          <ul class="btn-warp">
            <li>
              <!-- <router-link
                :to="{path:'/order/neworder',query:{gid:this.gid, count:this.count,price:this.totalprice}}"
              >-->

              <a href="javascript:void(0);" @click="addCart">
                <span class="btn-primary">加入购物车</span>
              </a>
              <!-- </router-link> -->
            </li>
            <li>
              <a href="#" class="btn-like">
                <i class="el-icon-star-off" v-if="!isFav" @click="addFavorite">收藏</i>
                <i class="el-icon-star-on" v-else @click="cancelFavorite">收藏</i>
              </a>
            </li>
          </ul>
          <div class="pro-policy">
            <ul class>
              <li class="labels">
                <i class="el-icon-circle-check iconfont"></i>
                <span class="spanitem">舵手自营</span>
              </li>
              <li class="labels">
                <i class="el-icon-circle-check iconfont"></i>
                <span class="spanitem">舵手发货</span>
              </li>
              <li class="labels">
                <i class="el-icon-circle-check iconfont"></i>
                <span class="spanitem">七天无理由退货</span>
              </li>
              <li class="labels">
                <i class="el-icon-circle-check iconfont"></i>
                <span class="spanitem">运费说明</span>
              </li>
              <li class="labels">
                <i class="el-icon-circle-check iconfont"></i>
                <span class="spanitem">七天价格保护</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pro-information">
        <div class="infor-con">
          <div class="section-box">
            <div class="section-info">
              <h3 class="container">价格说明</h3>
            </div>n
            <div class="con" style="height:189px;">
              <div class="img">
                <el-image :src="tipsImg"></el-image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getGoodsInfo } from "@/api/goods"
import { addFav, cancelFav } from "@/api/favorite"
import { saveToCart } from '@/api/order'
export default {
  layout: "goodsdetail",
  created() {
    this.getGoodsInfo(this.gid);
  },
  data() {
    return {
      imagelist: [],
      tipsImg: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg",
      goodsInfo: '',
      gid: this.$route.query.gid,
      num: 1,
      isFav: false // 是否收藏
    };
  },
  methods: {
    addCart() {
      if (this.num <= 0) {
        this.$message({
          message: '请选择购买商品数量',
          type: 'warning'
        })
        return
      }
      // 把商品信息加入到购物车
      let info = {
        'id': this.goodsInfo.gid,
        'num': this.num,
        'price': this.goodsInfo.goods_price,
        'name': this.goodsInfo.goods_name,
        'image': this.goodsInfo.imgurl,
        'isSecKill': false
      }
      saveToCart(info)
      this.$router.push({ path: '/buy/successTip' })
    },
    getGoodsInfo(gid) {//获取商品详细信息
      getGoodsInfo(gid).then(res => {
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return;
        }
        this.goodsInfo = res.data;
        // 保存照片
        this.imagelist[0] = this.goodsInfo.imgurl
        this.isFav = this.goodsInfo.favorited
      })
    },
    //添加收藏
    addFavorite() {
      addFav(this.gid).then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = ths.$resultCode.getSuccessStatus()
        // if (status === success) {
        //   this.isFav = !this.isFav
        // }
        this.$message({
          message: res.message,
          type: status.type
        })
      })
    },
    cancelFavorite() {
      cancelFav(this.gid).then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = ths.$resultCode.getSuccessStatus()
        // if (status === success) {
        //   this.isFav = !this.isFav
        // }
        this.$message({
          message: res.message,
          type: status.type
        })
      })
    }
  },
  computed: {
    goodsTotalPrice() {
      return this.goodsInfo.goods_price * this.num
    }
  }
};
</script>
<style scoped>
.desc {
  color: #616161;
  line-height: 30px;
  list-style: none;
}
.iconfont {
  font-size: 20px;
  color: #b0b0b0;
}
.spanitem {
  font-style: normal;
  color: #b0b0b0;
  white-space: nowrap;
  line-height: 30px;
  font-size: 15px;
}

.labels {
  float: left;
  padding-left: 10px;
}
.btn-like {
  display: inline-block;
  width: 140px;
  height: 52px;
  line-height: 52px;
  border: 1px solid #b0b0b0;
  text-align: center;
  font-size: 16px;
  position: relative;
  background: #b0b0b0;
  color: #fff;
  display: inline-block;
}
.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
  width: 298px;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
}
.btn-warp {
  padding: 0;
  margin: 10px 0 20px 0;
}

.btn-warp li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  vertical-align: text-top;
}

.total-price {
  display: block;
  color: #ff6700;
  font-size: 24px;
  padding-top: 20px;
}
.pro-list {
  background: #f9f9fa;
  padding-top: 85px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  padding-left: 0px;
  color: #b0b0b0;
  font-size: 20px;
}
.final-price {
  font-size: 25px;
  line-height: 1;
  color: #ff6700;
  padding-top: 10px;
}
.origin-price {
  margin-left: 5px;
  font-size: 14px;
  color: #b0b0b0;
}
.pro-title {
  line-height: 1;
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #212121;
}
.sale-desc {
  color: #b0b0b0;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 15px;
}
.image-box {
  left: 1px;
  width: 560px;
  margin-top: 0px;
}
.J-proName {
  font-size: 18px;
  font-weight: 400;
  line-height: 60px;
  color: #212121;
  float: left;
  padding-left: 20%;
}
.pro-choose-main {
  padding-bottom: 12px;
  position: relative;

  margin-left: auto;
  margin-right: auto;
}
.con {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.container {
  width: 1224px;
}
.pro-information {
  display: block;
}
.pro-information h3 {
  font-size: 22px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;
  padding: 1em 0;
}
.pro-book-flow {
  background: #f9f9fa;
  border: 1px solid #e3e3e3;
  height: 70px;
  text-align: left;
  margin-bottom: 50px;
}
.infor-con {
  padding-bottom: 50px;
  background: #f5f5f5;
}
.detail {
  width: 606px;
  float: right;
  margin-left: 12px;
  background: #fff;
  height: 600px;
}
.header {
  height: 60px;
  border: 1px solid #e0e0e0;
}
.lunbo {
  position: relative;
  float: left;
  height: 600px;
  margin-left: 0;
  width: 606px;
  background: #fff;
  min-height: 1px;
}
.xm-boybox {
  padding-top: 10px;
  padding-bottom: 50px;
  background: #f5f5f5;
  height: 610px;
  width: 1226px;
  padding-left: 10%;
}
.body {
  padding-bottom: 50px;
}
.section-info {
  position: relative;
  width: 100%;
  padding-left: 10%;
}
.img {
  padding-left: 10%;
}
</style>
