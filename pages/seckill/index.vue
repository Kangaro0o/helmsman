<template>
  <div class="seckill">
    <div class="seckill-head">
      <h1>舵手秒杀</h1>
    </div>
    <div class="container J_seckill">
      <div class="seckill-banner J_seckillBannerWrap">
        <div class="container J_seckillBanner relative">
          <ul>
            <li class="J_currentBanner active">
              <a href="#">
                <em>14:00</em>
                <span>
                  抢购中
                  <br />距结束05:10:46
                </span>
              </a>
            </li>
            <li class>
              <a href="#">
                <em>20:00</em>
                <span>即将开始</span>
              </a>
            </li>
            <li class>
              <a href="#">
                <em>22:00</em>
                <span>即将开始</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="seckill-con">
        <div class="container J_seckillCon">
          <ul class="J_currentCon clearfix active">
            <li>
              <a href="#" class="item-box">
                <span class="img-con">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
                    class="done"
                  />
                </span>
                <span class="pro-con">
                  <span class="name" title>MIJOY 抽纸青春版 24包/箱</span>
                  <span class="desc">精选原生竹浆，健康环保</span>
                  <span class="process hide J_process">
                    <span style="width: 50%"></span>
                    <em>50%</em>
                  </span>
                  <span class="price">
                    27.90元
                    <del>32.9元</del>
                  </span>
                  <span class="btn btn-green btn-small btn-primary">登陆后抢购</span>
                  <!-- <span class="btn btn-green btn-small btn-primary J_buy">立即抢购</span> -->
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="item-box">
                <span class="img-con">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
                    class="done"
                  />
                </span>
                <span class="pro-con">
                  <span class="name" title>MIJOY 抽纸青春版 24包/箱</span>
                  <span class="desc">精选原生竹浆，健康环保</span>
                  <span class="process hide J_process">
                    <span style="width: 50%"></span>
                    <em>50%</em>
                  </span>
                  <span class="price">
                    27.90元
                    <del>32.9元</del>
                  </span>
                  <span class="btn btn-green btn-small btn-primary">登陆后抢购</span>
                  <!-- <span class="btn btn-green btn-small btn-primary J_buy">立即抢购</span> -->
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="item-box">
                <span class="img-con">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
                    class="done"
                  />
                </span>
                <span class="pro-con">
                  <span class="name" title>MIJOY 抽纸青春版 24包/箱</span>
                  <span class="desc">精选原生竹浆，健康环保</span>
                  <span class="process hide J_process">
                    <span style="width: 50%"></span>
                    <em>50%</em>
                  </span>
                  <span class="price">
                    27.90元
                    <del>32.9元</del>
                  </span>
                  <span class="btn btn-green btn-small btn-primary">登陆后抢购</span>
                  <!-- <span class="btn btn-green btn-small btn-primary J_buy">立即抢购</span> -->
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="item-box">
                <span class="img-con">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
                    class="done"
                  />
                </span>
                <span class="pro-con">
                  <span class="name" title>MIJOY 抽纸青春版 24包/箱</span>
                  <span class="desc">精选原生竹浆，健康环保</span>
                  <span class="process hide J_process">
                    <span style="width: 50%"></span>
                    <em>50%</em>
                  </span>
                  <span class="price">
                    27.90元
                    <del>32.9元</del>
                  </span>
                  <span class="btn btn-green btn-small btn-primary">登陆后抢购</span>
                  <!-- <span class="btn btn-green btn-small btn-primary J_buy">立即抢购</span> -->
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="item-box">
                <span class="img-con">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
                    class="done"
                  />
                </span>
                <span class="pro-con">
                  <span class="name" title>MIJOY 抽纸青春版 24包/箱</span>
                  <span class="desc">精选原生竹浆，健康环保</span>
                  <span class="process hide J_process">
                    <span style="width: 50%"></span>
                    <em>50%</em>
                  </span>
                  <span class="price">
                    27.90元
                    <del>32.9元</del>
                  </span>
                  <span class="btn btn-green btn-small btn-primary">登陆后抢购</span>
                  <!-- <span class="btn btn-green btn-small btn-primary J_buy">立即抢购</span> -->
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
export default {
  head() {
    return {
      title: '舵手商城 - 秒杀商品',
      meta: [
        { hid: 'seckill-page', name: 'description', content: '秒杀商品' }
      ]
    }
  }
}
</script>

<style>
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