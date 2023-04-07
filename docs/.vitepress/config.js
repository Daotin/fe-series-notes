import { defineConfig } from "vitepress";
import { createSideBar } from "./utils/sidebar";

// defineConfig可以给config配置增加类型提示
export default defineConfig({
  base: "/fe-series-notes/",

  title: "前端队长小冯", // 所有文档的浏览器标签title
  description: "前端，JavaScript，Vue", // 会渲染成<meta>标签，SEO用

  // 最后更新时间
  lastUpdated: true,

  markdown: {
    theme: "github-dark",
    // lineNumbers: true,
  },

  // head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    logo: "/logo.jpg",
    siteTitle: "Daotin's Blog",

    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: "更新日期", // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,

    nav: [
      {
        text: "从零搭建Vue3项目",
        link: "/engineer/",
        activeMatch: "/engineer/",
      },
      { text: "效率工具", link: "/tools/", activeMatch: "/tools/" },
      { text: "前端部署", link: "/deploy/", activeMatch: "/deploy/" },
    ],

    sidebar: {
      "/engineer/": [
        {
          text: "基础设施",
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: "开发工具推荐",
              link: "/engineer/develop-tool",
            },
            {
              text: "创建项目",
              link: "/engineer/create-project",
            },
            {
              text: "目录结构",
              link: "/engineer/structure",
            },
            {
              text: "vite工程化配置",
              link: "/engineer/vite-config",
            },
            {
              text: "代码规范",
              link: "/engineer/format",
            },
            {
              text: "git提交规范",
              link: "https://daotin.github.io/posts/2022/08/10/git-commit%E8%A7%84%E8%8C%83.html",
            },
            {
              text: "引入ElementPlus组件库",
              link: "/engineer/element-plus",
            },
            {
              text: "引入TailWindCSS",
              link: "/engineer/tailwind",
            },
            {
              text: "配置vue-router",
              link: "/engineer/vue-router",
            },
            {
              text: "配置Pinia",
              link: "/engineer/pinia",
            },
            {
              text: "封装axios",
              link: "/engineer/axios",
            },
            {
              text: "配置mock",
              link: "/engineer/mock",
            },
            {
              text: "静态资源管理",
              link: "/engineer/assets",
            },
            {
              text: "界面布局layouts",
              link: "/engineer/layouts",
            },
            {
              text: "配置环境变量",
              link: "/engineer/environment",
            },
            {
              text: "权限控制",
              link: "/engineer/auth",
            },
          ],
        },
        {
          text: "业务模块",
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: "登录注册",
              link: "/engineer/login",
            },
          ],
        },
        {
          text: "性能优化",
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: "首屏优化",
              link: "/engineer/first-screen",
            },
          ],
        },
      ],
      "/tools/": createSideBar("tools"),
      "/deploy/": createSideBar("deploy"),
    },

    // 目录显示
    outline: "deep",
    outlineTitle: "TOC",

    // 去编辑
    editLink: {
      pattern: "https://github.com/Daotin/blog/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    // nav中显示社交图标
    socialLinks: [{ icon: "github", link: "https://github.com/daotin" }],

    // footer
    footer: {
      message: "Released under the CC BY-NC-ND 3.0",
      copyright: "Copyright © 2022-present Daotin",
    },
  },
});
