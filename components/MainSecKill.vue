<template>
  <div class="seckill-goods">
    <div class="box-hd">
      <h2>舵手秒杀</h2>
      <div class="more">
        <a href="/seckill" target="_blank" class="more-link">
          查看全部
          <i class="el-icon-caret-right"></i>
        </a>
      </div>
    </div>
    <div class="goods-container">
      <div class="flashsale-countdown">
        <div class="round">{{play}} 场</div>
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
          alt="小米闪购"
        />
        <div class="desc">{{desc}}</div>
        <div class="countdown clearfix">
          <span>{{hour}}</span>
          <i>:</i>
          <span>{{minute}}</span>
          <i>:</i>
          <span>{{second}}</span>
        </div>
      </div>
      <div class="goods-item" v-for="(item,index) in seckillGoods" :key="index">
        <a :href="item.goods_id">
          <img :src="item.imgUrl" alt />
          <p class="title">{{item.goods_name}}</p>
        </a>
        <p class="text">{{item.desc}}</p>
        <p class="price">
          <span>{{item.goods_price}}元</span>
          <del>{{item.seckill_price}}元</del>
        </p>
      </div>
    </div>
  </div>
</template>



<script>
import { slide } from '@/api/seckill'
import { timeDiff as td, parsePlay as pp } from '@/utils/date'
export default {
  created() {
    this.getSlideList()
  },
  data() {
    return {
      play: '',
      start_time: 0,
      end_time: 0,
      seckillGoods: [],
      second: '00',
      minute: '00',
      hour: '00',
      desc: '正在加载中'
    }
  },
  methods: {
    getSlideList() {
      slide().then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = this.$resultCode.getSuccessStatus()
        if (status !== success) {
          Message({
            message: res.message,
            type: status.type
          })
          return
        }
        this.time_id = res.data.time_id
        this.start_time = res.data.start_time
        this.end_time = res.data.end_time
        this.seckillGoods = res.data.list
        this.parsePlay(this.start_time)
        this.countdown()
      })
    },
    countdown() {
      let now = null
      let start_time = new Date(this.start_time)
      let end_time = new Date(this.end_time)
      setInterval(_ => {
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
        }
      }, 1000)

    },
    timeDiff(start, end) { // start和end是Date对象
      const res = td(start, end)
      this.hour = res['hour']
      this.minute = res['minute']
      this.second = res['second']
    },
    parsePlay(start_time) {
      this.play = pp(start_time)
    }
  }
}
</script>

<style lang="scss">
.seckill-goods {
  width: 1226px;
  margin: 0 auto;
  margin-top: 26px;
  .box-hd {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
    h2 {
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .more {
      position: absolute;
      top: 0;
      right: 0;
      a {
        color: #757575;
        background-color: rgba(0, 0, 0, 0);
        &:hover {
          text-decoration: none;
          color: #ef3a3b;
        }
        &:a:-webkit-any-link {
          color: -webkit-link;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .more-link {
        font-size: 16px;
        line-height: 58px;
        color: #424242;
        transition: all 0.4s;
      }
    }
  }
  .goods-container {
    height: 380px;
    width: 1226px;
    display: flex;
    justify-content: space-between;
    .flashsale-countdown {
      border-top-color: #e53935;
      width: 234px;
      height: 340px;
      border-top-width: 1px;
      border-top-style: solid;
      background: #f1eded;
      text-align: center;
      .round {
        font-size: 21px;
        color: #ef3a3b;
        padding-top: 54px;
      }
      img {
        margin: 25px auto;
        border: 0;
      }
      .desc {
        color: rgba(0, 0, 0, 0.54);
        font-size: 15px;
      }
      .countdown {
        width: 168px;
        margin: 28px auto 0;
        span {
          width: 46px;
          height: 46px;
          background: #605751;
          color: #fff;
          font-size: 24px;
          line-height: 46px;
          float: left;
        }
        i {
          width: 15px;
          float: left;
          height: 46px;
          line-height: 46px;
          color: #605751;
          font-size: 28px;
          font-style: normal;
        }
      }
    }
    .goods-item {
      width: 234px;
      height: 340px;
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
        del {
          color: #b0b0b0;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>


