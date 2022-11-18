import frontendSidebar from "./sidebar/frontend.js";

export default {
  base: "/blog/",

  title: "前端队长小冯", // 所有文档的浏览器标签title
  description: "前端，JavaScript，Vue", // 会渲染成<meta>标签，SEO用

  // head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    siteTitle: "Daotin's Blog",
    logo: "/logo.jpg",

    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,

    nav: [{ text: "前端文章", link: "/frontend/", activeMatch: "/frontend/" }],

    sidebar: {
      "/frontend/": frontendSidebar,
    },

    socialLinks: [{ icon: "github", link: "https://github.com/daotin" }],

    footer: {
      message: "Released under the CC BY-NC-ND 3.0",
      copyright: "Copyright © 2022-present Daotin",
    },
  },
};
