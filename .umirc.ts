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
        ...[
          {
            path: '/user-center/',
            microApp: 'user-center',
          },
          {
            path: '/flashcard/',
            microApp: 'flashcard',
          },
          {
            path: '/time-mgt/',
            microApp: 'time-mgt',
          },
          {
            path: '/todo-list/',
            microApp: 'todo-list',
          },
          {
            path: '/stock/',
            microApp: 'stock',
          },
        ].map((r) => ({
          ...r,
          microAppProps: {
            className: 'root-slave',
            wrapperClassName: 'load-wrap',
            autoSetLoading: true,
          },
        })),
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
    port: 8010,
    proxy: {
      '/api/user-center': {
        target: 'http://localhost:8020',
        changeOrigin: true,
        pathRewrite: {
          '/api/user-center': '',
        },
      },
      '/api/flashcard': {
        target: 'http://localhost:8030',
        changeOrigin: true,
        pathRewrite: {
          '/api/flashcard': '',
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
