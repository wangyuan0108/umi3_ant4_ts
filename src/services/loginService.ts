/*
 * @Author: wangyuan
 * @Date: 2020-08-21 17:48:22
 * @LastEditTime: 2020-09-08 16:56:10
 * @LastEditors: wangyuan
 * @Description:
 */
import { post } from '@/services/baseRequest';
interface ILogin {
  acount: string;
  password: number;
}

export const login = (data: ILogin) => {
  return post('/api/admin/auth/login', data);
};
