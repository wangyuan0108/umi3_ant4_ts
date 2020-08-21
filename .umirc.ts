/*
 * @Author: wangyuan
 * @Date: 2020-06-11 17:41:05
 * @LastEditTime: 2020-08-20 22:14:55
 * @LastEditors: wangyuan
 * @Description:
 */
import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {},
  layout: {
    name: '实验系统',
    logo: 'http://dinping.wangyuanweb.top/18-4-12/31903640.jpg',
  },
  proxy: {
    '/api': {
      'target': 'https://pre.xbeilu.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: '@/pages/index',
      menu: {
        icon: 'setting',
        name: '权限管理',
      },
      routes: [
        {
          path: 'list',
          component: '@/pages/test',
          menu: {
            name: '账户列表',
          },
        },
      ],
    },
    // {
    //   path: 'user',
    //   component: '@/pages/test',
    //   menu: {
    //     name: '用户管理',
    //     icon: 'user',
    //   },
    //   routes: [
    //     {
    //       path: 'list',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '用户列表',
    //       },
    //     },
    //     {
    //       path: 'invitationRecord',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '邀请记录',
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'user1',
    //   component: '@/pages/test',
    //   menu: {
    //     name: '奖品管理',
    //     icon: 'gift',
    //   },
    //   routes: [
    //     {
    //       path: 'list',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '奖品列表',
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'user2',
    //   component: '@/pages/test',
    //   menu: {
    //     name: '活动管理',
    //     icon: 'fire',
    //   },
    //   routes: [
    //     {
    //       path: 'list',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '活动列表',
    //       },
    //     },
    //     {
    //       path: 'invitationRecord',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '活动参与记录',
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'user3',
    //   component: '@/pages/test',
    //   menu: {
    //     name: '财务管理',
    //     icon: 'accountBook',
    //   },
    //   routes: [
    //     {
    //       path: 'list',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '提现列表',
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'dashboard',
    //   component: '@/pages/test',
    //   menu: {
    //     name: '其它',
    //     icon: 'ellipsis',
    //   },
    //   routes: [
    //     {
    //       name: 'analysis',
    //       path: 'analysis',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '概况',
    //       },
    //     },
    //     {
    //       name: 'monitor',
    //       path: 'monitor',
    //       component: '@/pages/test',
    //       menu: {
    //         name: '监控页',
    //       },
    //     },
    //   ],
    // },
  ],
});
