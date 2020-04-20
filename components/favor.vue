<template>
  <div class="page">
    <div class="layout">
      <div class="ds-uc-box uc-main-box">
        <div class="uc-content-box portal-content-box">
          <div class="uc-context">
            <div class="box-hd">
              <h1 class="title">喜欢的商品</h1>
              <label class="search-box">
                <input
                  type="text"
                  placeholder="搜索商品"
                  class="search"
                  style="height: 30px;"
                  v-model="keyword"
                />
                <i slot="suffix" class="el-icon-search icon-search" @click="searchFavFun"></i>
              </label>
            </div>
            <div class="box-bd">
              <div class="ds-goods-list-wrap">
                <div>
                  <ul class="ds-goods-list clearfix">
                    <li class="ds-goods-item" v-for="(item, index) in list" :key="index">
                      <div class="figure figure-img">
                        <a :href="item.goods_id">
                          <img :src="item.imgUrl" />
                        </a>
                      </div>
                      <h3 class="title">
                        <a :href="item.goods_id">{{item.goods_name}}</a>
                      </h3>
                      <p class="price">
                        <span class="price_span">
                          <span class="price_span">{{item.goods_price}}元</span>
                          <del>{{item.seckill_price}}元</del>
                        </span>
                      </p>
                      <p class="rank">
                        <!---->
                      </p>
                      <div class="actions">
                        <a class="btn btn-small btn-line-gray" @click="delFavFun(item.fid)">删除</a>
                        <a :href="item.goods_id" class="btn btn-small btn-primary">查看详情</a>
                      </div>
                    </li>
                  </ul>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFav, delFav } from '@/api/favorite'
export default {
  data() {
    return {
      list: [],
      keyword: ''  //需要删掉
    }
  },

  created() {
    this.FavList();
  },

  methods: {
    FavList() {
      getFav(this.keyword).then(res => {
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return;
        }
        this.list = res.data;
      });
    },
    searchFavFun(ev) {
      if (this.keyword) {
        getFav(keyword).then(res => {
          let status = this.$resultCode.getStatus(res.code);
          let success = this.$resultCode.getSuccessStatus();
          if (status !== success) {
            this.$message({
              message: res.message,
              type: status.type
            });
            return;
          }
          this.$message({
            message: res.message,
            type: status.type
          });
          this.list = res.data;
        });
      }
    },
    delFavFun(fid) {
      delFav(fid).then(res => {
        let status = this.$resultCode.getStatus(res.code);
        this.$message({
          message: res.message,
          type: status.type
        });
        this.$router.go(0);
      });

    }
  }
};
</script>

<style scoped>
.page {
  font: 14px / 1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333;
  width: 1250px;
  margin: 0 auto;
}

.layout {
  width: 1250px;
  min-height: 700px;
}

span {
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

del {
  margin-left: 10px;
  color: #b0b0b0;
}

.ds-uc-box {
  background: #fff;
  margin: 0 auto;
  margin-left: 30px;
}

.ds-uc-box .box-hd .title {
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  line-height: 68px;
  color: #757575;
  display: inline-block;
}

.ds-uc-box .box-hd .search-box {
  border-color: transparent;
  border: 0;
  float: right;
}

.ds-uc-box .box-hd .icon-search {
  margin-top: 13px;
  margin-right: 5px;
  left: -28px;
  position: relative;
  cursor: pointer;
}

.ds-uc-box .box-hd .search {
  margin: 0;
  margin-top: 23px;
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

.ds-uc-box .box-hd .search::-webkit-input-placeholder {
  color: #c2c2c2;
}

.ds-uc-box .box-hd .search:focus {
  border-color: #b0b0b0;
}

.ds-uc-box .box-hd .search:hover {
  border-color: #b0b0b0;
}

.ds-goods-list-wrap {
  width: 1250px;
  overflow: hidden;
}

.ds-goods-list {
  width: 1240px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.ds-goods-item {
  float: left;
  width: 258px;
  height: 348px;
  padding-top: 40px;
  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
}

.ds-goods-item .figure-img {
  width: 200px;
  margin: 0 auto 10px;
}

.ds-goods-item .figure-img img {
  width: 200px;
  height: 200px;
}

.ds-goods-item .title,
.xm-goods-item .title a {
  color: #333;
  margin: 0 0 5px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ds-goods-item .title,
.ds-goods-item .title a {
  color: #333;
}

.ds-goods-item .price_span {
  margin: 0 auto;
  float: none;
}

.ds-goods-item .price {
  margin: 0 0 10px;
  color: #ff6700;
}

.ds-goods-item .rank {
  height: 18px;
  margin: 0 0 8px;
  font-size: 12px;
  color: #b0b0b0;
}

.ds-goods-item .actions {
  visibility: hidden;
  opacity: 0;
  font-size: 0;
  transition: opacity 0.4s;
}

.ds-goods-item:hover .actions {
  visibility: visible;
  opacity: 100;
  font-size: 0;
  transition: opacity 0.4s;
}

.ds-goods-item .actions .btn {
  width: 108px;
  margin: 0 7px;
  font-size: 12px;
}

.btn-line-gray {
  border-color: #b0b0b0;
  background: #fff;
  color: #b0b0b0;
}

.btn-line-gray:hover {
  border-color: #757575;
  background: #757575;
  color: #fff;
}

.btn-small {
  height: 28px;
  line-height: 28px;
}

.btn {
  display: inline-block;
  padding: 0;
  border: 1px solid #b0b0b0;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;
}

.btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
</style>