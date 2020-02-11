import createPersistedState from 'vuex-persistedstate'
import { getItem, setItem, removeItem } from '@/utils/auth'

let cookieStorage = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem
}

/**
 * vuex持久化
 */
export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'state',
      storage: cookieStorage,
      getState: cookieStorage.getItem,
      setState: cookieStorage.setItem
    })(store)
  })
}