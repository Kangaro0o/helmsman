<template>
  <div class="top-header">
    <div class="container">
      <a class="logo-mi" href="/"></a>
      <a class="gif"></a>
      <div class="header-nav" @mouseenter="isNavEnter = true" @mouseleave="isNavEnter = false">
        <ul>
          <li
            class="item"
            v-for="(item,index) in navItems"
            :key="index"
            :class="{active: item.type === selected}"
            @mouseenter="selected = item.type"
          >
            <a href="#">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div
        class="header-search"
        @mouseenter="searchEnter"
        @mouseleave="searchLeave"
        v-show="this.$route.path === '/'"
      >
        <form>
          <input
            class="search-text"
            type="search"
            @focus="inputFocus"
            @blur="inputBlur"
            @input="getTips"
            :class="{'search-focus': isFocus,'search-enter': isEnter}"
            v-model="keyword"
          />
          <label
            class="search-btn"
            value
            :class="{'search-focus': isFocus,'search-enter': isEnter}"
            @click="search"
          >
            <span class="icon"></span>
          </label>
        </form>
        <ul class="search-result" v-show="isShow">
          <li v-for="(item,index) in results" :key="index">
            <span class="item-name" @mousedown="selectTips(item)">
              <small>{{item}}</small>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="header-menu"
      v-show="(selected !== '') && (isNavEnter || isMenuEnter)"
      @mouseenter="isMenuEnter = true"
      @mouseleave="isMenuEnter = false"
    >
      <ul v-for="(item,index) in navItems" v-show="item.type === selected" :key="index">
        <li v-for="(key,index) in selectedType" :key="index">
          <div class="product">
            <!-- TODO:点击图片跳转 item.goods_id -->
            <a href="#">
              <img :src="key.imageUrl" alt />
            </a>
            <p class="title">{{key.goods_name}}</p>
            <p class="price">{{key.goods_price}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNavItems, getTabItems } from '@/api/menu';
import { Message } from 'element-ui'
import { getGoodsTips } from '@/api/goods'
export default {
  created() {
    this.getNavItems()
  },
  mounted() {
    this.getTabItems()
  },
  data() {
    return {
      navItems: [],
      results: [],
      tabItems: {},
      selected: '',
      isFocus: false,
      isEnter: false,
      isNavEnter: false,
      isMenuEnter: false,
      keyword: '',
      isShow: false
    }
  },
  methods: {
    getNavItems() {
      getNavItems().then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = this.$resultCode.getSuccessStatus()
        // 如果出错了，则弹框提示
        if (status !== success) {
          Message({
            message: res.message,
            type: status.type
          })
          return
        }
        this.navItems = res.data
      })
    }
    ,
    getTabItems() {
      getTabItems().then(res => {
        let status = this.$resultCode.getStatus(res.code)
        let success = this.$resultCode.getSuccessStatus()
        // 如果出错则弹框提示
        if (status !== success) {
          Message({
            message: res.message,
            type: status.type
          })
          return
        }
        this.tabItems = res.data.tableItems
      })
    },
    inputFocus: function () {
      this.isFocus = true
    },
    inputBlur: function () {
      this.isFocus = false
    },
    searchEnter: function () {
      this.isEnter = true
    },
    searchLeave: function () {
      this.isEnter = false
    },
    search: function () {
      this.isShow = false
      this.$emit('kw', this.keyword)
    },
    getTips: function () {
      if (this.keyword !== "" && this.keyword !== null) {
        this.isShow = true
        getGoodsTips(this.keyword).then(res => {
          this.results = res.data.results
        })
      } else {
        this.isShow = false
        this.results = []
        this.search()
      }
    },
    selectTips: function (item) {
      this.keyword = item
      this.isShow = false
      this.search()
    }
  },
  computed: {
    selectedType: function () {
      for (let i = 0; i < this.tabItems.length; i++) {
        if (this.tabItems[i].type === this.selected)
          return this.tabItems[i].goodsResults
      }
      return null;
    }
  }
}
</script>

<style lang="scss" scoped>
.top-header {
  width: 100%;
  position: relative;
  > .container {
    width: 1226px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .logo-mi {
      width: 55px;
      height: 55px;
      background: url("../assets/logo2.png") no-repeat;
    }
    > .gif {
      width: 163px;
      height: 66px;
      margin-left: 20px;
    }
    > .header-nav {
      margin-right: auto;
      height: 100px;
      display: flex;
      align-items: center;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .item > a {
          height: 66px;
          line-height: 66px;
          padding: 0 10px;
          font-size: 16px;
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
    > .header-search {
      position: relative;
      form {
        height: 50px;
        display: flex;
        align-items: center;
        .search-text {
          width: 223px;
          height: 50px;
          padding: 0 10px;
          border: 1px solid #e0e0e0;
          border-right: none;
          font-size: 14px;
          line-height: 48px;
          outline: 0;
          transition: all 0.2s;
        }
        .search-enter {
          border-color: #333;
        }
        .search-btn {
          width: 52px;
          height: 48px;
          border: 1px solid #e0e0e0;
          font-size: 24px;
          line-height: 24px;
          background: #fff;
          color: #616161;
          outline: 0;
          transition: all 0.2s;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          > .icon {
            background: url(../assets/icon-search.png) no-repeat;
            display: inline-block;
            width: 20px;
            height: 20px;
            background-size: 100% 100%;
            transition: all 0.2s;
          }
          &:hover {
            background: #ff6700;
            > .icon {
              background: url(../assets/icon-search-white.png) no-repeat;
              display: inline-block;
              width: 20px;
              height: 20px;
              background-size: 100% 100%;
            }
          }
        }
        .search-enter {
          border-color: #b0b0b0;
        }
        .search-focus {
          border-color: #ff6700;
        }
      }
      .search-result {
        position: absolute;
        z-index: 3;
        box-sizing: border-box;
        top: 50px;
        width: 224px;
        border: 1px solid #ff6700;
        border-top: 0;
        background: #fff;
        li {
          padding: 7px 13px;
          color: #424242;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item-num {
            color: #b0b0b0;
          }
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
  }
}

.header-menu {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  height: 230px;
  z-index: 6;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  > ul {
    display: flex;
    justify-content: flex-start;
    > li {
      width: 160px;
      padding: 0 10px;
      &:first-child {
        margin-left: 80px;
      }
      &:last-child > .product > a {
        border-right: 0;
      }
      .product {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        > a {
          border-right: 1px solid #e0e0e0;
          padding-right: 10px;
        }
        a > img {
          margin-top: 40px;
          width: 159px;
          height: 110px;
        }
        .title {
          margin-top: 15px;
          margin-bottom: -5px;
          color: #333;
        }
        .price {
          color: #ff6700;
        }
      }
    }
  }
}
</style>
