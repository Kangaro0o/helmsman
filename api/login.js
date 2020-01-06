import request from '@/utils/request'

export function login(userInfo) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username: userInfo.username,
      password: userInfo.password
    }
  })
}

export function getInfo() {
  return request({
    url: '/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}