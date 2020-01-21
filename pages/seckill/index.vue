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
    </div>
  </div>
</template>

<script>
export default {

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
</style>