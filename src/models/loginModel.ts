/*
 * @Author: wangyuan
 * @Date: 2020-07-01 09:51:16
 * @LastEditTime: 2020-08-24 15:06:40
 * @LastEditors: wangyuan
 * @Description:
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { login } from '@/services/loginService';
export interface LoginModelState {
  name: string;
  icon: string;
}
export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState;
  effects: {
    login: Effect;
  };
  reducers: {
    save: Reducer<LoginModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    name: 'uuiioo',
    icon: '',
  },
  effects: {
    *login({ payload }, { call, put }) {
      // const a = yield call(login, payload);
      yield put({ type: 'save', payload: { name: 'admin' } });
      // console.log('pathname====a', a);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default LoginModel;
