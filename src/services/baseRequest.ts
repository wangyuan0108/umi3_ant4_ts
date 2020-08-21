/*
 * @Author: wangyuan
 * @Date: 2020-08-21 17:49:50
 * @LastEditTime: 2020-08-21 17:53:32
 * @LastEditors: wangyuan
 * @Description:
 */
import { request } from 'umi';
export const post = (url: string, data?: object) => {
  return request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    requestType: 'form',
    data,
  });
};
export const get = (url: string, params?: object) => {
  return request(url, params);
};
