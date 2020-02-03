import request from '@/service'
import { user } from '@/api/url';

export const verify = verifyInfo => {
  return request({
    url: user.verify,
    method: 'post',
    data: verifyInfo
  })
}
export const getchkCode = phone => {
  return request({
    url: user.chkcode,
    method: 'post',
    data: {phone}
  })
}
export const sendpwd = password => {
  return request({
    url: user.sendpwd,
    method: 'post',
    data: {password}
  })
}