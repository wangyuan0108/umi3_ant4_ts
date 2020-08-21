import React from 'react';

export function onRouteChange({ location, routes, action }) {
  console.log('90900====', location.pathname);
}

export async function getInitialState() {
  const data = {
    userId: '1',
    role: 'admin',
    name: '清风',
    avatar: 'http://dinping.wangyuanweb.top/18-4-12/31903640.jpg'
  };
  return data;
}

export const layout = {
  logout: () => {
    console.log('1234');
  }, // do something
  // menuDataRender: () => [
  //   //此功能可以实现动态路由，用来渲染访问路由
  //   {
  //     path: '/user1',
  //     name: '路由模块1',
  //   },
  //   {
  //     path: '/',
  //     name: '路由模块2',
  //     children: [
  //       { path: '/test', name: '路由模块2-1' },
  //       { path: '/user', name: '路由模块2-2' },
  //     ],
  //   },
  // ],
  // rightRender: initInfo => {
  //   console.log('initInfo', initInfo);
  // return initInfo;
  // }, // return string || ReactNode;
};
