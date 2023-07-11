import{_ as s,o as e,c as n,U as a}from"./chunks/framework.5c992faa.js";const _=JSON.parse('{"title":"项目结构规范","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/vue3-template/structure.md","filePath":"engineer/vue3-template/structure.md","lastUpdated":1689052576000}'),l={name:"engineer/vue3-template/structure.md"},p=a(`<h1 id="项目结构规范" tabindex="-1">项目结构规范 <a class="header-anchor" href="#项目结构规范" aria-label="Permalink to &quot;项目结构规范&quot;">​</a></h1><p>项目结构规范包括文件命名、文件目录组织方式。</p><p>一个项目的文件结构就像是一本书的目录，是其他开发者了解项目最快的方法。代码的组织方式，也是项目架构设计的体现，比如如何划分视图层、控制层等。如果你是项目的创建者，那么你需要好好设计项目的文件结构和代码的组织方式，框架搭好了，再加砖添瓦就容易了。如果你是项目的维护者，那么你需要遵守项目的文件结构规范，风格统一了后续才好维护，同时也避免了公共函数\\组件重复开发的问题。</p><p>项目结构看似很简单，但确是在项目创建初期要仔细思考的问题。项目结构混乱，就如同一本书的目录混乱，目录混乱那么你项目的“读者”能快速争取的理解项目的内容吗？</p><p>建立统一的目录结构和规范的命名方式有助于其他人快速找到需要的资源。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├── src</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── apis</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── modules</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── common.ts      // 登录、退出等通用api</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── system.ts      // 系统管理部分api</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   └── \`xxx.ts\`       // 按业务划分其他api</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── assets</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── icons             // svg目录</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── images            // 图片目录，建议按业务划分</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── styles</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── reset.less     // 全局重置样式</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── element.less  // element相关重置样式</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── common.less    // 项目通用样式</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── main.less    // 汇总tailwind和其他样式，在main.ts中被引入</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   └── variable.less // 全局颜色变量</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── components</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── base              // 基础UI组件。功能比较单一的组件放在此目录，与其他功能0耦合性</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── business          // 复合型、业务型组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── config</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── const.ts          // 常量配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── domain.ts         // 各种url配置，如requestUrl、imageUrl、wsUrl、cdnUrl</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── enum.ts           // 前端枚举配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── regexp.ts         // 常用正则表达式</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── directives</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── modules</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   └── auth.ts       // 鉴权指令</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.ts          // 自定义指令全局注册</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── hooks</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── base              // 基础功能hook</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── business          // 业务功能hook</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── layouts               // 框架布局相关</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── components          // 基础框架，主要是用来渲染二级路由</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── HeaderBar.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   ├── SideBar.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   └── MenuItem.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.vue         // 比如门户、收银台等</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── mock</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── modules           // 按模块划分mock文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.ts          // 入口文件，引入各模板mock</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── model</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── common.ts         // 用户信息、菜单等公共interface</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── router</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── modules           // 各模板路由配置，输出：\`RouteRecordRaw[]\`类型</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.ts          // 路由入口文件，包含路由钩子</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── store</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── modules           // 各模块全局状态</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── utils                 // 工具函数库</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── views                 // 页面部分</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── App.vue               // 页面入口，一级路由在此处渲染</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── main.ts               // 逻辑入口，各种全局引入在此处处理</span></span>
<span class="line"><span style="color:#e1e4e8;">|   └── env.d.ts              // 全局TS变量声明</span></span>
<span class="line"><span style="color:#e1e4e8;">├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .env                      // 环境变量</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .env.development</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .env.production</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .prettierrc.js            // 代码格式化</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tailwind.config.js        // tailwind配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└── vite.config.js            // vite配置</span></span></code></pre></div>`,6),o=[p];function c(t,i,r,y,d,m){return e(),n("div",null,o)}const v=s(l,[["render",c]]);export{_ as __pageData,v as default};
