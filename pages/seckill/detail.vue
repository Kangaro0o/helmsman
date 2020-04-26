<template>
  <div class="body">
    <div class="header">
      <h2 class="J-proName">{{secKillGoods.name}}</h2>
    </div>
    <div class="pro-choose-main">
      <div class="xm-boybox">
        <div class="lunbo">
          <div class="image-box">
            <el-carousel
              height="560px"
              trigger="click"
              arrow="always"
              indicator-position="outside"
              v-if="imagelist"
            >
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
            >{{secKillGoods.name}}</h1>
            <p
              class="sale-desc"
              style="“padding-top:10px;padding-bottom:15px;"
            >{{secKillGoods.description}}</p>
            <div class="pro-time J_proSeckill">
              <div class="pro-time-head">
                <em class="seckill-icon"></em>
                <i>秒杀</i>
                <span
                  class="time J_seckillTime"
                >{{this.desc}} {{this.hour}} 时 {{this.minute}} 分 {{this.second}} 秒</span>
              </div>
              <div class="pro-time-con">
                <span class="pro-time-price">
                  ￥
                  <em class="J_seckillPrice">{{secKillGoods.secKillPrice}}</em>
                  <del>
                    ￥
                    <em class="J_seckillPriceDel">{{secKillGoods.price}}</em>
                  </del>
                </span>
              </div>
            </div>
          </div>
          <div class="pro-list">
            选择购买数量
            <el-input-number v-model="num" :min="0" :max="1"></el-input-number>
            <span class="total-price">
              总计
              <font>{{getSecKillGoodsTotalPrice}}</font>元
            </span>
          </div>
          <ul class="btn-warp">
            <li>
              <a href="javascript:void(0);" @click="addCart">
                <span class="btn-primary">加入购物车</span>
              </a>
              <!-- </router-link> -->
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
import { getSeckillGoods } from '@/api/seckill'
import { timeDiff as td } from '@/utils/date'
import { saveToCart } from '@/api/order'
export default {
  layout: "secKillGoodsDetail",
  mounted() {
    this.getSecKillGoodsInfo()
  },
  data() {
    return {
      tipsImg: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg",
      num: 1,
      imagelist: [],
      secKillGoods: '',
      second: '00',
      minute: '00',
      hour: '00',
      desc: '正在加载中'
    }
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
        'id': this.secKillGoods.sgid,
        'num': this.num,
        'price': this.secKillGoods.secKillPrice,
        'name': this.secKillGoods.name,
        'image': this.secKillGoods.image,
        'isSecKill': true
      }
      saveToCart(info)
      this.$router.push({ path: '/buy/successTip' })
    },
    getSecKillGoodsInfo() {
      getSeckillGoods(this.$route.query.sgid).then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = this.$resultCode.getSuccessStatus()
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return
        }
        this.secKillGoods = res.data
        this.imagelist[0] = this.secKillGoods.image
        this.countdown()
      })
    },
    countdown() {
      let now = null
      let start_time = new Date(this.secKillGoods.startTime)
      let end_time = new Date(this.secKillGoods.endTime)
      console.log(start_time)
      console.log(end_time)
      let task = setInterval(_ => {
        now = new Date()
        // 如果当前时间小于开始时间
        if (now < start_time) {
          this.desc = '距离开始还有'
          this.timeDiff(now, start_time)
        } else if (now < end_time) {
          this.desc = '距离结束还有'
          this.timeDiff(now, end_time)
        } else {
          this.desc = '本场已经结束'
          this.hour = '00'
          this.minute = '00'
          this.second = '00'
          clearInterval(task)
        }
      }, 1000)
    },
    timeDiff(start, end) { // start和end是Date对象
      const res = td(start, end)
      this.hour = res['hour']
      this.minute = res['minute']
      this.second = res['second']
    },
  },
  computed: {
    getSecKillGoodsTotalPrice() {
      return this.secKillGoods.secKillPrice * this.num
    }
  }
}
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
  padding-top: 50px;
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

.pro-time {
  margin-top: -1px;
  position: relative;
}

.pro-time .pro-time-head {
  color: #fff;
  background: #ff6700;
  padding: 10px;
  text-indent: 10px;
  min-height: 22px;
}

.pro-time .seckill-icon {
  display: inline-block;
  *zoom: 1;
  *display: inline;
  width: 12px;
  height: 22px;
  margin-right: 10px;
  vertical-align: middle;
  margin-top: -2px;
  background: url(//i1.mifile.cn/f/i/2018/seckill/seckill-icon.png) 50% 0
    no-repeat;
}

em {
  font-style: italic;
}

.pro-time .pro-time-head i {
  font-style: normal;
}

.pro-time .pro-time-head .time {
  float: right;
}

.pro-time .pro-time-con {
  background: #f9f9fa;
  height: 50px;
  line-height: 50px;
  text-indent: 20px;
}

.pro-time .pro-time-con .pro-time-price {
  color: #ff6700;
  margin-left: 15px;
}

.pro-time .pro-time-con .pro-time-price em {
  font-style: normal;
  font-size: 24px;
}

.pro-time .pro-time-con .pro-time-price del {
  margin-left: 20px;
  font-size: 16px;
  color: #999999;
}

.pro-time .pro-time-con .pro-time-price del {
  margin-left: 20px;
  font-size: 16px;
  color: #999999;
}

del {
  text-decoration: line-through;
}

.pro-time .pro-time-con .pro-time-price del em {
  font-size: 16px;
}
</style>
