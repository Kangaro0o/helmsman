import axios from 'axios'
import config from './config'
import { Message, MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'

const service = axios.create(config)

// request拦截器
service.interceptors.request.use(config => {
  // 将token放入请求头信息
  console.log()
  if (getToken()) {
    config.headers['Auth-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  // 获取返回信息
  const res = response.data
  // code不是200是为报错
  if (res.code !== 200) {
    // 401|403:未登录
    if (res.code === 401 || res.code === 403) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        // TODO 做退出登录操作，返回登录页
        $nuxt.$store.dispatch('user/LogOut').then(_ => {
          console.log("logout")
          location.reload()
        })
      })
    }
  }
  // 把信息递交给调用方处理
  return res
}, error => {
  console.log('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

export default service