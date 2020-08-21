/*
 * @Author: wangyuan
 * @Date: 2020-08-21 17:48:22
 * @LastEditTime: 2020-08-21 17:54:03
 * @LastEditors: wangyuan
 * @Description:
 */
import { post } from './baseRequest';
interface IResult<T> {
  data: T;
  success: string;
}
interface ILogin {
  acount: string;
  password: number;
}

export const login = (data: ILogin): Promise<IResult<object>> => {
  return post('/api/admin/auth/login', data);
};
