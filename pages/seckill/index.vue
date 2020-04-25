<template>
  <div class="seckill">
    <div class="seckill-head">
      <h1>舵手秒杀</h1>
    </div>
    <div class="container J_seckill">
      <div class="seckill-banner J_seckillBannerWrap">
        <div class="container J_seckillBanner relative">
          <ul>
            <li
              class="J_currentBanner"
              :class="{'active': activeBanner(index)}"
              v-for="(item, index) in list"
              :key="index"
              @click="switchBanner(index)"
            >
              <a href="#">
                <em>{{parsePlay(item.startTime)}}</em>
                <span>
                  {{playStatus(item.startTime, item.endTime)}}
                  <br/>
                  <em v-if="index === 0">{{desc + " " + hour +":" + minute + ":" + second}}</em>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="seckill-con">
        <div class="container J_seckillCon">
          <ul class="J_currentCon clearfix active">
            <li v-for="(item, index) in curSeckillCon" :key="index">
              <!-- 前往商品详情页 -->
              <a :href="'/goods/detail?gid='+item.sgid" class="item-box">
                <span class="img-con">
                  <img :src="item.imgUrl" class="done"/>
                </span>
                <span class="pro-con">
                  <span class="name" :title="item.goods_name">{{item.goods_name}}</span>
                  <span class="desc">{{item.desc}}</span>
                  <span class="process J_process" :class="{'hide': !isLogin}">
                    <span :style="curProgress(item.count, item.remain_count)"></span>
                    <em>{{Math.floor(((item.count-item.remain_count)/item.count) * 100) }}%</em>
                  </span>
                  <span class="price">
                    {{item.seckill_price}}元
                    <del>{{item.goods_price}}元</del>
                  </span>
                  <span class="btn btn-green btn-small btn-primary J_buy" v-if="isLogin">立即抢购</span>
                  <span class="btn btn-green btn-small btn-primary" v-else>登陆后抢购</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {seckillList} from '@/api/seckill'
  import {parsePlay as pp, timeDiff as td} from '@/utils/date'

  export default {
    head() {
      return {
        title: '舵手商城 - 秒杀商品',
        meta: [
          {hid: 'seckill-page', name: 'description', content: '秒杀商品'}
        ]
      }
    },
    data() {
      return {
        list: [], // 所有场次秒杀商品列表
        curList: [], // 最近一次秒杀商品列表
        second: '00',
        minute: '00',
        hour: '00',
        desc: '加载中', // 最近一场描述信息
        start_time: '', // 最近一场开始时间
        end_time: '', // 最近一场结束时间
        activeIndex: 0, // 激活的Tab下标
        isActive: false, // Tab是否active
      }
    },
    created: function () {
      this.getSeckillList()
    },
    methods: {
      // 获取秒杀商品列表
      getSeckillList() {
        seckillList().then(res => {
          this.list = res.data
          if (this.list.length !== 0 && this.list !== null) {
            this.start_time = this.list[0].startTime
            this.end_time = this.list[0].endTime
            this.countdown()
          }
        })
      },
      // 倒计时
      countdown() {
        let now = null
        let start_time = new Date(this.start_time)
        let end_time = new Date(this.end_time)
        let task = setInterval(_ => {
          now = new Date()
          // 如果当前时间小于开始时间
          if (now < start_time) {
            this.desc = '距开始'
            this.timeDiff(now, start_time)
          } else if (now < end_time) {
            this.desc = '距结束'
            this.timeDiff(now, end_time)
          } else {
            this.desc = '' // 已结束
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
      // 获取当前展示的秒杀商品列表
      getCurList(index) {
        if (this.list.length !== 0)
          this.curList = this.list[index].seckillGoodsList
      },
      parsePlay: start_time => {
        return pp(start_time)
      },
      switchBanner(index) {
        this.activeIndex = index
      },
      // 秒杀活动场次状态
      playStatus: (start_time, end_time) => {
        let now = new Date();
        // 今天的23:59:59
        let now_end = new Date();
        now_end.setHours(23, 59, 59)
        // 明天的23:59:59
        let tomorrow = new Date(now.getTime() + (24 * 60 * 60 * 1000))
        let start = new Date(start_time)
        let end = new Date(end_time)
        if (now < start) {
          if (start > tomorrow) {
            return "耐心等待"
          } else if (start > now_end) {
            return "明日开始"
          }
          return "即将开始"
        } else if (now < end) {
          return "抢购中"
        }
        return "已结束"
      },
      activeBanner(index) {
        return this.activeIndex === index
      },
      curProgress: (count, remain_count) => {
        return "width:" + Math.floor((((count - remain_count) / count)) * 100) + "%"
      }
    },
    computed: {
      curSeckillCon: function () {
        this.getCurList(this.activeIndex)
        return this.curList
      },
      btnStatus: function () {
        let now = new Date()
        if (this.start_time > now || this.end_time < now)
          return true // 禁用
        return false
      },
      isLogin: function () {
        const token = this.$store.state.user.token
        if (token === null || token === '' || token === undefined)
          return false
        return true
      }
    }
  }
</script>

<style scoped>
  .seckill {
    background: #f5f5f5;
  }

  .seckill .seckill-head {
    background: #f5f5f5 url("/img/小米秒杀.jpg") 50% 0 no-repeat;
    height: 170px;
  }

  .seckill h1 {
    text-indent: -9999px;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  }

  .container:before,
  .container:after {
    content: " ";
    display: table;
  }

  .container:after {
    clear: both;
  }

  .seckill .seckill-banner {
    background: #414141;
    margin-top: -68px;
    height: 68px;
    margin-bottom: 22px;
  }

  .seckill .relative {
    position: relative;
  }

  .seckill .seckill-banner ul {
    width: 100%;
    overflow: hidden;
    height: 68px;
    background: #414141;
  }

  .seckill ul,
  .seckill p {
    margin: 0;
    padding: 0;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .seckill .seckill-banner .active {
    background: #f1393a;
  }

  .seckill .seckill-banner li {
    width: 20%;
    cursor: pointer;
    line-height: 68px;
    height: 68px;
    text-align: center;
  }

  .seckill li {
    list-style: none;
    float: left;
  }

  li {
    display: list-item;
  }

  .seckill .seckill-banner li a {
    color: #fff;
    text-decoration: none;
  }

  .seckill .seckill-banner li em {
    display: inline-block;
    *zoom: 1;
    *display: inline;
    margin-left: 30px;
    font-style: normal;
    font-size: 18px;
    line-height: 1;
    vertical-align: middle;
  }

  .seckill .seckill-banner li span {
    display: inline-block;
    margin-left: 15px;
    text-align: left;
    line-height: 20px;
    vertical-align: middle;
  }

  .seckill .seckill-banner li span em {
    line-height: 20px;
    text-align: left;
    display: inline-block;
    font-style: normal;
    margin-left: 0;
    font-size: 14px;
    vertical-align: middle;
  }

  .seckill .seckill-con ul.active {
    display: block;
  }

  .seckill .seckill-con ul {
    display: none;
    margin-left: -13px;
  }

  .seckill ul,
  .seckill p {
    margin: 0;
    padding: 0;
  }

  .seckill .seckill-con ul li {
    background: #fff;
    width: 400px;
    height: 190px;
    margin-left: 13px;
    margin-bottom: 13px;
    transition: all 0.2s linear;
    position: relative;
    z-index: 2;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .seckill li {
    list-style: none;
    float: left;
  }

  .seckill .seckill-con ul .item-box {
    display: block;
  }

  .seckill .seckill-con ul li a {
    color: #757575;
    text-decoration: none;
    cursor: pointer;
  }

  /* .seckill .seckill-con ul li:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    margin-top: -1px;
  } */
  .seckill .seckill-con ul li .img-con {
    width: 190px;
    height: 190px;
    float: left;
    margin-left: 0px !important;
    padding-top: 0px !important;
    background-color: #e9e9e9;
    border: 0 none;
    overflow: hidden;
  }

  .seckill .seckill-con ul li span {
    display: block;
  }

  .seckill .seckill-con ul li img {
    width: 100%;
    height: 190px;
    display: block;
    padding: 0;
    border-style: none;
  }

  img {
    border: 0;
  }

  .seckill .seckill-con ul li .pro-con {
    margin-left: 210px;
    width: 180px;
    padding-top: 30px;
  }

  .seckill .seckill-con ul li span {
    display: block;
  }

  .seckill .seckill-con ul li .pro-con .name {
    font-size: 16px;
    color: #333;
    height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    line-height: 16px;
  }

  .seckill .seckill-con ul li .pro-con .desc {
    color: rgba(0, 0, 0, 0.54);
    margin-top: 7px;
    font-size: 12px;
    line-height: 16px;
    height: 32px;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .seckill .seckill-con ul li .pro-con .process {
    width: 146px;
    height: 5px;
    margin-top: 10px;
    position: relative;
    background: #f5f5f5;
  }

  .hide {
    display: none !important;
  }

  .seckill .seckill-con ul li .pro-con .process span {
    display: block;
    background: #f1393a;
    transition: width 1s;
    height: 100%;
  }

  .seckill .seckill-con ul li .pro-con .process em {
    font-style: normal;
    position: absolute;
    right: -35px;
    top: -2px;
    line-height: 1;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
  }

  .seckill .seckill-con ul li .pro-con .price {
    font-size: 16px;
    color: #f1393a;
    line-height: 1;
    margin-top: 14px;
  }

  .seckill .seckill-con ul li span {
    display: block;
  }

  .seckill .seckill-con ul li .pro-con .price del {
    margin-left: 10px;
    font-size: 12px;
  }

  .seckill .seckill-con ul li .pro-con .price em,
  .seckill .seckill-con ul li .pro-con .price del {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    font-style: normal;
  }

  del {
    text-decoration: line-through;
  }

  .seckill .seckill-con ul li .pro-con .btn-primary {
    background: #f1393a !important;
    border-color: #f1393a !important;
  }

  .seckill .seckill-con ul li .pro-con .btn {
    margin-top: 19px;
    font-size: 14px;
  }

  .seckill .seckill-con ul li span {
    display: block;
  }

  .btn {
    display: inline-block;
    *zoom: 1;
    *display: inline;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }

  .btn-green {
    background: #83c44e;
    border-color: #83c44e;
    color: #fff;
  }

  .btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
  }

  .btn-small {
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
  }
</style>
