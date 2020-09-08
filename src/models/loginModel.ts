/*
 * @Author: wangyuan
 * @Date: 2020-07-01 09:51:16
 * @LastEditTime: 2020-09-08 17:03:15
 * @LastEditors: wangyuan
 * @Description:
 */
import { Effect, ImmerReducer, Reducer, Subscription,history } from 'umi';
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
      let res = yield call(login, payload);
      debugger
      yield put({ type: 'save', payload: { name: 'admin' } });
      history.push('/')
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
