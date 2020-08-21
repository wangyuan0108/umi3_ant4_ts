/*
 * @Author: wangyuan
 * @Date: 2020-08-21 17:48:22
 * @LastEditTime: 2020-08-21 18:02:15
 * @LastEditors: wangyuan
 * @Description:
 */
import { post } from '@/services/baseRequest';
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
