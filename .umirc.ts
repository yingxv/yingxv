import { defineConfig } from 'umi';

function userCenterHost() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://micro.furan.xyz/user-center/';
    default:
      return 'http://localhost:8010';
  }
}

function flashcardHost() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://micro.furan.xyz/flashcard/';
    default:
      return 'http://localhost:8020';
  }
}

function timeMgtHost() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://micro.furan.xyz/time-mgt/';
    default:
      return 'http://localhost:8030';
  }
}

export default defineConfig({
  title: '盈虚',
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/favicon.ico',
  links: [
    {
      rel: 'manifest',
      href: '/manifest.webmanifest',
    },
  ],
  qiankun: {
    master: {
      sandbox: false,
      // 注册子应用信息
      apps: [
        {
          name: 'user-center', // 唯一 id
          entry: userCenterHost(), // html entry
        },
        {
          name: 'flashcard', // 唯一 id
          entry: flashcardHost(), // html entry
        },
        {
          name: 'time-mgt', // 唯一 id
          entry: timeMgtHost(), // html entry
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
            wrapperClassName: 'load-wrap',
            className: 'root-slave',
            autoSetLoading: true,
          },
        },
        {
          path: '/flashcard/',
          microApp: 'flashcard',
          microAppProps: {
            wrapperClassName: 'load-wrap',
            className: 'root-slave',
            autoSetLoading: true,
          },
        },
        {
          path: '/time-mgt/',
          microApp: 'time-mgt',
          microAppProps: {
            wrapperClassName: 'load-wrap',
            className: 'root-slave',
            autoSetLoading: true,
          },
        },
        { redirect: '/user-center/' },
      ],
    },
  ],
  hash: true,
  extraBabelPlugins: [
    [
      'babel-plugin-styled-components',
      {
        namespace: 'yingxv',
      },
    ],
  ],
});
