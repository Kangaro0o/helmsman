/**
 * 用户相关的URL
 */
export const user = {
  login: '/user/login',
  logout: '/user/logout',
  register: '/user/register',
  verify: '/user/verify',
  chkcode: '/user/chkCode',
  sendpwd: '/user/password/reset',
  resetpwd: '/user/resetPwd',
  tabupdate: '/user/update',
  info: '/user/info',
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
  goodsItems: '/goods/list',
  list: '/goods/list/hot',
  tips: '/goods/tips/',
  getimagesItems: '/getimage',
  // getgoodsinfo:'/goods/show/${gid}'
}

/**
 * 秒杀商品相关的URL
 */
export const seckill = {
  slide: '/seckill/slide',
  list: '/seckill/list'
}
// 收藏列表相关的URL
export const favorite = {
  fav: '/favorite/list/',
  delFav: '/favorite/',
  addFav: '/favorite'
}

// 订单相关的url
export const order = {
  ord: '/order/list/',
  delOrd: '/order/',
  ordInfo: '/order/info/',
  addorder: '/order/create',
}

export const address = {
  addressItems: '/address/list',
  addaddress: '/address/add',
  deleteaddress: '/address/deleteaddress/',
  setdefaultaddress: '/address/default'
}