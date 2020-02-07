// 获取收藏商品
export const getFav = keyword => {
    return request({
      url: favorite.fav + keyword,
      method: 'get',

    })
  }
  // 删除收藏的商品
export const delFav = fid => {
    return request({
      url: favorite.delFav+fid,
      method: 'delete',
    })
  }
// 添加收藏商品
export const addFav = goods_id => {
    return request({
      url: favorite.addFav,
      method: 'post',
      data:{goods_id}
    })
  }