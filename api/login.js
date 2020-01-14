/**
 * @author Kelvin
 * @description 登录相关的方法
 */
import request from '@/service'
import { user } from '@/api/url';

export function login(userInfo) {
  return request({
    url: user.login,
    method: 'post',
    data: {
      username: userInfo.username,
      password: userInfo.password
    }
  })
}

export function getInfo() {
  return request({
    url: user.info,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: user.logout,
    method: 'get'
  })
}