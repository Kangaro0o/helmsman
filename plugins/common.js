/**
 * 把resultCode添加进全局变量this
 */
import Vue from 'vue'
import resultCode from '@/common/resultCode'

let code = {
  install(Vue) {
    Vue.prototype.$resultCode = resultCode // 变量的内容 后期可以在vue中 this->$resultCode.xxx 使用
  }
}

Vue.use(code)

// 这里是 为了在 asyncData 方法中使用
/* export default ({ app }, inject) => {
  app.$resultCode = resultCode
}; */