import request from '@/service'
import { order } from '@/api/url'


// 获取订单列表
export const getOrder = (status,keyword) => {
    return request({
      url: order.ord + status+"/"+keyword,
      method: 'get',
    })
  }

// 获取订单详情
export const getOrdInfo = oid => {
    return request({
      url: order.ordInfo+oid,
      method: 'get',
    })
  }

// 删除订单
export const delOrd = oid => {
    return request({
      url: order.delOrd+oid,
      method: 'delete',
    })
}
