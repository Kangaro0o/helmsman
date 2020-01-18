<template>
  <div class="seckill-goods">
    <h2>舵手秒杀</h2>
    <div class="goods-container">
      <div class="flashsale-countdown">
        <div class="round">14:00 场</div>
        <img
          src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
          alt
        />
        <div class="desc" :show="false"></div>
        <div ckass="countdown clearfix">
          <span>00</span>
          <i>:</i>
          <span>00</span>
          <i>:</i>
          <span>00</span>
        </div>
      </div>
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


