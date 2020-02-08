/** 
*@author xianzhugoumang
*@description
*/
import request from '@/service'
import { address } from '@/api/url';

//获取商品列表
export const getaddressItems = _ =>{
    return request({
        url:address.addressItems,
        method:'get'
    })
}
//获取地址列表
export const addaddress =addressinfo => {
    return request({
        url:address.addadress,
        method:'post',
        data:addressinfo
    })
}

