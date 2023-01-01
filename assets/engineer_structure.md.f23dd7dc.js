import{_ as s,o as n,c as a,a as l}from"./app.86271df5.js";const _=JSON.parse('{"title":"\u9879\u76EE\u7ED3\u6784\u89C4\u8303","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/structure.md","lastUpdated":1671634209000}'),p={name:"engineer/structure.md"},e=l(`<h1 id="\u9879\u76EE\u7ED3\u6784\u89C4\u8303" tabindex="-1">\u9879\u76EE\u7ED3\u6784\u89C4\u8303 <a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784\u89C4\u8303" aria-hidden="true">#</a></h1><p>\u9879\u76EE\u7ED3\u6784\u89C4\u8303\u5305\u62EC\u6587\u4EF6\u547D\u540D\u3001\u6587\u4EF6\u76EE\u5F55\u7EC4\u7EC7\u65B9\u5F0F\u3002</p><p>\u4E00\u4E2A\u9879\u76EE\u7684\u6587\u4EF6\u7ED3\u6784\u5C31\u50CF\u662F\u4E00\u672C\u4E66\u7684\u76EE\u5F55\uFF0C\u662F\u5176\u4ED6\u5F00\u53D1\u8005\u4E86\u89E3\u9879\u76EE\u6700\u5FEB\u7684\u65B9\u6CD5\u3002\u4EE3\u7801\u7684\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u4E5F\u662F\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1\u7684\u4F53\u73B0\uFF0C\u6BD4\u5982\u5982\u4F55\u5212\u5206\u89C6\u56FE\u5C42\u3001\u63A7\u5236\u5C42\u7B49\u3002\u5982\u679C\u4F60\u662F\u9879\u76EE\u7684\u521B\u5EFA\u8005\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u597D\u597D\u8BBE\u8BA1\u9879\u76EE\u7684\u6587\u4EF6\u7ED3\u6784\u548C\u4EE3\u7801\u7684\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u6846\u67B6\u642D\u597D\u4E86\uFF0C\u518D\u52A0\u7816\u6DFB\u74E6\u5C31\u5BB9\u6613\u4E86\u3002\u5982\u679C\u4F60\u662F\u9879\u76EE\u7684\u7EF4\u62A4\u8005\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u9075\u5B88\u9879\u76EE\u7684\u6587\u4EF6\u7ED3\u6784\u89C4\u8303\uFF0C\u98CE\u683C\u7EDF\u4E00\u4E86\u540E\u7EED\u624D\u597D\u7EF4\u62A4\uFF0C\u540C\u65F6\u4E5F\u907F\u514D\u4E86\u516C\u5171\u51FD\u6570\\\u7EC4\u4EF6\u91CD\u590D\u5F00\u53D1\u7684\u95EE\u9898\u3002</p><p>\u9879\u76EE\u7ED3\u6784\u770B\u4F3C\u5F88\u7B80\u5355\uFF0C\u4F46\u786E\u662F\u5728\u9879\u76EE\u521B\u5EFA\u521D\u671F\u8981\u4ED4\u7EC6\u601D\u8003\u7684\u95EE\u9898\u3002\u9879\u76EE\u7ED3\u6784\u6DF7\u4E71\uFF0C\u5C31\u5982\u540C\u4E00\u672C\u4E66\u7684\u76EE\u5F55\u6DF7\u4E71\uFF0C\u76EE\u5F55\u6DF7\u4E71\u90A3\u4E48\u4F60\u9879\u76EE\u7684\u201C\u8BFB\u8005\u201D\u80FD\u5FEB\u901F\u4E89\u53D6\u7684\u7406\u89E3\u9879\u76EE\u7684\u5185\u5BB9\u5417\uFF1F</p><p>\u5EFA\u7ACB\u7EDF\u4E00\u7684\u76EE\u5F55\u7ED3\u6784\u548C\u89C4\u8303\u7684\u547D\u540D\u65B9\u5F0F\u6709\u52A9\u4E8E\u5176\u4ED6\u4EBA\u5FEB\u901F\u627E\u5230\u9700\u8981\u7684\u8D44\u6E90\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#c9d1d9;">.</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 apis</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 modules</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 common.ts      // \u767B\u5F55\u3001\u9000\u51FA\u7B49\u901A\u7528api</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 system.ts      // \u7CFB\u7EDF\u7BA1\u7406\u90E8\u5206api</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u2514\u2500\u2500 \`xxx.ts\`       // \u6309\u4E1A\u52A1\u5212\u5206\u5176\u4ED6api</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 index.ts</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 assets</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 icons             // svg\u76EE\u5F55</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 images            // \u56FE\u7247\u76EE\u5F55\uFF0C\u5EFA\u8BAE\u6309\u4E1A\u52A1\u5212\u5206</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 styles</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 reset.less     // \u5168\u5C40\u91CD\u7F6E\u6837\u5F0F</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 element.less  // element\u76F8\u5173\u91CD\u7F6E\u6837\u5F0F</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 common.less    // \u9879\u76EE\u901A\u7528\u6837\u5F0F</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 main.less    // \u6C47\u603Btailwind\u548C\u5176\u4ED6\u6837\u5F0F\uFF0C\u5728main.ts\u4E2D\u88AB\u5F15\u5165</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u2514\u2500\u2500 variable.less // \u5168\u5C40\u989C\u8272\u53D8\u91CF</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 components</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 base              // \u57FA\u7840UI\u7EC4\u4EF6\u3002\u529F\u80FD\u6BD4\u8F83\u5355\u4E00\u7684\u7EC4\u4EF6\u653E\u5728\u6B64\u76EE\u5F55\uFF0C\u4E0E\u5176\u4ED6\u529F\u80FD0\u8026\u5408\u6027</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 business          // \u590D\u5408\u578B\u3001\u4E1A\u52A1\u578B\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 config</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 const.ts          // \u5E38\u91CF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 domain.ts         // \u5404\u79CDurl\u914D\u7F6E\uFF0C\u5982requestUrl\u3001imageUrl\u3001wsUrl\u3001cdnUrl</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 enum.ts           // \u524D\u7AEF\u679A\u4E3E\u914D\u7F6E</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 regexp.ts         // \u5E38\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 directives</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 modules</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u2514\u2500\u2500 auth.ts       // \u9274\u6743\u6307\u4EE4</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 index.ts          // \u81EA\u5B9A\u4E49\u6307\u4EE4\u5168\u5C40\u6CE8\u518C</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 hooks</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 base              // \u57FA\u7840\u529F\u80FDhook</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 business          // \u4E1A\u52A1\u529F\u80FDhook</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 layouts               // \u6846\u67B6\u5E03\u5C40\u76F8\u5173</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 components          // \u57FA\u7840\u6846\u67B6\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u6E32\u67D3\u4E8C\u7EA7\u8DEF\u7531</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 HeaderBar.ts</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u251C\u2500\u2500 SideBar.ts</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2502   \u2514\u2500\u2500 MenuItem.ts</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 index.vue         // \u6BD4\u5982\u95E8\u6237\u3001\u6536\u94F6\u53F0\u7B49</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 mock</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 modules           // \u6309\u6A21\u5757\u5212\u5206mock\u6587\u4EF6</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 index.ts          // \u5165\u53E3\u6587\u4EF6\uFF0C\u5F15\u5165\u5404\u6A21\u677Fmock</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 model</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 common.ts         // \u7528\u6237\u4FE1\u606F\u3001\u83DC\u5355\u7B49\u516C\u5171interface</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 router</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 modules           // \u5404\u6A21\u677F\u8DEF\u7531\u914D\u7F6E\uFF0C\u8F93\u51FA\uFF1A\`RouteRecordRaw[]\`\u7C7B\u578B</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 index.ts          // \u8DEF\u7531\u5165\u53E3\u6587\u4EF6\uFF0C\u5305\u542B\u8DEF\u7531\u94A9\u5B50</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 store</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u251C\u2500\u2500 modules           // \u5404\u6A21\u5757\u5168\u5C40\u72B6\u6001</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u2502   \u2514\u2500\u2500 index.ts</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 utils                 // \u5DE5\u5177\u51FD\u6570\u5E93</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 views                 // \u9875\u9762\u90E8\u5206</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 App.vue               // \u9875\u9762\u5165\u53E3\uFF0C\u4E00\u7EA7\u8DEF\u7531\u5728\u6B64\u5904\u6E32\u67D3</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502   \u251C\u2500\u2500 main.ts               // \u903B\u8F91\u5165\u53E3\uFF0C\u5404\u79CD\u5168\u5C40\u5F15\u5165\u5728\u6B64\u5904\u5904\u7406</span></span>
<span class="line"><span style="color:#c9d1d9;">|   \u2514\u2500\u2500 env.d.ts              // \u5168\u5C40TS\u53D8\u91CF\u58F0\u660E</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 .env                      // \u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 .env.development</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 .env.production</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 .prettierrc.js            // \u4EE3\u7801\u683C\u5F0F\u5316</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500\u2500 tailwind.config.js        // tailwind\u914D\u7F6E</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2514\u2500\u2500 vite.config.js            // vite\u914D\u7F6E</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div>`,6),c=[e];function o(d,t,i,r,y,m){return n(),a("div",null,c)}const v=s(p,[["render",o]]);export{_ as __pageData,v as default};
