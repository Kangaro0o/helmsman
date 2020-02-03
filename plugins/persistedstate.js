import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

let cookieStorage = {
  getItem: function (key) {
    return Cookies.getJSON(key);
  },
  setItem: function (key, value) {
    return Cookies.set(key, value, { expires: 3, secure: false });
  },
  removeItem: function (key) {
    return Cookies.remove(key);
  }
};

/**
 * vuex持久化
 */
export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'nuxt-state',
      storage: cookieStorage,
      getState: cookieStorage.getItem,
      setState: cookieStorage.setItem
    })(store)
  })
}