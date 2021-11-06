import { defineConfig } from 'umi';

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
  helmet: false,
  dva: false,
  model: false,
  initialState: false,
  layout: false,
  locale: false,
  preact: false,
  request: false,
  sass: false,
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'user-center', // 唯一 id
          entry: '/micro/user-center', // html entry
        },
        // {
        //   name: 'flashcard', // 唯一 id
        //   entry: 'flashcard/micro', // html entry
        // },
        // {
        //   name: 'time-mgt', // 唯一 id
        //   entry: 'time-mgt/micro', // html entry
        // },
        // {
        //   name: 'todo-list', // 唯一 id
        //   entry: 'todo-list/micro', // html entry
        // },
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
        // {
        //   path: '/flashcard/',
        //   microApp: 'flashcard',
        //   microAppProps: {
        //     wrapperClassName: 'load-wrap',
        //     className: 'root-slave',
        //     autoSetLoading: true,
        //   },
        // },
        // {
        //   path: '/time-mgt/',
        //   microApp: 'time-mgt',
        //   microAppProps: {
        //     wrapperClassName: 'load-wrap',
        //     className: 'root-slave',
        //     autoSetLoading: true,
        //   },
        // },
        // {
        //   path: '/todo-list/',
        //   microApp: 'todo-list',
        //   microAppProps: {
        //     wrapperClassName: 'load-wrap',
        //     className: 'root-slave',
        //     autoSetLoading: true,
        //   },
        // },
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
  devServer: {
    port: 80,
    proxy: {
      '/api/user-center': {
        target: 'http://user-center-go-dev',
        changeOrigin: true,
        pathRewrite: {
          '/api/user-center': '',
        },
      },
      '/micro/user-center': {
        target: 'http://user-center-umi-dev',
        changeOrigin: true,
        pathRewrite: {
          '/micro/user-center': '',
        },
      },
    },
  },
  metas: [
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    { name: 'browsermode', content: 'application' },
    { name: 'full-screen', content: 'yes' },
    { name: 'x5-fullscreen', content: 'true' },
    { name: 'x5-page-mode', content: 'app' },
    { name: '360-fullscreen', content: 'true' },
  ],
});
