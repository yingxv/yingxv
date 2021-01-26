import { defineConfig } from 'umi';

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
          entry: '//localhost:8000', // html entry
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/',
      routes: [
        { path: '/', component: '@/pages/index' },
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
