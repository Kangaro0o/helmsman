/**
 * @author Kelvin
 * @description 商品相关的状态树
 */

export const state = () => ({
  keyword: ''
})

export const mutations = {
  set_keyword(state, keyword) {
    state.keyword = keyword
  },
  get_keyword(state) {
    return state.keyword
  }
}