/**
 * @author Kelvin
 * @description 菜单相关方法
 */
import request from '@/service'
import { menu } from '@/api/url'

export const getNavItems = _ => {
  return request({
    url: menu.navItems,
    method: 'get'
  })
}

export const getTabItems = _ => {
  return request({
    url: menu.tabItems,
    method: 'get'
  })
}