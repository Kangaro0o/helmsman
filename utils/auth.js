import Cookies from "js-cookie"

const TokenKey = "loginToken"
const TokenHead = "Bearer"
const ExpireTime = 60

export function getToken() {
  return getItem(TokenKey)
}

export function setToken(token) {
  return setItem(TokenKey, TokenHead + " " + token)
}

export function removeToken() {
  return removeItem(TokenKey)
}

export function getItem(key) {
  return Cookies.getJSON(key)
}

export function setItem(key, value) {
  // var inFifteenMinutes = new Date(new Date().getTime() + ExpireTime * 60 * 1000);
  return Cookies.set(key, value, { expires: 50, secure: false })
}

export function addCart(value) {
  return Cookies.set("myCart", value, { expires: 0.5 })
}

export function getCart() {
  return Cookies.getJSON("myCart")
}

export function removeItem(key) {
  return Cookies.remove(key)
}

export function removeAll() {
  removeItem("state")
  removeToken()
}