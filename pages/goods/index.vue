<template>
  <div class="goodsList">
    <div class="breadcrumbs">
      <div class="container">
        <a href="/">首页</a>
        <span class="sep">&gt;</span>
        <a href="#">全部结果</a>
      </div>
    </div>

    <div class="search-filter">
      <div class="filter-wrap" style="display: block;">
        <div class="filter-list" id="J_filterList">
          <ul class="item show-less" id="list_item_class">
            <span class="label">分类：</span>
            <li :class="{'active': activeIndex === -1}">
              <a class="product-type-item" @click="switchTab(-1)">全部</a>
            </li>
            <li :class="{'active': activeTab(index)}" v-for="(nav, index) in navs" :key="index">
              <a class="product-type-item" @click="switchTab(index)">{{nav.name}}</a>
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
            <li :class="{'active': orderby == 'default'}">
              <a class="goods-order-item" rel="nofollow" @click="switchSort('default')">综合</a>
            </li>
            <li :class="{'active': orderby == 'salecount'}">
              <a class="goods-order-item" rel="nofollow" @click="switchSort('salecount')">
                销量
                <i class="iconfont">↓</i>
              </a>
            </li>
            <li :class="{'active': orderby == 'price'}">
              <a class="goods-order-item" rel="nofollow" @click="switchSort('price')">
                价格
                <i class="iconfont">↓</i>
              </a>
            </li>
          </ul>
          <label class="search-box">
            <input
              type="text"
              placeholder="搜索商品"
              class="search"
              style="height: 30px;"
              v-model="keyword"
              v-on:keyup.13="searchGoods"
            />
            <i slot="suffix" class="el-icon-search icon-search" @click="searchGoods"></i>
          </label>
        </div>

        <div class="goods-list-box">
          <div class="goods-list clearfix" id="J_goodsList">
            <div class="goods-item" v-for="(item, index) in onePageTableData" :key="index">
              <div class="figure figure-img">
                <!-- 商品详情 -->
                <a target="_blank" :href="'/goods/detail?gid='+item.gid">
                  <img :src="item.imgUrl" width="200" height="200" alt />
                </a>
              </div>
              <h2 class="title">
                <a target="_blank" :href="'/goods/detail?gid='+item.gid">{{item.goods_name}}</a>
              </h2>
              <p class="price">{{item.goods_price}}元</p>
            </div>
          </div>
        </div>
        <!-- hide-on-single-page="true" -->
        <!-- @current-change="handlecurrentchange"
          @prev-click="handlepreclick"
        @next-click="handlenextclick"-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="pageTotal"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { getNavItems } from '@/api/menu'
import { getGoodsListByKw } from '@/api/goods'
export default {
  name: 'goods-list',
  layout: 'goodslist',
  created() {
    this.navItems()
    this.getGoodsListByKw()
  },
  data() {
    return {
      navs: [],
      activeIndex: '',
      keyword: '',
      orderby: 'default',
      type: this.$route.query.type,
      goodsItems: [],
      pageSize: 8,
      pageTotal: 0,
      currentPage: 1
    }
  },
  methods: {
    navItems() {
      getNavItems().then(res => {
        this.navs = res.data
        this.setInitActiveIndex(this.$route.query.type)
      })
    },
    getGoodsListByKw() {
      let params = { 'type': this.type, 'orderby': this.orderby, 'keyword': this.keyword }
      getGoodsListByKw(params).then(res => {
        this.goodsItems = res.data
        this.pageTotal = this.goodsItems.length
      })
    },
    setInitActiveIndex(type_en) {
      for (let i = 0; i < this.navs.length; i++) {
        if (this.navs[i].type === type_en) {
          this.switchTab(i)
        }
      }
    },
    activeTab(index) {
      return this.activeIndex === index
    },
    switchTab(index) {
      this.activeIndex = index
      if (index !== -1) {
        this.type = this.navs[index].type
      } else {
        this.type = 'all'
      }
      // 切换Tab时重新请求新的商品列表
      this.getGoodsListByKw()
    },
    switchSort(sort) {
      this.orderby = sort
      this.getGoodsListByKw()
    },
    handleSizeChange(size) {
      this.currentPage = size
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    },
    searchGoods() {
      this.getGoodsListByKw()
    }
  },
  computed: {
    onePageTableData: function () {
      if (this.goodsItems != null)
        return this.goodsItems.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      return null;
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
  /* width: 230px; */
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
  margin: auto;
  position: absolute;
  bottom: -400px;
  left: 540px;
}
.search-box {
  border-color: transparent;
  border: 0;
  float: right;
  margin-top: -12px;
}

.icon-search {
  margin-top: 13px;
  margin-right: 5px;
  left: -28px;
  position: relative;
  cursor: pointer;
}

.search {
  margin: 0;
  margin-top: 13px;
  color: #757575;
  width: 200px;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  padding-right: 30px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 10pt;
}

.search::-webkit-input-placeholder {
  color: #c2c2c2;
}

.search:hover {
  border-color: #b0b0b0;
}

.search:focus {
  border-color: #ff6700;
}
</style>