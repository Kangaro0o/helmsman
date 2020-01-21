/**
 * @author Kelvin
 * @description 登录相关的方法
 */
import request from '@/service'
import { user } from '@/api/url';

export function login(userInfo) {
  return request(
    user.login,
    userInfo,
    { method: 'post' }
  )
}

export function getInfo() {
  return request(
    user.info,
    {},
    { method: 'get' }
  )
}

export function logout() {
  return request(
    user.logout,
    {},
    { method: 'get' }
  )
}