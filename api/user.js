import request from '@/service'
import { user } from '@/api/url';

export const verify = verifyInfo => {
  return request({
    url: user.verify,
    method: 'post',
    data: verifyInfo
  })
}