import axios from 'axios'
import qs from 'qs'
import store from '../store/index'
import { MessageBox } from 'element-ui'


const axiosCustom = axios.create({  
  baseURL: process.env.BASE_URL, 
  withCredentials: true
})

/* 普通请求 */
export const request = (url, params = {}, config = {}, autoErrorRes = true, autoErrorData = true, autoCancel = true) => {
  if (autoCancel) {  
    config = Object.assign({ cancelToken: store.state.source.token }, config)
  } 
    const args = Object.assign({  
    'method': 'post',  // 默认post方法
    'url': url,
    'data': params
  }, config)
  // 处理url传参
  if (!['put', 'post', 'patch'].includes(args.method.toLowerCase())) {  
    args['params'] = args['params'] || args['data']
    args['paramsSerializer'] = args['paramsSerializer'] || function (params) {
      return qs.stringify(params, { arrayFormat: 'indices' })
    }
  }
  return axiosCustom(args).then((res) => {  
    
    if (autoErrorData && res.data.hasOwnProperty('code') && res.data.code !== 1) {
      console.error(res.data) 
      const errMsg = res.data.errorMessage || '未知的服务器错误，请联系管理员！' 
      const errCod = res.data.code  
      MessageBox.alert(errMsg, '请求异常：' + errCod, { confirmButtonText: '确定' })  
      return Promise.reject(res.data)  
    }
    return res.data  
  }, (error) => {
  
    console.error(error)
    error.response = error.response || {}
    const errStatus = error.response.status || -100
    if (autoErrorRes && error.message) {
      MessageBox.alert('网络请求异常，请联系管理员！', '请求异常：' + errStatus, { confirmButtonText: '确定' })
    }
    return Promise.reject(error)  
  })
}

/* 使用sessionStorage缓存的请求 */
export const sessionRequest = (url, params = {}, config = {}, outTime = -1, autoErrorRes = true, autoErrorData = true, autoCancel = true) => {
  const itemKey = url + '#' + JSON.stringify(params) + JSON.stringify(config)
  let itemVal = sessionStorage.getItem(itemKey)
  const nowTime = new Date().getTime()
  if (itemVal) {
    itemVal = JSON.parse(itemVal)
    const overTime = nowTime - itemVal.lastTime
    if (outTime < 0 || overTime < outTime * 1000) {
      return Promise.resolve(itemVal.data)
    }
  }
  return request(url, params, config, autoErrorRes, autoErrorData, autoCancel).then(data => {
    sessionStorage.setItem(itemKey, JSON.stringify({
      'lastTime': nowTime,
      'data': data
    }))
    return data
  })
}

/* 使用localStorage缓存的请求 */
export const localRequest = (url, params = {}, config = {}, outTime = 604800, autoErrorRes = true, autoErrorData = true, autoCancel = true) => {
  const itemKey = url + '#' + JSON.stringify(params) + JSON.stringify(config)
  let itemVal = localStorage.getItem(itemKey)
  const nowTime = new Date().getTime()
  if (itemVal) {
    itemVal = JSON.parse(itemVal)
    const overTime = nowTime - itemVal.lastTime
    if (outTime < 0 || overTime < outTime * 1000) {
      return Promise.resolve(itemVal.data)
    }
  }
  return request(url, params, config, autoErrorRes, autoErrorData, autoCancel).then(data => {
    localStorage.setItem(itemKey, JSON.stringify({
      'lastTime': nowTime,
      'data': data
    }))
    return data
  })
}