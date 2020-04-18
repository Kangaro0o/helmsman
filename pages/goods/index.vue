<template>
  <div class="goodsList">
    <div class="breadcrumbs">
      <div class="container">
        <a href="//www.mi.com/index.html" data-stat-id="b67dea7347d3b7fc">首页</a>
        <span class="sep">&gt;</span>
        <a href="//search.mi.com/search_保护壳" data-stat-id="a44441c01531f404">全部结果</a>
        <span class="sep">&gt;</span>
        <span>保护壳</span>
      </div>
    </div>

    <div class="search-filter">
      <div class="filter-wrap" style="display: block;">
        <div class="filter-list" id="J_filterList">
          <ul class="item show-less" id="list_item_class">
            <span class="label">分类：</span>
            <li class="active">
              <a class="product-type-item">全部</a>
            </li>
            <li class>
              <a class="product-type-item">手机配件</a>
            </li>
            <li class>
              <a class="product-type-item">手机保护壳</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="search-reuslt">
      <div class="reuslt-order">
        <!-- 搜索结果列表过滤 -->
        <div class="order-list-box clearfix">
          <ul class="order-list" id="J_orderList">
            <li class="active">
              <a class="goods-order-item" rel="nofollow">综合</a>
            </li>
            <li class>
              <a class="goods-order-item" rel="nofollow">新品</a>
            </li>
            <li class>
              <a class="goods-order-item" rel="nofollow">销量</a>
            </li>
            <li class>
              <a class="goods-order-item" rel="nofollow">
                价格
                <i class="iconfont">↑</i>
              </a>
            </li>
          </ul>
        </div>

        <div class="goods-list-box">
          <div class="goods-list clearfix" id="J_goodsList">
            <div class="goods-item" v-for="(item, index) in 10" :key="index">
              <div class="figure figure-img">
                <a
                  data-log_code="pc_search_0_0#seid=21:0:0:0:0:0:0:0:0:0&amp;page=pc_search&amp;pid=11645&amp;keyword=保护壳&amp;search_word=%!(EXTRA string=保护壳)"
                  target="_blank"
                  href="//item.mi.com/1200900023.html?cfrom=search"
                >
                  <img
                    src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583054172.3762992.jpg"
                    width="200"
                    height="200"
                    alt
                  />
                </a>
              </div>
              <h2 class="title">
                <a
                  target="_blank"
                  href="//item.mi.com/1200900023.html?cfrom=search"
                >黑鲨游戏手机 3 全包保护壳 黑色</a>
              </h2>
              <p class="price">59元</p>
            </div>
          </div>
        </div>
        <el-pagination
          background
          hide-on-single-page="true"
          layout="prev, pager, next"
          :total="20"
          :page-size="pagesize"
          :current-page="pagenum"
          @current-change="handlecurrentchange"
          @prev-click="handlepreclick"
          @next-click="handlenextclick"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'goodslist',
  data() {
    return {
      goodsItems: [],

    }
  }

}
</script>
<style scoped>
.breadcrumbs {
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5;
  color: #616161;
}
.container {
  width: 1226px;
  *zoom: 1;
  margin-right: auto;
  margin-left: auto;
}
.container:before,
.container:after {
  content: " ";
  display: table;
}
.breadcrumbs a {
  color: #757575;
}
a {
  cursor: pointer;
  color: #757575;
  text-decoration: none;
}
.breadcrumbs .sep {
  margin: 0 0.5em;
  color: #b0b0b0;
}
.sep,
.ndash {
  margin: 0 0.25em;
  font-family: sans-serif;
}
.search-filter {
  background: #fff;
}
.search-filter .filter-wrap {
  margin: auto;
  width: 1226px;
  padding: 18px 0;
  display: none;
}
.search-filter .filter-list {
  position: relative;
}
div {
  display: block;
}
.search-filter .filter-list .item:first-child {
  border-top: none;
}
.search-filter .filter-list .item.show-less {
  height: 48px;
}
.search-filter .filter-list .item {
  position: relative;
  overflow: hidden;
  padding: 0 60px 0 124px;
  margin: 0;
  list-style: none;
  font-size: 0;
}
.search-filter .filter-list .label {
  top: 0;
  left: 0;
  color: #b0b0b0;
}
.search-filter .filter-list .label,
.search-filter .filter-list .more-btn {
  position: absolute;
  height: 20px;
  line-height: 20px;
  padding: 14px 0;
  font-size: 14px;
}
.search-filter .filter-list .item li {
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #424242;
  font-size: 14px;
  width: 148px;
  padding: 14px 0;
  height: 20px;
  line-height: 20px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.search-filter .filter-list .item .active a {
  color: #f60;
}
.search-reuslt {
  /* padding: 20px 0 2250px; */
  padding: auto;
  background: #f5f5f5;
}
.reuslt-order {
  padding-top: 25px;
  width: 1226px;
  position: relative;
  margin: 0 auto;
  font-size: 1.2em;
}
.reuslt-order .order-list-box {
  height: 50px;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.reuslt-order .order-list-box .order-list,
.reuslt-order .order-list-box .type-list {
  height: 30px;
  line-height: 30px;
}
.order-list-box .order-list {
  float: left;
  height: 20px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
menu,
ol,
ul {
  padding: 0 0 0 40px;
}
dl,
menu,
ol,
ul {
  margin: 1em 0;
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
.reuslt-order .order-list-box .order-list li:first-child {
  border-left: none;
}
.order-list-box .order-list li {
  float: left;
  padding: 0 30px;
  border-left: 1px solid #e0e0e0;
  line-height: 20px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.order-list-box .order-list li.active a {
  color: #ff6700;
}
.order-list-box .order-list li a {
  color: #424242;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}
a {
  cursor: pointer;
}
a {
  color: #757575;
  text-decoration: none;
}
.goods-list-box {
  width: 1226px;
  /* background-color: #757575; */
}
.goods-list {
  width: 1240px;
  margin: 0;
  list-style-type: none;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.goods-item {
  position: relative;
  float: left;
  width: 296px;
  height: 318px;
  padding-top: 47px;
  margin-right: 14px;
  margin-bottom: 14px;
  text-align: center;
  background: #fff;
  transition: box-shadow 0.5s linear;
}
.goods-item .figure-img {
  width: 200px;
  height: 200px;
  margin: 0 auto 16px;
}
.goods-item .figure-img a {
  display: block;
}
.goods-item .figure-img img {
  width: 200px;
  height: 200px;
}
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}
.goods-item .title {
  margin: 0 auto;
  width: 230px;
}
.goods-item .title {
  margin: 0 0 3px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  _zoom: 1;
}
h2 {
  font-size: 1.5em;
  margin: 0.83em 0;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.goods-item .title a {
  color: #424242;
}
.goods-item .price {
  margin: 0 0 15px;
  color: #ff6700;
}
p,
pre {
  margin: 1em 0;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.el-pagination {
  float: left;
  padding-left: 500px;
  margin-bottom: 100px;
}
</style>