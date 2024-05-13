import{_ as s,o as n,c as a,V as l}from"./chunks/framework.ff44d2fd.js";const p="/fe-series-notes/assets/img-20240513110552.72887129.png",o="/fe-series-notes/assets/img-20240513130540-1.ecaf9584.png",e="/fe-series-notes/assets/img-20240513130549.34cfec33.png",t="/fe-series-notes/assets/img-20240513130585.62c5cdee.png",c="/fe-series-notes/assets/img-20240513130503.fd0c0134.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"webpack通关秘籍/webpack常用配置.md","filePath":"webpack通关秘籍/webpack常用配置.md","lastUpdated":1715586562000}'),E={name:"webpack通关秘籍/webpack常用配置.md"},r=l(`<h2 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-label="Permalink to &quot;entry&quot;">​</a></h2><p>指定 webpack 的打包⼊⼝</p><p>单⼊⼝：entry 是⼀个字符串, 多⼊⼝：entry 是⼀个对象</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./path/to/my/entry/file.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app: </span><span style="color:#9ECBFF;">&#39;./src/app.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    adminApp: </span><span style="color:#9ECBFF;">&#39;./src/adminApp.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="output" tabindex="-1">output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;output&quot;">​</a></h2><p>告诉 webpack 如何将编译后的⽂件输出到磁盘。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	entry: </span><span style="color:#9ECBFF;">&#39;./path/to/my/entry/file.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		filename: </span><span style="color:#9ECBFF;">&#39;bundle.js’</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		path: __dirname </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/dist&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多出口配置</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		app: </span><span style="color:#9ECBFF;">&#39;./src/app.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		search: </span><span style="color:#9ECBFF;">&#39;./src/search.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		filename: </span><span style="color:#9ECBFF;">&#39;[name].js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 通过占位符确保文件名称唯一</span></span>
<span class="line"><span style="color:#E1E4E8;">		path: __dirname </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/dist&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="loaders" tabindex="-1">loaders <a class="header-anchor" href="#loaders" aria-label="Permalink to &quot;loaders&quot;">​</a></h2><p>webpack 开箱即用只支持 JS 和 JSON 两种文件类型，通过 Loaders 去支持其它文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。</p><p>本身是一个函数，接受源文件作为参数，返回转换的结果。</p><p>语法：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">txt</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, use: </span><span style="color:#9ECBFF;">&#39;raw-loader&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// 需要先npm i raw-loader -D</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="plugins" tabindex="-1">plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;plugins&quot;">​</a></h2><p>插件⽤于 bundle ⽂件的优化，资源管理和环境变量注⼊,作⽤于整个构建过程。</p><p>比如打包前，删除 dist 目录，自动生成 dist 下 html 文件等一些不属于 loader 做的事情。</p><p>用法：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({ template: </span><span style="color:#9ECBFF;">&#39;./src/index.html&#39;</span><span style="color:#E1E4E8;"> })],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="常用-loader-和-plugin-配置" tabindex="-1">常用 loader 和 plugin 配置 <a class="header-anchor" href="#常用-loader-和-plugin-配置" aria-label="Permalink to &quot;常用 loader 和 plugin 配置&quot;">​</a></h3><blockquote><p>==注意：这些 loader 都需要先经过 npm i 安装！==</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 解析 ES6</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// css-loader ⽤于加载 .css ⽂件，并且转换成 commonjs 对象导出</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// style-loader 将导出的样式通过 &lt;style&gt; 标签插⼊到 head 中</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// loader加载的顺序是右边先执行！</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 解析less</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;less-loader&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 解析图片，字体首选url-loader或者file-loader，url-loader比file-loader多了options配置，可以设置较⼩资源⾃动 base64</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// test: /\\.woff|woff2|eot|ttf|otf)$/</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              limit: </span><span style="color:#79B8FF;">10240</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 10kB</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><blockquote><p>babel-loader 需要配置<code>.babelrc</code>：</p></blockquote><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;presets&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 一个配置集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;plugins&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;@babel/proposal-class-properties&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 单独的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="文件监听" tabindex="-1">文件监听 <a class="header-anchor" href="#文件监听" aria-label="Permalink to &quot;文件监听&quot;">​</a></h2><p>两种方式：</p><ul><li>启动 webpack 命令时，带上 --watch 参数</li><li>在配置 webpack.config.js 中设置 watch: true</li></ul><p>缺点：页面需要手动刷新。</p><p>原理：<strong>轮询判断⽂件的最后编辑时间是否变化。如果某个⽂件发⽣了变化，并不会⽴刻告诉监听者，⽽是先缓存起来，等 aggregateTimeout。</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.export </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//默认 false，也就是不开启</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//只有开启监听模式时，watchOptions才有意义</span></span>
<span class="line"><span style="color:#E1E4E8;">  wathcOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//默认为空，不监听的文件或者文件夹，支持正则匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">    ignored:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//监听到变化发生后会等300ms再去执行，默认300ms</span></span>
<span class="line"><span style="color:#E1E4E8;">    aggregateTimeout: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次</span></span>
<span class="line"><span style="color:#E1E4E8;">    poll: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="热更新" tabindex="-1">热更新 <a class="header-anchor" href="#热更新" aria-label="Permalink to &quot;热更新&quot;">​</a></h2><p>webpack-dev-server 优点：</p><ul><li>不需要手动刷新页面</li><li>文件修改后的编译不输出文件到硬盘，而是到内存，速度更快</li></ul><p>使用方式：使⽤ webpack 内置 HotModuleReplacementPlugin 插件，不需要额外安装。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">webpack</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> webpack.</span><span style="color:#B392F0;">HotModuleReplacementPlugin</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    contentBase: </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// webpack-dev-server服务的目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启热更新</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>另外，还有一个<code>webpack-dev-middleware</code>也可以热更新，当后端使用的是 Express 或另一个 Node.js 框架作为你的服务器，可以将 <code>webpack-dev-middleware</code> 集成到现有的 Node.js 服务器中，这样就不需要运行一个额外的服务器（如 <code>webpack-dev-server</code>）来处理前端的热更新。</p><p>但是，由于是前后端分离开发，专门让后端搞一个对后端来说没用的东西也不太合理，除非是前后端都是一个人开发。</p><p>所以，最好的选择还是 webpack-dev-server。</p><h3 id="热更新原理" tabindex="-1">热更新原理 <a class="header-anchor" href="#热更新原理" aria-label="Permalink to &quot;热更新原理&quot;">​</a></h3><p>首先来看看一张图，如下：</p><p><img src="`+p+'" alt=""></p><p>几个概念：</p><ul><li><code>Webpack Compile</code>：将 JS 源代码编译成 bundle.js</li><li><code>HMR Server</code>：websocket 服务端，用来将热更新后的文件输出给 HMR Runtime</li><li><code>Bundle Server</code>：静态资源文件服务器，提供文件访问路径</li><li><code>HMR Runtime</code>：websocket 客户端，会被注入到浏览器，监听服务端更新文件的消息（在 HMR Runtime 和 HMR Server 之间建立 websocket，即图上 4 号线，用于实时更新文件变化）</li><li><code>bundle.js</code>：构建输出的文件（包含具体的源代码和 websocket 客户端）</li></ul><p>上面图中，可以分成两个阶段：启动阶段和热更新阶段。</p><h4 id="启动阶段-1-2-a-b" tabindex="-1">启动阶段：1-2-A-B <a class="header-anchor" href="#启动阶段-1-2-a-b" aria-label="Permalink to &quot;启动阶段：1-2-A-B&quot;">​</a></h4><p>主要过程包括以下几个步骤：</p><ol><li><strong>Webpack 编译</strong>：Webpack 开始编译项目源代码和 HMR Runtime，生成 bundle 文件。</li><li><strong>文件传输</strong>：编译后的 bundle 文件传输到 Bundle Server，即静态资源服务器。</li><li><strong>服务启动</strong>：Webpack-dev-server 启动并运行，包括一个提供静态资源的 Express 服务器和一个 WebSocket 服务器（HMR Server）。</li><li><strong>建立连接</strong>：浏览器加载 bundle 文件，并通过 HMR Runtime 与 HMR Server 建立 WebSocket 连接。</li></ol><p>这个过程确保了应用启动时，所有必要的资源都被加载并准备好，同时建立了必要的实时更新机制。</p><h4 id="热更新阶段-1-2-3-4" tabindex="-1">热更新阶段：1-2-3-4 <a class="header-anchor" href="#热更新阶段-1-2-3-4" aria-label="Permalink to &quot;热更新阶段：1-2-3-4&quot;">​</a></h4><p>在热更新阶段的流程包括以下几个关键步骤：</p><ol><li><strong>文件监听和编译</strong>：Webpack 监听到文件的变化，对改动的文件重新编译，并生成新的 bundle 和和补丁文件，以及生成唯一的 hash 值，作为下一次热更新的标识。</li></ol><p>记住两个 hash，一个是上一次的 hash 为 1240，一个为本次更新的 hash 为 2381。</p><p>补丁文件包括更新内容的（hot-update.js）和 manifest 文件（包含变化描述的 hot-update.json）。</p><p><img src="'+o+'" alt=""></p><ol start="2"><li><strong>通知客户端</strong>：当文件变化的时候，HMR Server 通过 WebSocket 连接向浏览器的 HMR Runtime 发送通知，告知有模块更新。websocket 服务器会向浏览器推送一条消息（如下图），data 为最新改动的 hash 值。</li></ol><p><img src="'+e+'" alt=""></p><p>但是，这个最新的 hash 只是为了下一次更新使用的，而不是本次更新使用，本次更新使用的是上一次的 hash，也就是 hash 为 1240 的。</p><ol start="3"><li><strong>请求文件</strong>：此时，浏览器会创建一个 ajax 去想服务端请求说明变化内容的 manifest 文件，为了获得改动的模块名，在返回值的 c 字段可以拿到。（h 为最新的 hash 值，浏览器会默默保存，为了下次文件更新使用）</li></ol><p><img src="'+t+'" alt=""></p><ol start="4"><li>拿到了更新的模块名，结合之前的 hash，再发起 ajax 请求获取改动的文件内容，然后触发 render 流程，实现局部热加载。</li></ol><p><img src="'+c+`" alt=""></p><p>参考：</p><ul><li><a href="https://juejin.cn/post/6844904134697549832" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904134697549832</a></li><li><a href="https://vue3js.cn/interview/webpack/HMR.html" target="_blank" rel="noreferrer">https://vue3js.cn/interview/webpack/HMR.html</a></li></ul><h2 id="文件指纹" tabindex="-1">文件指纹 <a class="header-anchor" href="#文件指纹" aria-label="Permalink to &quot;文件指纹&quot;">​</a></h2><p><strong>什么是文件指纹？</strong></p><p>源代码在 webpack 打包后，生成的带有 hash 的文件名和后缀的就是文件指纹。</p><p>文件指纹可以由以下占位符组成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">占位符名称	含义</span></span>
<span class="line"><span style="color:#e1e4e8;">ext	资源后缀名</span></span>
<span class="line"><span style="color:#e1e4e8;">name	文件名称</span></span>
<span class="line"><span style="color:#e1e4e8;">path	文件的相对路径</span></span>
<span class="line"><span style="color:#e1e4e8;">folder	文件所在的文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">hash	每次webpack构建时生成一个唯一的hash值</span></span>
<span class="line"><span style="color:#e1e4e8;">chunkhash	根据chunk生成hash值，来源于同一个chunk，则hash值就一样</span></span>
<span class="line"><span style="color:#e1e4e8;">contenthash	根据内容生成hash值，文件内容相同hash值就相同</span></span></code></pre></div><p>语法：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">filename</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;[name]_[chunkhash:8].js&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><p><strong>为什么要引入文件指纹？</strong></p><p>文件指纹（hashing）的引入主要是为了优化网络应用的缓存机制和提高资源加载效率。</p><p>在 Web 开发的早期阶段，当开发者更新网站上的 JavaScript、CSS 或其他静态资源时，用户的浏览器往往会因为缓存策略而继续使用旧版本的文件，导致网站显示不正常或功能异常。为了解决这个问题，引入文件指纹技术，通过在文件名中加入基于内容的唯一标识符（如哈希值），使得每次文件内容更新后文件名都会变化，从而强制浏览器加载新版本的文件，避免了缓存导致的问题。</p><p><strong>文件指纹分类</strong></p><ol><li><strong>Hash</strong>：针对整个构建过程生成的唯一标识。所有的输出文件都共享同一个<code>Hash</code>值。当任何一个文件修改，整个项目的 Hash 值将改变。适用于项目小或者不关注缓存优化时使用。</li><li><strong>Chunkhash</strong>：根据不同的入口文件（Entry）生成的标识，每个入口文件（及其依赖的文件）构建出的结果有独立的<code>Chunkhash</code>。适用于那些文件引用不经常变化的项目，可以更好地利用缓存。</li><li><strong>Contenthash</strong>：由文件内容产生的 Hash 值，仅当文件内容改变时<code>Contenthash</code>才会改变。这种方式特别适合用于 CSS 文件或其他在 Webpack 中单独抽离出的资源文件，确保内容实际改变时才重新请求文件。</li></ol><blockquote><p>注意： 如果你的 Webpack 配置只有一个 entry 点，且只生成一个 bundle 文件，那么使用<code>hash</code>和<code>chunkhash</code>生成的效果实际上是一样的。因为整个构建的输出仅有一个文件，所以无论使用哪种 hash 方法，该文件的 hash 值都会在内容变更后更新。</p><p>然而，一旦引入代码分割，生成多个 chunk（例如，通过动态导入或多个 entry 点），<code>hash</code>和<code>chunkhash</code>的行为就不再相同。 <code>hash</code>会为所有文件生成相同的 hash 值，导致任何一个文件的更改都会使所有文件的 hash 值变化；而<code>chunkhash</code>为每个独立的 chunk 生成独立的 hash 值，仅当特定 chunk 的内容变化时，该 chunk 的 hash 值才会更新，这样更利于缓存管理和减少不必要的下载。</p></blockquote><p><strong>各种文件指纹最佳实践</strong></p><p>一般使用 Chunkhash 和 Contenthash，Hash 的方式基本不使用。</p><p>在生产环境下，我们对打包的<strong>js 文件</strong>一般采用 <code>chunkhash</code>，对于<strong>css，图片、字体</strong>等静态文件，采用 <code>contenthash</code>，这样可以使得各个模块最小范围的改变打包 hash 值。</p><p>一方面，可以最大程度地利用浏览器缓存机制，提升用户的体验；另一方面，合理利用 hash 也减少了 webpack 再次打包所要处理的文件数量，提升了打包速度。</p><p><em>提问：如果使用只有一个 entry 入口，并且采用 chunkhash+代码拆分，如果此时打包成 bundle1 和 bundle2 两个模块，如果 bundle1 对应的源代码有修改，bundle2 打包后的 chunkhash 会改变吗？</em></p><p>在使用单个 entry 入口，并且通过代码拆分打包成<code>bundle1</code>和<code>bundle2</code>两个模块的情况下，如果<code>bundle1</code>的源代码有修改，通常<code>bundle2</code>打包后的<code>chunkhash</code>不会改变。<code>chunkhash</code>是基于 chunk 的内容生成的，所以只有当特定 chunk 的内容发生变化时，该 chunk 的 hash 值才会更新。如果<code>bundle2</code>的内容未发生改变，即使<code>bundle1</code>改变，<code>bundle2</code>的<code>chunkhash</code>也保持不变，这样有利于优化缓存和减少不必要的资源下载。</p><p>参考：</p><ul><li><a href="https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html</a></li><li><a href="https://juejin.cn/post/6971987696029794312" target="_blank" rel="noreferrer">https://juejin.cn/post/6971987696029794312</a></li></ul><h2 id="代码压缩" tabindex="-1">代码压缩 <a class="header-anchor" href="#代码压缩" aria-label="Permalink to &quot;代码压缩&quot;">​</a></h2><h3 id="html-压缩" tabindex="-1">html 压缩 <a class="header-anchor" href="#html-压缩" aria-label="Permalink to &quot;html 压缩&quot;">​</a></h3><p>安装 html-webpack-plugin，设置压缩参数。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src/index.html&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 模板文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 输出文件的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    chunks: [</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 指定要加入的entry中的chunk</span></span>
<span class="line"><span style="color:#E1E4E8;">    inject: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将所有资产注入给定的template或templateContent - 当传递true或&#39;body&#39;时，所有javascript资源将放置在body元素的底部。&#39;head&#39;将放置在head元素中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 更多配置：https://github.com/terser/html-minifier-terser#options-quick-reference</span></span>
<span class="line"><span style="color:#E1E4E8;">    minify: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      html5: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 根据HTML5规范解析输入</span></span>
<span class="line"><span style="color:#E1E4E8;">      collapseWhitespace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 折叠空白字符</span></span>
<span class="line"><span style="color:#E1E4E8;">      preserveLineBreaks: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 保留换行符</span></span>
<span class="line"><span style="color:#E1E4E8;">      minifyCSS: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 压缩页面CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">      minifyJS: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 压缩页面JS</span></span>
<span class="line"><span style="color:#E1E4E8;">      removeComments: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 移除注释</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><h3 id="css-压缩" tabindex="-1">css 压缩 <a class="header-anchor" href="#css-压缩" aria-label="Permalink to &quot;css 压缩&quot;">​</a></h3><p>使⽤用 optimize-css-assets-webpack-plugin，同时使⽤用 cssnano</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mini-css-extract-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OptimizeCSSAssetsPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;optimize-css-assets-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;[name]_[contenthash:8].css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OptimizeCSSAssetsPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetNameRegExp:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cssProcessor: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cssnano&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="js-压缩" tabindex="-1">js 压缩 <a class="header-anchor" href="#js-压缩" aria-label="Permalink to &quot;js 压缩&quot;">​</a></h3><p>内置了了 uglifyjs-webpack-plugin，并且自动压缩。</p><p>如果要自己配置，需要手动安装 uglifyjs-webpack-plugin 然后配置。</p>`,92),y=[r];function i(h,d,F,u,b,g){return n(),a("div",null,y)}const k=s(E,[["render",i]]);export{m as __pageData,k as default};
