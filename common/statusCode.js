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
  },
  // 1000-1999 参数相关错误
  BINDING_ARGS_ERROR: {
    code: 1002,
    message: '参数格式错误',
    type: 'warning'
  },
  PASSWORD_ERROR: {
    code: 1003,
    message: '登录密码错误',
    type: 'error'
  },
  // 2000-2999 数据库相关错误
  PHONE_NOT_FOUND: {
    code: 2001,
    message: '手机号不存在',
    type: 'warning'
  },
  HAS_EXIST: {
    code: 2001,
    message: '该号码已被注册',
    type: 'warning'
  },
  DATABASE_ERROR: {
    code: 2003,
    message: '数据库异常',
    type: 'error'
  }
}