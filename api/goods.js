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




export function getgoodsItems (type,orderby,pagenum,pagesize,keyword)  {  
       return request({
         url: `/goods/${type}/list/${orderby}/${pagenum}/${pagesize}/${keyword} `,
         method: 'get'
       })  
}

export function getgoodsItems2 (type,orderby,pagenum,pagesize)  {  
  return request({
    url: `/goods/${type}/list/${orderby}/${pagenum}/${pagesize}`,
    method: 'get'
  }) 

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


/**
 * 获取商城首页搜索框的搜索提示
 * @param {string} keyword 
 */
export const getGoodsTips = keyword => {
  return request({
    url: goods.tips + keyword,
    method: 'get'
  })
}

export const getimage = _ => {
  return request({
    url: goods.getimagesItems,
    method: 'get'
  })

}

export function getgoodsinfo(gid) {
  return request({
    url: `/goods/show/${gid}`,
    method: 'get'
  })
}

