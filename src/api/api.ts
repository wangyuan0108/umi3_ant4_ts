/*
 * @Author: wangyuan
 * @Date: 2020-08-20 00:09:32
 * @LastEditTime: 2020-08-20 23:49:59
 * @LastEditors: wangyuan
 * @Description:
 */
import { request } from 'umi';
interface IResult<T> {
  data: T;
  success: string;
}
interface ILogin {
  acount: string;
  password: number;
}
export const get = (url: string, params?: object) => {
  return request(url, params);
};

export const post = (url: string, data?: object) => {
  return request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    requestType: 'form',
    data,
  });
};

export const statisticsHistory = () => {
  return get('/api/admin/statistics/history');
};

export const login = (data: ILogin): Promise<IResult<object>> => {
  return post('/api/admin/auth/login', data);
};
