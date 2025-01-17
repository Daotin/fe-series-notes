import{_ as a,o as n,c as l,S as p}from"./chunks/framework.d5a27ec8.js";const o="/fe-series-notes/assets/img-20240518140515.69203dfe.png",e="/fe-series-notes/assets/img-20240518150576.e8a5649b.png",c="/fe-series-notes/assets/img-20240528160554.66e3c8b3.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"webpack通关秘籍/webpack打包速度和体积优化.md","filePath":"webpack通关秘籍/webpack打包速度和体积优化.md","lastUpdated":1717138057000}'),t={name:"webpack通关秘籍/webpack打包速度和体积优化.md"};function E(r,s,y,i,d,F){return n(),l("div",null,s[0]||(s[0]=[p(`<h2 id="打包速度优化" tabindex="-1">打包速度优化 <a class="header-anchor" href="#打包速度优化" aria-label="Permalink to &quot;打包速度优化&quot;">​</a></h2><h3 id="分析工具" tabindex="-1">分析工具 <a class="header-anchor" href="#分析工具" aria-label="Permalink to &quot;分析工具&quot;">​</a></h3><p><code>speed-measure-webpack-plugin</code> 是一个 Webpack 插件，主要功能是对 Webpack 的各个插件和loader进行时间测量，并以可视化的方式展示这些信息。这样开发者可以很容易地发现哪些步骤耗时较多，从而进行针对性的优化。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install speed-measure-webpack-plugin -D</span></span></code></pre></div><p>配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SpeedMeasurePlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;speed-measure-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">smp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SpeedMeasurePlugin</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">webpackConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 你的 Webpack 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> smp.</span><span style="color:#B392F0;">wrap</span><span style="color:#E1E4E8;">(webpackConfig);</span></span></code></pre></div><p><img src="`+o+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过分析，找到速度瓶颈，比如是某个 loader 或者 plugin，然后就可以通过 chatgpt 或者 google 查找关于这个 loader，plugin 的速度优化建议。</p></div><h3 id="通用速度优化" tabindex="-1">通用速度优化 <a class="header-anchor" href="#通用速度优化" aria-label="Permalink to &quot;通用速度优化&quot;">​</a></h3><p>当 webpack 打包的时候，会自动启用比如代码压缩、作用域提升和树摇（tree shaking）等，除此之外，还有一些优化需要我们自己配置：</p><h4 id="_1、使用高版本的-webpack-和-node-js" tabindex="-1">1、使用高版本的 webpack 和 Node.js <a class="header-anchor" href="#_1、使用高版本的-webpack-和-node-js" aria-label="Permalink to &quot;1、使用高版本的 webpack 和 Node.js&quot;">​</a></h4><p>新版本的内容都会有比较大的性能提升，对于打包速度提升比较明显，能升级进来升级。</p><p>比如从 webpack3 升级到 webpack4，nodejs 从 12 升级到 16.</p><p>但是也要注意兼容性问题。</p><p><img src="'+e+`" alt=""></p><h4 id="_2、并行构建" tabindex="-1">2、并行构建 <a class="header-anchor" href="#_2、并行构建" aria-label="Permalink to &quot;2、并行构建&quot;">​</a></h4><p><code>thread-loader</code> 是 Webpack 的一个加载器，用于在 Webpack 构建过程中启用多线程，以加快构建速度。<code>thread-loader</code> 将某些繁重的任务分发到多个 worker 线程中进行处理，从而利用多核 CPU 的优势提高构建性能。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i thread-loader -D</span></span></code></pre></div><p>配置：以下是一个完整的 Webpack 4 配置示例，展示了如何使用 <code>thread-loader</code> 并行处理 <code>babel-loader</code> 和 <code>css-loader</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">numWorkers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 获取 CPU 核心数并减一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&quot;./src/index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&quot;bundle.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;dist&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&quot;thread-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              workers: numWorkers, </span><span style="color:#6A737D;">// 开启的 worker 线程数</span></span>
<span class="line"><span style="color:#E1E4E8;">              workerParallelJobs: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 每个 worker 线程并行处理的作业数</span></span>
<span class="line"><span style="color:#E1E4E8;">              poolTimeout: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 闲置时，保持 worker 线程存活的时间（单位：ms）</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 其他插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><blockquote><p>❗️ 注意：<code>thread-loader</code> 需要添加到其他 loader 最前面。</p></blockquote><h4 id="_3、并行压缩" tabindex="-1">3、并行压缩 <a class="header-anchor" href="#_3、并行压缩" aria-label="Permalink to &quot;3、并行压缩&quot;">​</a></h4><p><code>terser-webpack-plugin</code> 是 Webpack 中用于压缩 JavaScript 文件的插件。它默认支持并行压缩，可以利用多核 CPU 提高构建速度。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install terser-webpack-plugin -D</span></span></code></pre></div><p>配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        parallel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用并行压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">        terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          compress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            drop_console: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 移除 console 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">            drop_debugger: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 移除 debugger 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 其他压缩选项</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            comments: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 移除注释</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h4 id="_4、开启构建缓存" tabindex="-1">4、开启构建缓存 <a class="header-anchor" href="#_4、开启构建缓存" aria-label="Permalink to &quot;4、开启构建缓存&quot;">​</a></h4><p>缓存思路：</p><ul><li><strong>babel-loader 开启缓存</strong>：<code>babel-loader</code> 是用来将 ES6+ 代码转译为 ES5 的工具。在大项目中，转译 JavaScript 文件是一个耗时的过程。启用缓存后，<code>babel-loader</code> 会将转译后的结果存储起来，当相同的文件再次被处理时，可以直接使用缓存结果，而不需要重新转译。</li><li><strong>terser-webpack-plugin 开启缓存</strong>：<code>terser-webpack-plugin</code> 是用来压缩 JavaScript 文件的插件。压缩过程同样是一个耗时的操作，特别是对大型项目。启用缓存后，<code>terser-webpack-plugin</code> 会将压缩后的结果存储起来，以便在相同的文件再次被处理时，直接使用缓存结果。</li><li><strong>使用 hard-source-webpack-plugin</strong>：<code>hard-source-webpack-plugin</code> 为 Webpack 提供了模块级别的缓存。它会将模块编译后的结果存储到磁盘上，在下一次构建时直接读取缓存结果，而不需要重新编译。</li></ul><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install cache-loader terser-webpack-plugin hard-source-webpack-plugin -D</span></span></code></pre></div><p>配置： 1、使用 <code>cache-loader</code> 作为 <code>babel-loader</code> 的前置加载器，并指定缓存目录。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">exclude</span><span style="color:#E1E4E8;">:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&#39;cache-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheDirectory: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;.cache/babel-loader&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>2、开启压缩缓存，在 <code>terser-webpack-plugin</code> 配置中启用 <code>cache</code> 选项，并设置缓存键（可选）</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;terser-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">optimization</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">minimize</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">minimizer</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      parallel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用并行压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">      cache: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">cacheKeys</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">defaultCacheKeys</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 自定义缓存键（可选）</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">defaultCacheKeys,</span></span>
<span class="line"><span style="color:#E1E4E8;">          myCustomCacheKey: </span><span style="color:#9ECBFF;">&#39;myCustomCacheKeyValue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        compress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          drop_console: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 移除 console 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>注意：在terser-webpack-plugin v5版本中，移除了<code>cache</code>和<code>cacheKeys</code>选项： <img src="`+c+`" alt=""></p><p>因为在webpack5中，会有单独的<a href="https://webpack.docschina.org/configuration/cache/#cache" target="_blank" rel="noreferrer">cache</a>选项去配置。</p><blockquote><p>Webpack has built-in cache <a href="https://webpack.js.org/configuration/cache/#cachetype" target="_blank" rel="noreferrer">https://webpack.js.org/configuration/cache/#cachetype</a>, if you set <code>type: &#39;filesystem&#39;,</code>, you will cache not only terser output, but all webpack build (try it and the next build will be faster), note - when you use <code>filesystem</code> memory cache will be used too.</p></blockquote><p>3、在 Webpack 配置中的 <code>plugins</code> 数组中添加 <code>HardSourceWebpackPlugin</code> 插件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HardSourceWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hard-source-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HardSourceWebpackPlugin</span><span style="color:#E1E4E8;">()];</span></span></code></pre></div><h2 id="体积优化" tabindex="-1">体积优化 <a class="header-anchor" href="#体积优化" aria-label="Permalink to &quot;体积优化&quot;">​</a></h2><h3 id="分析工具-1" tabindex="-1">分析工具 <a class="header-anchor" href="#分析工具-1" aria-label="Permalink to &quot;分析工具&quot;">​</a></h3><p><code>webpack-bundle-analyzer</code> 是一个 Webpack 插件和 CLI 工具，生成一个交互式的树图（treemap），显示项目的各个模块及其大小。用于可视化分析 Webpack 输出文件的体积构成。通过这个插件，你可以清晰地看到项目中每个依赖包和文件所占用的空间，从而优化和减少打包文件的体积。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install webpack-bundle-analyzer -D</span></span></code></pre></div><p>配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">BundleAnalyzerPlugin</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;webpack-bundle-analyzer&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 你的 Webpack 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BundleAnalyzerPlugin</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>构建完成后，<code>webpack-bundle-analyzer</code> 会自动在浏览器中打开一个服务器，展示打包文件的详细分析报告。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过分析，找到速度瓶颈，比如是 ElemetUI 包比较大，然后就可以通过 chatgpt 或者 google 查找关于这个包体积大小优化建议。</p></div><h3 id="通用打包体积优化" tabindex="-1">通用打包体积优化 <a class="header-anchor" href="#通用打包体积优化" aria-label="Permalink to &quot;通用打包体积优化&quot;">​</a></h3><h4 id="_1、css-tree-shaking" tabindex="-1">1、css tree shaking <a class="header-anchor" href="#_1、css-tree-shaking" aria-label="Permalink to &quot;1、css tree shaking&quot;">​</a></h4><p>使用 <code>purgecss-webpack-plugin</code> 移除未使用的 CSS。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install purgecss-webpack-plugin glob -D</span></span></code></pre></div><p>配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">PurgecssPlugin</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;purgecss-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">glob</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;glob&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PurgecssPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      paths: glob.</span><span style="color:#B392F0;">sync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">__dirname</span><span style="color:#9ECBFF;">, </span><span style="color:#9ECBFF;">&quot;src&quot;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}/**/*\`</span><span style="color:#E1E4E8;">, { nodir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h4 id="_2、启用-gzip-压缩" tabindex="-1">2、启用 Gzip 压缩 <a class="header-anchor" href="#_2、启用-gzip-压缩" aria-label="Permalink to &quot;2、启用 Gzip 压缩&quot;">​</a></h4><p>使用 compression-webpack-plugin 启用 Gzip 压缩</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install --save-dev compression-webpack-plugin</span></span></code></pre></div><p>配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CompressionPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;compression-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CompressionPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js(</span><span style="color:#85E89D;font-weight:bold;">\\?</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h4 id="_3、图片压缩" tabindex="-1">3、图片压缩 <a class="header-anchor" href="#_3、图片压缩" aria-label="Permalink to &quot;3、图片压缩&quot;">​</a></h4><p>使用 <code>image-webpack-loader</code> 对图片进行优化，减少图片文件的大小。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install --save-dev image-webpack-loader</span></span></code></pre></div><p>配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&quot;file-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&quot;image-webpack-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              mozjpeg: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                progressive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              optipng: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              pngquant: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                quality: [</span><span style="color:#79B8FF;">0.65</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.9</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                speed: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              gifsicle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                interlaced: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              webp: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                quality: </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h4 id="_4、动态-polyfill" tabindex="-1">4、动态 polyfill <a class="header-anchor" href="#_4、动态-polyfill" aria-label="Permalink to &quot;4、动态 polyfill&quot;">​</a></h4><p><code>babel-preset-env</code> 是一个智能预设，可以根据目标环境（浏览器或 Node.js）的不同，仅编译需要的语法特性，并引入必要的 polyfills，从而减少最终构建的代码体积，提高运行效率</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install --save-dev @babel/preset-env core-js</span></span></code></pre></div><p>新增<code>.babelrc</code> 文件：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;presets&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;useBuiltIns&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;usage&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用 &#39;usage&#39; 方式按需引入 polyfills</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;corejs&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用 core-js 版本 3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;targets&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;browsers&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;&gt; 1%&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;last 2 versions&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;not dead&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 目标环境</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>webpack 配置文件不需要额外的配置。</p>`,78)]))}const g=a(t,[["render",E]]);export{b as __pageData,g as default};
