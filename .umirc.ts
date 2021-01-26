import { defineConfig } from 'umi';

function userCenterHost() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return '//furan.xyz/user-center';
    default:
      return '//localhost:8000';
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
      ],
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/',
      routes: [
        {
          path: '/user-center/',
          microApp: 'user-center',
          microAppProps: {
            className: 'root-slave',
          },
        },
      ],
    },
  ],
});
