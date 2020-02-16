/**
 * @author Kelvin
 * @description 用户相关的状态树
 */

import { login, logout } from '@/api/login'
import { getToken, setToken, removeAll } from '@/utils/auth'

export const state = () => ({
  token: getToken(),
  name: '',
  email: '',
  phone: '',
  addressId: '',
  role: ''
})

export const mutations = {
  get_token(state) {
    return state.token
  },
  set_token(state, token) {
    state.token = token
  },
  set_name(state, name) {
    state.name = name
  },
  set_email(state, email) {
    state.email = email
  },
  set_phone(state, phone) {
    state.phone = phone
  },
  set_addressId(state, addressId) {
    state.addressId = addressId
  },
  set_role(state, role) {
    state.role = role
  }
}

export const actions = {
  // 登录
  Login({ commit }, { phone, password }) {
    return new Promise((resolve, reject) => {
      login({ phone, password }).then(res => {
        const data = res.data
        if (data !== null && data !== '') {
          setToken(data.token)
          commit('set_token', data.token)
          commit('set_name', data.user.name)
          commit('set_email', data.user.email)
          commit('set_phone', data.user.phone)
          commit('set_addressId', data.user.addressId)
          commit('set_role', data.user.role)
        }
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 登出
  LogOut({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(response => {
        // commit('set_token', '')
        removeAll()
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

