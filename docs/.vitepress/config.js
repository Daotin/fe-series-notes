import { defineConfig } from 'vitepress';
import { createSideBar } from './utils/sidebar';

// defineConfig可以给config配置增加类型提示
export default defineConfig({
  base: '/fe-series-notes/',

  title: '前端队长', // 所有文档的浏览器标签title
  description: '前端，JavaScript，Vue', // 会渲染成<meta>标签，SEO用

  // 最后更新时间
  lastUpdated: true,

  markdown: {
    theme: 'github-dark',
    // lineNumbers: true,
  },

  // head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: "Daotin's Blog",

    // 本地搜索
    search: {
      provider: 'local',
    },

    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: '更新日期', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,

    nav: [
      {
        text: '前端工程化',
        link: '/engineer/',
        activeMatch: '/engineer/',
      },
      {
        text: '性能优化',
        link: '/性能优化/',
      },
      {
        text: '浏览器工作原理',
        link: '/浏览器工作原理/',
      },
      {
        text: 'vue原理剖析',
        items: [
          {
            text: 'vue2原理剖析',
            link: '/vue2原理剖析/',
          },
          // {
          //   text: 'vue3原理剖析',
          //   link: '/vue3原理剖析/',
          // },
        ],
      },
      {
        text: 'TEST',
        items: [
          {
            text: 'Markdown Extensions',
            link: 'https://vitepress.dev/guide/markdown',
          },
        ],
      },
    ],

    sidebar: {
      '/engineer/': [
        {
          text: '从零搭建Vue3项目',
          collapsed: false,
          items: [
            {
              text: '开发工具推荐',
              link: '/engineer/vue3-template/develop-tool',
            },
            {
              text: '创建项目',
              link: '/engineer/vue3-template/create-project',
            },
            {
              text: '目录结构',
              link: '/engineer/vue3-template/structure',
            },
            {
              text: 'vite工程化配置',
              link: '/engineer/vue3-template/vite-config',
            },
            {
              text: '代码规范',
              link: '/engineer/vue3-template/format',
            },
            {
              text: 'git提交规范',
              link: 'https://daotin.github.io/posts/2022/08/10/git-commit%E8%A7%84%E8%8C%83.html',
            },
            {
              text: '引入ElementPlus组件库',
              link: '/engineer/vue3-template/element-plus',
            },
            {
              text: '引入TailWindCSS',
              link: '/engineer/vue3-template/tailwind',
            },
            {
              text: '配置vue-router',
              link: '/engineer/vue3-template/vue-router',
            },
            {
              text: '配置Pinia',
              link: '/engineer/vue3-template/pinia',
            },
            {
              text: '封装axios',
              link: '/engineer/vue3-template/axios',
            },
            {
              text: '配置mock',
              link: '/engineer/vue3-template/mock',
            },
            {
              text: '静态资源管理',
              link: '/engineer/vue3-template/assets',
            },
            {
              text: '界面布局layouts',
              link: '/engineer/vue3-template/layouts',
            },
            {
              text: '配置环境变量',
              link: '/engineer/vue3-template/environment',
            },
            {
              text: '权限控制',
              link: '/engineer/vue3-template/auth',
            },
          ],
        },
        {
          text: '前端脚手架CLI',
          collapsed: false,
          items: [
            {
              text: '从零开始构建脚手架',
              link: '/engineer/vue3-cli/从零开始构建脚手架',
            },
          ],
        },
        {
          text: '业务模块',
          collapsed: false,
          items: [
            {
              text: '登录注册',
              link: '/engineer/vue3-component/login',
            },
            {
              text: 'svg预览组件',
              link: '/engineer/vue3-component/svg预览组件',
            },
          ],
        },
        {
          text: '构建部署',
          collapsed: false,
          items: [
            {
              text: 'Nginx从入门到实践',
              link: '/engineer/cicd/Nginx从入门到实践',
            },
            {
              text: 'Docker从入门到实践',
              link: '/engineer/cicd/Docker从入门到实践',
            },
            {
              text: 'CICD从入门到实践',
              link: '/engineer/cicd/CICD从入门到实践',
            },
          ],
        },
        {
          text: '前端监控',
          collapsed: false,
          items: [
            {
              text: 'Sentry入门与实践',
              link: '/engineer/cicd/Sentry入门与实践',
            },
          ],
        },
        {
          text: '性能优化',
          collapsed: false,
          items: [
            {
              text: '首屏优化',
              link: '/engineer/performance/first-screen',
            },
            {
              text: '体积优化',
              link: '/engineer/performance/size-optimize',
            },
          ],
        },
      ],
      // '/browser-principle/': createSideBar('browser-principle'),
    },

    // 目录显示
    outline: 'deep',
    outlineTitle: 'TOC',

    // 去编辑
    editLink: {
      pattern: 'https://github.com/Daotin/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    // nav中显示社交图标
    socialLinks: [{ icon: 'github', link: 'https://github.com/daotin' }],

    // footer
    footer: {
      message: 'Released under the CC BY-NC-ND 3.0',
      copyright: 'Copyright © 2022-present Daotin',
    },
  },
});
