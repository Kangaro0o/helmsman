/**
 * 请求响应事件的状态码
 * 与后端协商，未完待续...
 */
export default {
  SUCCESS: {
    code: 200, // 状态码
    message: '操作成功', // 状态信息
    type: 'success' // 通知组件类型
  },
  FAILED: {
    code: 500,
    message: '操作失败',
    type: 'error'
  },
  VALIDATE_FAILED: {
    code: 404,
    message: '参数验证失败',
    type: 'error'
  },
  UNAUTHORIZED: {
    code: 401,
    message: '暂未登录或token已经过期',
    type: 'warning'
  },
  FORBIDDEN: {
    code: 403,
    message: '没有相关权限',
    type: 'warning'
  }
}