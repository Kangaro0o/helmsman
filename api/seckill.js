/**
 * @author Kelvin
 * @description 秒杀商品相关的方法
 */
import request from '@/service'
import { seckill } from '@/api/url'

// 获取商城首页滑动的秒杀商品列表
export const slide = _ => {
  return request({
    url: seckill.slide,
    method: 'get'
  })
}