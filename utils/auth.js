import Cookie from "js-cookie"

const TokenKey = "loginToken"
const TokenHead = "bearer"

export function getToken() {
  return Cookie.get(TokenKey)
}

export function setToken(token) {
  return Cookie.set(TokenKey, TokenHead + " " + token)
}

export function removeToken() {
  return Cookie.remove(TokenKey)
}