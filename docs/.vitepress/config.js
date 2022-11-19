import { defineConfig } from "vitepress";
import { createSideBar } from "./utils/sidebar";

// defineConfig可以给config配置增加类型提示
export default defineConfig({
  base: "/blog/",

  title: "前端队长小冯", // 所有文档的浏览器标签title
  description: "前端，JavaScript，Vue", // 会渲染成<meta>标签，SEO用

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
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,

    nav: [
      { text: "前端文章", link: "/frontend/", activeMatch: "/frontend/" },
      { text: "随笔", link: "/essay/", activeMatch: "/essay/" },
    ],

    sidebar: {
      "/frontend/": createSideBar("frontend"),
      "/essay/": createSideBar("essay"),
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
