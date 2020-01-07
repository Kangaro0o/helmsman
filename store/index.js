import { setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/login'

export const state = () => ({
  name: '',
  token: ''
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_NAME(state, name) {
    state.name = name
  }
}

export const actions = {
  // 登录
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login(username, password).then(response => {
        const data = response.data
        const token = data.token
        setToken(token)
        commit('SET_TOKEN', token)
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
        commit('SET_NAME', data.username)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 登出
  LogOut({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}