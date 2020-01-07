import { login, getInfo } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

export const state = {
  name: '',
  token: getToken(),
  avatar: ''
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_NAME(state, name) {
    state.name = name
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  }
}

export const actions = {
  // 登录
  Login: ({ commit }, params) => {
    const username = params.username.trim()
    const password = params.password
    return new Promise((resolve, reject) => {
      login(username, password).then(response => {
        const data = response.data
        // 把token保存到cookie
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  GetInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const data = response.data
        // 保存username和avatar的状态
        commit('SET_NAME', data.username)
        commit('SET_AVATAR', data.avatar)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
}