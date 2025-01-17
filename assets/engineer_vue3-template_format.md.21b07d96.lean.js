import{_ as n,o as a,c as l,S as p}from"./chunks/framework.d5a27ec8.js";const o="/fe-series-notes/assets/img-20240524160554.74a42ddf.png",e="/fe-series-notes/assets/img-20240524160502.b1a7b5f9.png",t="/fe-series-notes/assets/img-20240524160505.77420b94.png",E="/fe-series-notes/assets/img-20240524160553.5675dea7.png",q=JSON.parse('{"title":"代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/vue3-template/format.md","filePath":"engineer/vue3-template/format.md","lastUpdated":1725861252000}'),c={name:"engineer/vue3-template/format.md"};function r(i,s,y,F,u,d){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><h2 id="开启-vscode-插件推荐" tabindex="-1">开启 VSCode 插件推荐 <a class="header-anchor" href="#开启-vscode-插件推荐" aria-label="Permalink to &quot;开启 VSCode 插件推荐&quot;">​</a></h2><p>新增 <code>.vscode/extensions.json</code> 文件</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;recommendations&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;johnsoncodehk.volar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;johnsoncodehk.vscode-typescript-vue-plugin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;dbaeumer.vscode-eslint&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="项目工作区规范" tabindex="-1">项目工作区规范 <a class="header-anchor" href="#项目工作区规范" aria-label="Permalink to &quot;项目工作区规范&quot;">​</a></h2><p>新增 <code>.vscode/settings.json</code> 文件</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // eslint 保存格式化</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// &quot;eslint.enable&quot;: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// &quot;eslint.run&quot;: &quot;onType&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// &quot;eslint.options&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   &quot;extensions&quot;: [&quot;.js&quot;, &quot;.ts&quot;, &quot;.jsx&quot;, &quot;.tsx&quot;, &quot;.vue&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 编辑器保存格式化</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   &quot;source.fixAll&quot;: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   &quot;source.fixAll.eslint&quot;: true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 保存到额时候用使用 prettier进行格式化</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.formatOnSave&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 默认使用prittier作为格式化工具</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;[javascript]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;[typescript]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;[javascriptreact]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;[typescriptreact]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;[vue]&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 操作时作为单词分隔符的字符</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.wordSeparators&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\`~!@#%^&amp;*()=+[{]}</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">|;:&#39;</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">,.&lt;&gt;/?&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 一个制表符等于的空格数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.tabSize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 行尾字符</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files.eol&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="prettier-配置" tabindex="-1">Prettier 配置 <a class="header-anchor" href="#prettier-配置" aria-label="Permalink to &quot;Prettier 配置&quot;">​</a></h2><h3 id="如果只使用-prettier-不使用-eslint" tabindex="-1">如果只使用 Prettier 不使用 eslint <a class="header-anchor" href="#如果只使用-prettier-不使用-eslint" aria-label="Permalink to &quot;如果只使用 Prettier 不使用 eslint&quot;">​</a></h3><blockquote><p>Prettier 主要是为了代码风格的规范或统一，例如单引号还是双引号，每行最大长度，等号左右空格，使用 tab 还是 空格等等</p></blockquote><p>1、在 VSCode 中安装<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier</a>插件</p><p>2、新增<code>.prettierrc.js</code>文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 超过多少字符后换行</span></span>
<span class="line"><span style="color:#E1E4E8;">  printWidth: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用tab缩进还是空格</span></span>
<span class="line"><span style="color:#E1E4E8;">  useTabs: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">  tabWidth: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 行末分号</span></span>
<span class="line"><span style="color:#E1E4E8;">  semi: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleQuote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 是否使用尾逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">  trailingComma: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 对象或数组末尾加逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// &gt; 标签放在最后一行的末尾，而不是单独放在下一行</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxBracketSameLine: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。 alwaysz:总是带括号，avoid：省略括号</span></span>
<span class="line"><span style="color:#E1E4E8;">  arrowParens: </span><span style="color:#9ECBFF;">&#39;avoid&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 仅在需要时为对象的键添加引号，如果至少一个键需要引号，则所有键都用引号</span></span>
<span class="line"><span style="color:#E1E4E8;">  quoteProps: </span><span style="color:#9ECBFF;">&#39;consistent&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在对象的大括号内添加空格</span></span>
<span class="line"><span style="color:#E1E4E8;">  bracketSpacing: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 将多行元素的结束标签放在最后一行的末尾，而不是单独占一行</span></span>
<span class="line"><span style="color:#E1E4E8;">  bracketSameLine: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 保持文本换行符的处理方式不变</span></span>
<span class="line"><span style="color:#E1E4E8;">  proseWrap: </span><span style="color:#9ECBFF;">&#39;preserve&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//html存在空格是不敏感的</span></span>
<span class="line"><span style="color:#E1E4E8;">  htmlWhitespaceSensitivity: </span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在Vue文件中的&lt;script&gt;和&lt;style&gt;标签内缩进代码</span></span>
<span class="line"><span style="color:#E1E4E8;">  vueIndentScriptAndStyle: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自动检测并使用文件中已有的行尾样式，作为行结束符</span></span>
<span class="line"><span style="color:#E1E4E8;">  endOfLine: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自动格式化嵌入的代码块</span></span>
<span class="line"><span style="color:#E1E4E8;">  embeddedLanguageFormatting: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 每行单个HTML属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleAttributePerLine: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>3、新增<code>.prettierignore</code>文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;">.local</span></span>
<span class="line"><span style="color:#e1e4e8;">.output.js</span></span>
<span class="line"><span style="color:#e1e4e8;">/node_modules/**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**/*.svg</span></span>
<span class="line"><span style="color:#e1e4e8;">**/*.sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/public/*</span></span></code></pre></div><h4 id="idea-配置-prettier" tabindex="-1">idea 配置 Prettier <a class="header-anchor" href="#idea-配置-prettier" aria-label="Permalink to &quot;idea 配置 Prettier&quot;">​</a></h4><p>1、下载 prettier 插件 <img src="`+o+'" alt=""></p><p>2、配置</p><p><img src="'+e+'" alt=""></p><p>3、代码的右键就可以手动格式化了，当然，可以设置保存时自动格式化。</p><p><img src="'+t+'" alt=""></p><p><img src="'+E+`" alt=""></p><h3 id="如果使用了-eslint-规则校验" tabindex="-1">如果使用了 eslint 规则校验 <a class="header-anchor" href="#如果使用了-eslint-规则校验" aria-label="Permalink to &quot;如果使用了 eslint 规则校验&quot;">​</a></h3><p>上面的配置均可忽略，包括不安装 vscode 的 Prettier 插件。</p><h2 id="eslint-配置" tabindex="-1">ESLint 配置 <a class="header-anchor" href="#eslint-配置" aria-label="Permalink to &quot;ESLint 配置&quot;">​</a></h2><blockquote><p>ESLint 主要是为了做代码检测，例如未使用的变量，未定义的引用，比较时使用 ===，禁止不必要的括号等等</p></blockquote><h3 id="如果只使用-prettier-不使用-eslint-1" tabindex="-1">如果只使用 Prettier 不使用 eslint <a class="header-anchor" href="#如果只使用-prettier-不使用-eslint-1" aria-label="Permalink to &quot;如果只使用 Prettier 不使用 eslint&quot;">​</a></h3><p>新增 <code>.eslintrc.cjs</code> 文件，并配置规则，关闭 prettier 的警告：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">/* eslint-env node */</span></span>
<span class="line"><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@rushstack/eslint-patch/modern-module-resolution&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prettier/prettier&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="如果使用了-eslint-规则校验-1" tabindex="-1">如果使用了 eslint 规则校验 <a class="header-anchor" href="#如果使用了-eslint-规则校验-1" aria-label="Permalink to &quot;如果使用了 eslint 规则校验&quot;">​</a></h3><p>1、安装插件</p><blockquote><p>需要安装 9 个，别怕都是开发才会使用，不会打包到生产环境</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier vue-eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript</span></span></code></pre></div><p>2、新增 <code>.eslintrc.js</code> 文件，并配置规则：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  root: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    node: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-essential&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;eslint:recommended&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;@vue/typescript/recommended&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;plugin:prettier/recommended&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaVersion: </span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 避免同时使用多个三目运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-nested-ternary&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 单行注释使用 \`//\`，注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;spaced-comment&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;always&#39;</span><span style="color:#E1E4E8;">, { markers: [</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">] }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;line-comment-position&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, { position: </span><span style="color:#9ECBFF;">&#39;above&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 未使用的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/no-unused-vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以使用 any</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/no-explicit-any&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 类型命名规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/naming-convention&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;interface&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: [</span><span style="color:#9ECBFF;">&#39;PascalCase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        custom: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          regex: </span><span style="color:#9ECBFF;">&#39;^I[A-Z]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          match: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;typeAlias&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: [</span><span style="color:#9ECBFF;">&#39;PascalCase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        custom: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          regex: </span><span style="color:#9ECBFF;">&#39;^T[A-Z]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          match: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;class&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: [</span><span style="color:#9ECBFF;">&#39;PascalCase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;variable&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        modifiers: [</span><span style="color:#9ECBFF;">&#39;global&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;const&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: [</span><span style="color:#9ECBFF;">&#39;PascalCase&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;UPPER_CASE&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;variable&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: [</span><span style="color:#9ECBFF;">&#39;camelCase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 枚举需要以 Enum 开头</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;enum&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: [</span><span style="color:#9ECBFF;">&#39;PascalCase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        custom: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          regex: </span><span style="color:#9ECBFF;">&#39;^Enum[A-Z]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          match: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 类名使用大驼峰</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/class-name-casing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 多行注释使用 /** ... */ 风格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;multiline-comment-style&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;starred-block&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 禁用组件名必须多个单词</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;vue/multi-word-component-names&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;prettier/prettier&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 超过多少字符后换行</span></span>
<span class="line"><span style="color:#E1E4E8;">        printWidth: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 行末分号</span></span>
<span class="line"><span style="color:#E1E4E8;">        semi: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">        singleQuote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">        tabWidth: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 使用tab缩进还是空格</span></span>
<span class="line"><span style="color:#E1E4E8;">        useTabs: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否使用尾逗号</span></span>
<span class="line"><span style="color:#E1E4E8;">        trailingComma: </span><span style="color:#9ECBFF;">&#39;es5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// &gt; 标签放在最后一行的末尾，而不是单独放在下一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        jsxBracketSameLine: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。 alwaysz:总是带括号，avoid：省略括号</span></span>
<span class="line"><span style="color:#E1E4E8;">        arrowParens: </span><span style="color:#9ECBFF;">&#39;avoid&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Prettier 使用与你的项目中现有的换行符一致</span></span>
<span class="line"><span style="color:#E1E4E8;">        endOfLine: </span><span style="color:#9ECBFF;">&#39;auto&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 添加 overrides，忽略vue文件中的命名规则</span></span>
<span class="line"><span style="color:#E1E4E8;">  overrides: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: [</span><span style="color:#9ECBFF;">&#39;*.vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/naming-convention&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            selector: [</span><span style="color:#9ECBFF;">&#39;variable&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: [</span><span style="color:#9ECBFF;">&#39;camelCase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>然后，可以在 package.json 中添加下面指令，用来检测和修复代码的 eslint 错误：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;lint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint --ext .js,.ts,.vue --ignore-path .gitignore src/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;lint:fix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint --ext .js,.ts,.vue --ignore-path .gitignore src/ --fix&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>需要注意的是，<code>eslint --fix</code> 不能修复所有的问题。它主要用于自动修复那些可以安全地更改的问题，例如缩进、空格、换行符、引号类型等。这些问题通常与代码格式有关，而不涉及代码逻辑。</p><p>对于一些可能需要更复杂的逻辑或代码结构调整的问题，如注释位置、变量未使用、变量未声明等，eslint 通常无法自动修复。这是因为自动修复这些问题可能会引入新的错误或改变程序的行为，所以需要开发者手动检查并修复这些问题。</p></div><p>或者使用<code>ctrl+shift+p</code>打开 vscode 控制台，通过<code>ESLint: Fix all auto-fixable Problems</code> 进行修复当前代码。</p><p>VSCode 的 ESLint 插件中的 <code>ESLint: Fix all auto-fixable Problems</code> 命令底层调用的就是 <code>eslint --fix</code> 指令。</p><p>当你在 VSCode 中使用这个命令时，插件会针对当前打开的文件运行 eslint --fix，并尝试自动修复所有可以修复的问题。这与在命令行中使用 npm run lint:fix 类似，只是作用范围限于当前打开的文件，而不是整个项目。</p>`,41)]))}const m=n(c,[["render",r]]);export{q as __pageData,m as default};
