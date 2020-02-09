<template>
  <div class="common-goods">
    <div
      class="home-brick-box home-brick-row-2-box xm-plain-box"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="box-hd clearfix">
        <h2 class="title">{{item.type_zh}}</h2>
        <div class="more">
          <a href="#" class="more-link">
            查看全部
            <i class="el-icon-caret-right"></i>
          </a>
        </div>
      </div>
      <div class="box-bd">
        <div class="row">
          <div class="span10">
            <div>
              <ul class="brick-list clearfix">
                <div v-for="(goods, gIndex) in item.list" :key="gIndex">
                  <li class="brick-item brick-item-m brick-item-m-2">
                    <a :href="goods.goods_id">
                      <div class="figure figure-img">
                        <img
                          width="160"
                          height="160"
                          :src="goods.imgUrl"
                          :alt="goods.goods_name"
                          lazy="loaded"
                        />
                      </div>
                      <h3 class="title">{{goods.goods_name}}</h3>
                      <p class="desc">{{goods.goods_desc}}</p>
                      <p class="price">
                        <span class="num">{{goods.goods_price}}</span>元
                      </p>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from '@/api/goods'
export default {
  data() {
    return {
      list: [],
      // keyword: 'all'
    }
  },
  props: {
    keyword: String
  },
  created() {
    this.GoodsList()
  },
  methods: {
    GoodsList() {
      getGoodsList(this.keyword).then(res => {
        this.list = res.data.list
      })
    }
  },
  watch: {
    keyword: function () {
      this.GoodsList()
    }
  }
}
</script>

<style lang="scss">
.common-goods {
  width: 1226px;
  margin: 0 auto;
  .home-brick-box {
    margin-bottom: 8px;
    & .brick-list {
      margin: 0 0 -14px -14px;
      height: 614px;
      padding: 0;
      list-style-type: none;
      .brick-item {
        position: relative;
        z-index: 1;
        float: left;
        width: 234px;
        margin-left: 14px;
        margin-bottom: 14px;
        background: #fff;
        transition: all 0.2s linear;
        height: 246px;
        padding: 34px 0 20px;
      }
      & > .brick-item-m-2 {
        height: 260px;
        padding: 20px 0;
        .figure-img img {
          width: 160px;
          height: 160px;
          img {
            width: 160px;
            height: 160px;
          }
        }
      }
    }
  }
  .xm-plain-box .box-hd {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
    h2 {
      display: block;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    .title {
      margin: 0;
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
  .row {
    margin-left: -14px;
    .span10 {
      width: 1226px;
      margin-left: 14px;
      min-height: 1px;
      ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

        li {
          display: list-item;
          text-align: -webkit-match-parent;
          & .brick-item-m {
            height: 300px;
            padding: 0;
            img {
              height: 300px;
              border: 0;
            }
          }
          a {
            &:hover {
              text-decoration: none;
              color: #757575;
              background-color: rgba(0, 0, 0, 0);
            }
            &:-webkit-any-link {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

div {
  display: block;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}

.row:after,
.row:before {
  content: " ";
  display: table;
}

.brick-item-m .figure-img {
  width: 150px;
  height: 150px;
  margin: 0 auto 18px;
}

.brick-item-m .figure-img img {
  width: 150px;
  height: 150px;
}

.brick-item-m-2 .title {
  margin: 0 10px 2px;
}

.brick-item-m .desc,
.brick-item-m .title {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.brick-item-m .title {
  margin: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.brick-item-m .desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.brick-item-m-2 .price {
  margin: 0 10px 14px;
}
.brick-item-m .price {
  margin: 0 10px 10px;
  text-align: center;
  color: #ff6700;
}

.brick-item-m .price del {
  margin-left: 0.5em;
  color: #b0b0b0;
}
del {
  text-decoration: line-through;
}
</style>