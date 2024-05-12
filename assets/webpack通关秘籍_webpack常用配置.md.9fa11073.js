import{_ as s,o as a,c as n,V as l}from"./chunks/framework.ff44d2fd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"webpack通关秘籍/webpack常用配置.md","filePath":"webpack通关秘籍/webpack常用配置.md","lastUpdated":1715517094000}'),p={name:"webpack通关秘籍/webpack常用配置.md"},o=l(`<p><a href="https://github.com/Daotin/Web/blob/master/11-%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9E%84%E5%BB%BA/03-Webpack.md" target="_blank" rel="noreferrer">https://github.com/Daotin/Web/blob/master/11-自动化构建/03-Webpack.md</a></p><h2 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-label="Permalink to &quot;entry&quot;">​</a></h2><p>指定 webpack 的打包⼊⼝</p><p>单⼊⼝：entry 是⼀个字符串, 多⼊⼝：entry 是⼀个对象</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./path/to/my/entry/file.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		app: </span><span style="color:#9ECBFF;">&#39;./src/app.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		adminApp: </span><span style="color:#9ECBFF;">&#39;./src/adminApp.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
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
<span class="line"><span style="color:#E1E4E8;">	output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			{ test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">txt</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, use: </span><span style="color:#9ECBFF;">&#39;raw-loader&#39;</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// 需要先npm i raw-loader -D</span></span>
<span class="line"><span style="color:#E1E4E8;">		]</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="plugins" tabindex="-1">plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;plugins&quot;">​</a></h2><p>插件⽤于 bundle ⽂件的优化，资源管理和环境变量注⼊,作⽤于整个构建过程。</p><p>比如打包前，删除dist目录，自动生成dist下html文件等一些不属于loader做的事情。</p><p>用法：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({template: </span><span style="color:#9ECBFF;">&#39;./src/index.html&#39;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">	]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="常用loader和plugin配置" tabindex="-1">常用loader和plugin配置 <a class="header-anchor" href="#常用loader和plugin配置" aria-label="Permalink to &quot;常用loader和plugin配置&quot;">​</a></h3><blockquote><p>==注意：这些loader都需要先经过npm i安装！==</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	entry: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 解析 ES6</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				use: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// css-loader ⽤于加载 .css ⽂件，并且转换成 commonjs 对象导出</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// style-loader 将导出的样式通过 &lt;style&gt; 标签插⼊到 head 中</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// loader加载的顺序是右边先执行！</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				use: [</span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 解析less</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				use: [</span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;less-loader&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 解析图片，字体首选url-loader或者file-loader，url-loader比file-loader多了options配置，可以设置较⼩资源⾃动 base64</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// test: /\\.woff|woff2|eot|ttf|otf)$/</span></span>
<span class="line"><span style="color:#E1E4E8;">				use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						loader: </span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">						options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">							limit: </span><span style="color:#79B8FF;">10240</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 10kB</span></span>
<span class="line"><span style="color:#E1E4E8;">						}</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">				]</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		]</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><blockquote><p>babel-loader需要配置<code>.babelrc</code>：</p></blockquote><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;presets&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 一个配置集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;plugins&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#9ECBFF;">&quot;@babel/proposal-class-properties&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 单独的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="文件监听" tabindex="-1">文件监听 <a class="header-anchor" href="#文件监听" aria-label="Permalink to &quot;文件监听&quot;">​</a></h2><p>两种方式：</p><ul><li>启动 webpack 命令时，带上 --watch 参数</li><li>在配置 webpack.config.js 中设置 watch: true</li></ul><p>缺点：页面需要手动刷新。</p><p>原理：<strong>轮询判断⽂件的最后编辑时间是否变化。如果某个⽂件发⽣了变化，并不会⽴刻告诉监听者，⽽是先缓存起来，等 aggregateTimeout。</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.export </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//默认 false，也就是不开启</span></span>
<span class="line"><span style="color:#E1E4E8;">	watch: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//只有开启监听模式时，watchOptions才有意义</span></span>
<span class="line"><span style="color:#E1E4E8;">	wathcOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//默认为空，不监听的文件或者文件夹，支持正则匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">		ignored:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//监听到变化发生后会等300ms再去执行，默认300ms</span></span>
<span class="line"><span style="color:#E1E4E8;">		aggregateTimeout: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">//判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次</span></span>
<span class="line"><span style="color:#E1E4E8;">		poll: </span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="热更新" tabindex="-1">热更新 <a class="header-anchor" href="#热更新" aria-label="Permalink to &quot;热更新&quot;">​</a></h2><p>webpack-dev-server 优点：</p><ul><li>不需要手动刷新页面</li><li>文件修改后的编译不输出文件到硬盘，而是到内存，速度更快</li></ul><p>使用方式：使⽤webpack内置 HotModuleReplacementPlugin插件，不需要额外安装。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">webpack</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> webpack.</span><span style="color:#B392F0;">HotModuleReplacementPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentBase: </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// webpack-dev-server服务的目录</span></span>
<span class="line"><span style="color:#E1E4E8;">        hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 开启热更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>另外，还有一个<code>webpack-dev-middleware</code>也可以热更新，当后端使用的是Express或另一个Node.js框架作为你的服务器，可以将 <code>webpack-dev-middleware</code> 集成到现有的Node.js服务器中，这样就不需要运行一个额外的服务器（如 <code>webpack-dev-server</code>）来处理前端的热更新。</p><p>但是，由于是前后端分离开发，专门让后端搞一个对后端来说没用的东西也不太合理，除非是前后端都是一个人开发。</p><p>所以，最好的选择还是webpack-dev-server。</p><h3 id="热更新原理" tabindex="-1">热更新原理 <a class="header-anchor" href="#热更新原理" aria-label="Permalink to &quot;热更新原理&quot;">​</a></h3><p>todo：<a href="https://vue3js.cn/interview/webpack/HMR.html#%E4%BA%8C%E3%80%81%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">https://vue3js.cn/interview/webpack/HMR.html#二、实现原理</a></p>`,39),e=[o];function t(E,c,r,y,i,F){return a(),n("div",null,e)}const B=s(p,[["render",t]]);export{u as __pageData,B as default};
