import { defineConfig } from 'umi';

function userCenterHost() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://furan.xyz/user-center';
    default:
      return 'http://localhost:8010';
  }
}

function flashCardHost() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://furan.xyz/flash-card';
    default:
      return 'http://localhost:8020';
  }
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/favicon.ico',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'user-center', // 唯一 id
          entry: userCenterHost(), // html entry
        },
        {
          name: 'flash-card', // 唯一 id
          entry: flashCardHost(), // html entry
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/',
      routes: [
        { path: '/', redirect: '/user-center/' },
        {
          path: '/user-center/',
          microApp: 'user-center',
          microAppProps: {
            className: 'root-slave',
          },
        },
        {
          path: '/flash-card/',
          microApp: 'flash-card',
          microAppProps: {
            className: 'root-slave',
          },
        },
      ],
    },
  ],
});
