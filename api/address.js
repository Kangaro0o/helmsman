/** 
*@author xianzhugoumang
*@description
*/
import request from '@/service'
import { address, menu } from '@/api/url'

//获取地址列表
export const getaddressItems = _ => {
    return request({
        url: address.addressItems,
        method: 'get'
    })
}
//添加地址
export const addaddress = addressinfo => {
    return request({
        url: address.addaddress,
        method: 'post',
        data: addressinfo
    })
}

//删除地址
export const deleteaddress = aid => {
    return request({
        url: address.deleteaddress + aid,
        method: 'delete',
    })
}

//设置默认地址
export const setdefaultaddress = aid => {
    return request({
        url: address.setdefaultaddress,
        method: 'put',
        data: { aid }
    })
}
