/*
 * @Date: 2021-08-27 15:01:47
 * @LastEditors: haibo.tang
 * @LastEditTime: 2021-08-27 15:06:03
 */



// api.ts # 对接口进行封装 
import Ax from 'axios';
import { ResponseData } from './res';

export function getUser<T>() {
  return Ax.get<ResponseData<T>>('/somepath')
    .then(res => res.data)
    .catch(err => console.error(err));
}

