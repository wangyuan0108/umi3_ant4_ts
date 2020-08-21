/*
 * @Author: wangyuan
 * @Date: 2020-07-01 09:51:16
 * @LastEditTime: 2020-08-21 16:17:14
 * @LastEditors: wangyuan
 * @Description:
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {login} from '../api/api'
export interface IndexModelState {
  name: string;
}
export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: 'uuiioo',
  },
  effects: {
    *query({ payload }, { call, put }) {
      const a = yield call(
        login,
        payload,
      )
      console.log('pathname====a',a);
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

export default IndexModel;
