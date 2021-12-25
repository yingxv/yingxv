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
    master: {},
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
          microAppProps: { className: 'root-slave' },
        },
        {
          path: '/flashcard/',
          microApp: 'flashcard',
          // microAppProps: {
          //   wrapperClassName: 'load-wrap',
          //   className: 'root-slave',
          //   autoSetLoading: true,
          // },
        },
        {
          path: '/time-mgt/',
          microApp: 'time-mgt',
          // microAppProps: {
          //   wrapperClassName: 'load-wrap',
          //   className: 'root-slave',
          //   autoSetLoading: true,
          // },
        },
        {
          path: '/todo-list/',
          microApp: 'todo-list',
          // microAppProps: {
          //   wrapperClassName: 'load-wrap',
          //   className: 'root-slave',
          //   autoSetLoading: true,
          // },
        },
        {
          path: '/stock/',
          microApp: 'stock',
          // microAppProps: {
          //   wrapperClassName: 'load-wrap',
          //   className: 'root-slave',
          //   autoSetLoading: true,
          // },
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
  devServer: {
    port: 80,
    proxy: {
      '/api/user-center': {
        // target: 'http://user-center-go-dev',
        target: 'http://localhost:8088',
        changeOrigin: true,
        pathRewrite: {
          '/api/user-center': '',
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
