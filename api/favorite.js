import request from '@/service'
import { favorite } from '@/api/url'


// 获取收藏商品
export const getFav = keyword => {
  return request({
    url: favorite.fav + keyword,
    method: 'get'
  })
}
// 删除收藏的商品
export const delFav = fid => {
  return request({
    url: favorite.delFav + fid,
    method: 'delete',
  })
}
// 取消收藏
export const cancelFav = gid => {
  return request({
    url: favorite.cancel,
    method: 'delete',
    params: { gid }
  })
}
// 添加收藏商品
export const addFav = gid => {
  return request({
    url: favorite.addFav,
    method: 'post',
    data: { gid }
  })
}