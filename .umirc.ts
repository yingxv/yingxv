import { defineConfig } from 'umi';
import base from './src/js-sdk/configs/.umirc.default';

export default defineConfig({
  ...base,
  qiankun: void 0,
  externals: {},
  scripts: [],
  title: '盈虚',
  favicon: '/favicon.ico',
  links: [
    {
      rel: 'manifest',
      href: '/manifest.webmanifest',
    },
  ],
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
      '/api/todo-list': {
        target: 'http://localhost:8040',
        changeOrigin: true,
        pathRewrite: {
          '/api/todo-list': '',
        },
      },
      '/api/time-mgt': {
        target: 'http://localhost:8050',
        changeOrigin: true,
        pathRewrite: {
          '/api/time-mgt': '',
        },
      },
      '/api/stock': {
        target: 'http://localhost:8060',
        changeOrigin: true,
        pathRewrite: {
          '/api/stock': '',
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
