import http from 'http'
import https from 'https'

export default {
  // 自定义请求头
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  // 
  // http://49.235.238.192:8888
  baseURL: 'http://120.55.168.67:7300/mock/5e13222762413f3b595c34e4/helmsman',
  // 超时设置
  timeout: 3000, // 3秒
  // 响应的数据格式 json/blob/document/arraybuffer/text/stream
  responseType: 'json',
  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}