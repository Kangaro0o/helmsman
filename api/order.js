import request from '@/service'
import { order } from '@/api/url'
import { addCart, getCart } from '@/utils/auth'

// 添加到购物车
export const saveToCart = value => {
  addCart(value)
}

// 获取购物车中保存的内容
export const getGoodsFromCart = _ => {
  return getCart()
}

// 获取订单列表
export const getOrder = (status, keyword) => {
  return request({
    url: order.ord + status + "/" + keyword,
    method: 'get',
  })
}

// 创建订单
export const createOrder = ({ addressId, goodsId, payWay, num }) => {
  return request({
    url: order.create,
    method: 'post',
    data: { addressId, goodsId, payWay, num }
  })
}

// 创建秒杀订单
export const createSecKillOrder = ({addressId, goodsId, payWay, num}) => {
  return request({
    url: order.seckill,
    method: 'post',
    data: {addressId, goodsId, payWay, num}
  })
}

// 获取订单详情
export const getOrdInfo = oid => {
  return request({
    url: order.ordInfo + oid,
    method: 'get',
  })
}

// 删除订单
export const delOrd = oid => {
  return request({
    url: order.delOrd + oid,
    method: 'delete',
  })
}
//创建订单
export const addorder = orderinfo => {
  return request({
    url: order.addorder,
    method: 'post',
    data: orderinfo
  })

}
