/**
 * @author Kelvin
 * @description 商品相关的URL
 */
import request from '@/service'
import { goods } from '@/api/url'

export const getCarouselItems = _ => {
  return request({
    url: goods.carouselItems,
    method: 'get'
  })
}

export const getgoodsItems = _ => {
  return request({
    url: goods.goodsItems,
    method: 'get'
  })
}
export default {
  search(orderby, type, keywords) {
    return request({
      url: '/goods/${type}/list/${orderby}/${keywords}',
      method: 'get',
      data: goodslist

    })
  }
}

/**
 * 获取商城首页商品列表
 * @param {string} keyword 
 */
export const getGoodsList = keyword => {
  return request({
    url: goods.list + keyword,
    method: 'get'
  })
}

