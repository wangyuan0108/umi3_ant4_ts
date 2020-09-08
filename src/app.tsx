import React from 'react';
import './app.less';

export async function getInitialState() {
  const data = {
    userId: '1',
    role: 'admin',
    name: '清风',
    kkl:'lll',
    avatar: 'http://dinping.wangyuanweb.top/18-4-12/31903640.jpg',
  };
  return data;
}

export const layout = {
  logout: () => {
    console.log('1234');
  },
};
