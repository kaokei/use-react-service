import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@kaokei/use-react-service',
  description:
    'Lightweight react state management with dependency injection, inspired by Angular services.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Note', link: '/note/01.实现方案' },
    ],

    sidebar: {
      '/note/': [
        {
          text: 'Note',
          items: [
            { text: '实现方案', link: '/note/01.实现方案' },
            { text: '最终方案', link: '/note/02.最终方案' },
            { text: 'App相关API', link: '/note/03.App相关API' },
            { text: '基本命令', link: '/note/99.基本命令' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaokei/use-react-service' },
    ],
  },
});
