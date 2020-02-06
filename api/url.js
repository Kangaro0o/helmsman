/**
 * 用户相关的URL
 */
export const user = {
  login: '/user/login',
  info: '/user/info',
  logout: '/user/logout',
  register: '/user/register',
  verify: '/user/verify',
  chkcode: '/user/chkCode',
  sendpwd: '/user/sendpwd',
  resetpwd: '/user/resetpwd',
  tabupdate: '/user/tabupdate'
}

/**
 * 菜单相关的URL
 */
export const menu = {
  navItems: '/menu/navItems',
  tabItems: '/menu/tabItems'
}

/**
 * 商品相关的URL
 */
export const goods = {
  carouselItems: '/goods/carouselItems',
  goodsItems: '/goods/${type}/list/${orderBy}/${keywords}',
  list: '/goods/list/'
}

/**
 * 秒杀商品相关的URL
 */
export const seckill = {
  slide: '/seckill/slide',
  list: '/seckill/list'
}
