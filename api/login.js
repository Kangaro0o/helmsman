import request from '@/service'
import { user } from './url';
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