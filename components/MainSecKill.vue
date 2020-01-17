<template>
  <div class="seckill-goods">
    <h2>舵手秒杀</h2>
    <div class="goods-container">
      <div class="goods-item" v-for="(item,index) in seckillGoods" :key="index">
        <!-- 商品id:item.goods_id -->
        <a href="#">
          <img :src="item.imgUrl" alt />
          <p class="title">{{item.goods_name}}</p>
        </a>
        <p class="text">{{item.desc}}</p>
        <p class="price">{{item.goods_price}}元</p>
      </div>
    </div>
  </div>
</template>

<script>
import { slide } from '@/api/seckill'
export default {
  created() {
    this.getSlide()
  },
  data() {
    return {
      time_id: 0,
      start_time: 0,
      end_time: 0,
      seckillGoods: []
    }
  },
  methods: {
    getSlide() {
      slide().then(res => {
        // 根据返回的状态码获取状态对象
        let result = this.$resultCode.getStatus(res.code)
        // 把返回的数据赋值给data()中定义好的变量
        this.time_id = res.data.time_id
        this.start_time = res.data.start_time
        this.end_time = res.data.end_time
        this.seckillGoods = res.data.list
        // 根据状态对象显示响应的提示信息
        if (res.message !== "" && res.message !== null) {
          Message({
            message: res.message,
            type: result.type
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.seckill-goods {
  width: 1226px;
  margin: 0 auto;
  margin-top: 26px;
  h2 {
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .goods-container {
    height: 340px;
    width: 1226px;
    display: flex;
    justify-content: space-between;
    .goods-item {
      width: 234px;
      height: 300px;
      background: #fafafa;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: all 0.2s linear;
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        margin-top: -1px;
      }
      &:nth-child(1) {
        border-top: 1px solid #ffac13;
      }
      &:nth-child(2) {
        border-top: 1px solid #83c44e;
      }
      &:nth-child(3) {
        border-top: 1px solid #2196f3;
      }
      &:nth-child(4) {
        border-top: 1px solid #e53935;
      }
      &:nth-child(5) {
        border-top: 1px solid #00c0a5;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        img {
          width: 160px;
          height: 160px;
        }
      }
      .text {
        color: #b0b0b0;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .price {
        color: #ff6709;
        font-size: 14px;
      }
    }
  }
}
</style>


