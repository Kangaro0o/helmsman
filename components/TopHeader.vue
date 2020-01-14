<template>
  <div class="top-header">
    <div class="container">
      <a class="logo-mi"></a>
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
      <div class="header-search" @mouseenter="searchEnter" @mouseleave="searchLeave">
        <form>
          <input
            class="search-text"
            type="search"
            @focus="inputFocus"
            @blur="inputBlur"
            :class="{'search-focus': isFocus,'search-enter': isEnter}"
          />
          <label
            class="search-btn"
            value
            :class="{'search-focus': isFocus,'search-enter': isEnter}"
          >
            <span class="icon"></span>
          </label>
        </form>
        <!-- <ul class="search-result" v-show="isFocus">
          <li v-for="(item,index) in results" :key="index">
            <span class="item-name">{{item.name}}</span>
            <span class="item-num">约有{{item.number}}件</span>
          </li>
        </ul>-->
      </div>
    </div>
    <div
      class="header-menu"
      v-show="(selected !== '') && (isNavEnter || isMenuEnter)"
      @mouseenter="isMenuEnter = true"
      @mouseleave="isMenuEnter = false"
    >
      <ul v-for="(item,index) in navItems" v-show="item.type === selected" :key="index">
        <li v-for="(key,index) in tabItems[item.type]" :key="index">
          <div class="product">
            <p class="info">{{key.info}}</p>
            <a :href="key.link">
              <img :src="key.imgUrl" alt />
            </a>
            <p class="title">{{key.title}}</p>
            <p class="price">{{key.price}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNavItems, getTabItems } from '@/api/menu';
import { Message } from 'element-ui'
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
      /* results: [
        { name: '小米手机5', number: '11' },
        { name: '空气净化器2', number: '1' },
        { name: '活塞耳机', number: '4' },
        { name: '小米路由器', number: '8' },
        { name: '移动电源', number: '21' },
        { name: '运动相机', number: '3' },
        { name: '小米摄像机', number: '2' },
        { name: '小米体重秤', number: '1' },
        { name: '小米插线板', number: '13' },
        { name: '配件优惠套装', number: '32' }
      ], */
      tabItems: {},
      selected: '',
      isFocus: false,
      isEnter: false,
      isNavEnter: false,
      isMenuEnter: false
    }
  },
  methods: {
    getNavItems() {
      getNavItems().then(res => {
        // 根据返回的状态码获取状态对象
        let result = this.$resultCode.getStatus(res.code)
        // 把返回的数据赋值给data()中定义好的变量
        this.navItems = res.data.navItems
        // 根据状态对象显示响应的提示信息
        if (res.message !== "" && res.message !== null) {
          Message({
            message: res.message,
            type: result.type
          })
        }
      })
    },
    getTabItems() {
      getTabItems().then(res => {
        let result = this.$resultCode.getStatus(res.code)
        this.tabItems = res.data.tabItems
        if (res.message !== "" && res.message !== null) {
          Message({
            message: res.message,
            type: result.type
          })
        }
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
    }
  },
  components: {
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
      background: url(../assets/logo-mi.png) no-repeat;
    }
    > .gif {
      width: 163px;
      height: 66px;
      margin-left: 20px;
      background: url(../assets/win.gif) no-repeat;
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
          width: 159px;
          height: 110px;
        }
        .info {
          line-height: 10px;
          height: 10px;
          padding: 5px 20px;
          margin-bottom: 20px;
          color: #ff6700;
          border: 1px solid #ff6700;
        }
        .title {
          margin-top: 20px;
          margin-bottom: 5px;
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
