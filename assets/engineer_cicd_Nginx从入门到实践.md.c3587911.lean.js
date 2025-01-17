import{_ as n,o as a,c as l,S as p}from"./chunks/framework.d5a27ec8.js";const o="/fe-series-notes/assets/image_zVsWEVIikA.4b99ecc2.png",e="/fe-series-notes/assets/image_k1nl5IkJLR.e2242e32.png",c="/fe-series-notes/assets/image_DbK8iAuosp.7cedaea4.png",t="/fe-series-notes/assets/1680416377724.28e89682.png",r="/fe-series-notes/assets/1680416395702.6bef2b20.png",_=JSON.parse('{"title":"Nginx 从入门到实践","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/cicd/Nginx从入门到实践.md","filePath":"engineer/cicd/Nginx从入门到实践.md","lastUpdated":1733447289000}'),E={name:"engineer/cicd/Nginx从入门到实践.md"};function i(y,s,d,g,h,F){return a(),l("div",null,s[0]||(s[0]=[p('<h1 id="nginx-从入门到实践" tabindex="-1">Nginx 从入门到实践 <a class="header-anchor" href="#nginx-从入门到实践" aria-label="Permalink to &quot;Nginx 从入门到实践&quot;">​</a></h1><h2 id="nginx-简介" tabindex="-1">Nginx 简介 <a class="header-anchor" href="#nginx-简介" aria-label="Permalink to &quot;Nginx 简介&quot;">​</a></h2><h3 id="nginx-是什么" tabindex="-1">Nginx 是什么 <a class="header-anchor" href="#nginx-是什么" aria-label="Permalink to &quot;Nginx 是什么&quot;">​</a></h3><p>nginx (engine x) 是一个 HTTP 和反向代理服务器，一个邮件代理服务器，一个通用的 TCP/UDP 代理服务器，最初由 Igor Sysoev 编写。实际在在设计之初<strong>Nginx</strong>的产品目的就是为了邮件服务而诞生的，特点是占有内存少、体积小、并发能力强、性能高。</p><h3 id="nginx-适用场景" tabindex="-1">nginx 适用场景 <a class="header-anchor" href="#nginx-适用场景" aria-label="Permalink to &quot;nginx 适用场景&quot;">​</a></h3><p><img src="'+o+`" alt=""></p><p>Nginx 的三个主要应用场景：</p><p><strong>1、静态资源的托管</strong></p><p>静态资源直接可以由 nginx 提供服务，降低对后台应用访问。</p><p><strong>2、动态资源的反向代理</strong></p><ul><li>通过反向代理访问后端接口</li><li>后端应用服务构成集群后，需要动态扩容，有的应用出问题了需要做容灾，那么需要 nginx 负载均衡功能</li><li>通过缓存功能，加快资源访问。</li></ul><p><strong>3、API 服务</strong></p><p>数据库服务的性能，远高于后端应用服务，所以可以衍生出直接使用 nginx 访问数据库或者 redis，利用 nginx 的高并发性能，实现如 web 防火墙等复杂的业务功能。如 OpenResty 工具。</p><h3 id="nginx-历史背景" tabindex="-1">nginx 历史背景 <a class="header-anchor" href="#nginx-历史背景" aria-label="Permalink to &quot;nginx 历史背景&quot;">​</a></h3><p><code>C10K</code> 问题是 Nginx 抢占舞台的主要原因。</p><p>随着互联网数据的快速增长，对我们的硬件设备和性能提出了很高的要求。根据摩尔定义，硬件性能得到很大提升，但是低效的 Apache 拖累了性能，导致硬件的性能没有得到最大的发挥。因为 Apache 的一个进程在同一时间只能处理一个连接，导致高并发的时候，进程间切换会消耗大量的性能。</p><p>1999 年的一个晴朗的早晨，Dan Kegel 发现了所有传统 Web 服务器都无法处理 10K 并发客户端/连接的问题，并将其命名为 C10K 问题。这个缩写中的 C 代表并发连接数，10K 代表数字。一起，它将问题表示为 10K 并发连接问题。</p><h3 id="nginx-的优点" tabindex="-1">nginx 的优点 <a class="header-anchor" href="#nginx-的优点" aria-label="Permalink to &quot;nginx 的优点&quot;">​</a></h3><ul><li>高并发，高性能</li><li>可扩展性好：模块化设计，生态圈好，如 <code>Tengine</code></li><li>高可靠性：持续运行数年</li><li>热部署：不停止服务的时候升级 Nginx</li><li>BSD 许可证：开源免费，可以修改源码并商用</li></ul><h2 id="nginx-的安装和使用" tabindex="-1">nginx 的安装和使用 <a class="header-anchor" href="#nginx-的安装和使用" aria-label="Permalink to &quot;nginx 的安装和使用&quot;">​</a></h2><p>一般我们都会使用 Linux 下进行部署服务，所以 window 版本暂不做考虑。</p><h3 id="安装-nginx" tabindex="-1">安装 Nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to &quot;安装 Nginx&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">💡 关于 yum</p><p>相信你每天都在使用 <code>npm</code>，npm 是一个包管理工具，可在本地环境中轻松操作各种包应用。当然 <code>CentOS</code>也有一个相当 npm 那样的包管理工具，可在服务器环境中轻松管理各种 npm 模块。</p><p><code>yum</code>是一个在 <code>Fedora</code>、<code>RedHat</code>和 <code>CentOS</code>中的<strong>Shell 软件包管理器</strong>。其基于 <code>rpm包管理</code>，可从指定的服务器自动安装 <code>rpm包</code>，可自动处理依赖关系并一次性地安装所有依赖的软件包，整个过程与 <code>npm</code>有点像，只需掌握以下命令就能操作 <code>yum</code>。</p><p>注意：在 ubuntu 里面就不是 <code>yum</code>了，在 Ubuntu 中，类似于 yum 的包管理器是 <code>apt</code>（Advanced Package Tool）。</p></div><p>下面以 <code>CentOS</code>环境为例：</p><p>首先检测 yum 源中有无 nginx</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">yum</span><span style="color:#E1E4E8;"> list | grep nginx</span></span></code></pre></div><p>如果存在，在安装 nginx：</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">yum</span><span style="color:#E1E4E8;"> install nginx</span></span></code></pre></div><p>再执行 <code>nginx -v</code>，输出版本表示安装成功。</p><p>如果不存在，或者不是你需要的版本，需要**<a href="https://jspang.com/article/39?spm=wolai.workspace.0.0.139b27a46cog40#toc2" target="_blank" rel="noreferrer">自行配置 yum 源</a>**。</p><h3 id="启动-nginx" tabindex="-1">启动 nginx <a class="header-anchor" href="#启动-nginx" aria-label="Permalink to &quot;启动 nginx&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx</span></span></code></pre></div><p>启动 <code>Nginx</code>后，在浏览器打开公网 IP，就可以看到 nginx 启动页面。</p><blockquote><p>注意需要在阿里云配置 80 端口安全组。</p></blockquote><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><p>得益其安全稳定的特性，若未遇到特殊情况几乎都不会再重启，只需掌握以下命令就能操作 <code>nginx</code>：</p><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td><code>nginx</code></td><td>启动进程</td></tr><tr><td><code>nginx -t</code></td><td>验证配置</td></tr><tr><td><code>nginx -s reload</code></td><td>重启进程</td></tr><tr><td><code>nginx -s stop</code></td><td>强制退出</td></tr><tr><td><code>nginx -s quit</code></td><td>安全退出</td></tr><tr><td><code>ps -ef | grep nginx</code></td><td>查看进程</td></tr></tbody></table><blockquote><p>Linux 每个应用运行都会产生一个进程，那么我们就可以通过查看 Nginx 进程是否存在来判断它是否启动。 <strong>用 ps -ef 列出进程列表，然后通过 grep 过滤</strong>。 如： ps -ef | grep nginx 就可以看到 Nginx 进程是否存在了。</p></blockquote><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><h3 id="文件结构" tabindex="-1"><strong>文件结构</strong> <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;**文件结构**&quot;">​</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">...    </span><span style="color:#6A737D;"># 全局配置，对全局生效</span></span>
<span class="line"><span style="color:#F97583;">events</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 配置影响 Nginx 服务器或与用户的网络连接</span></span>
<span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  ├── </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 配置后端服务器具体地址，负载均衡配置不可或缺的部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  ├── </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块</span></span>
<span class="line"><span style="color:#E1E4E8;">  ├── server</span></span>
<span class="line"><span style="color:#E1E4E8;">  │   ├── location  </span><span style="color:#6A737D;"># server 块可以包含多个 location 块，location 指令用于匹配 uri</span></span>
<span class="line"><span style="color:#E1E4E8;">  │   ├── location</span></span>
<span class="line"><span style="color:#E1E4E8;">  │   └── ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  └── ...</span></span></code></pre></div><ul><li>1、 <strong>全局块</strong> ：「影响 nginx 服务器整体配置的指令」。一般有运行 nginx 服务器的用户组，nginx 进程 pid 存放路径，日志存放路径，配置文件引入，允许生成 worker process 数等。</li><li>2、 <strong>events 块</strong> ：影响「Nginx 服务器与用户的网络连接」。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。</li><li>3、 <strong>http 块</strong> ：代理、缓存、日志等绝大多数功能和第三方模块的配置功能（可以嵌套多个 server）。如文件引入，mime-type 定义，日志自定义，是否使用 sendfile 传输文件，连接超时时间，单连接请求数等。</li><li>4、 <strong>server 块</strong> ：主要用于制定虚拟主机域名、IP 和端口号，一个 http 中可以有多个 server。</li><li>5、 <strong>location 块</strong> ：配置请求的路由，以及各种页面的处理情况。</li></ul><blockquote><p>他们之间的关系：server 继承 main，location 继承 server；upstream 既不会继承指令也不会被继承。</p></blockquote><h3 id="语法说明" tabindex="-1">语法说明 <a class="header-anchor" href="#语法说明" aria-label="Permalink to &quot;语法说明&quot;">​</a></h3><ul><li>配置文件由 <code>指令</code>与 <code>指令块</code>组成</li><li>指令以 <code>分号</code>结尾，指令与参数以 <code>空格</code>分隔</li><li>指令块以 <code>大括号</code>将多条指令组织在一起</li><li>使用 <code>$</code>表示变量，提高复用性</li><li>使用 <code>#</code>加入注释，提高可读性</li><li>部分指令的参数支持正则表达式</li><li><code>include</code>语句允许组合多个配置文件以提升配置的可维护性</li></ul><p>一个简单的 nginx 配置示例：</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">user </span><span style="color:#E1E4E8;"> nginx;                        </span><span style="color:#6A737D;"># 运行用户，默认即是nginx，可以不进行设置</span></span>
<span class="line"><span style="color:#F97583;">worker_processes </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;                </span><span style="color:#6A737D;"># Nginx 进程数，一般设置为和 CPU 核数一样</span></span>
<span class="line"><span style="color:#F97583;">error_log </span><span style="color:#E1E4E8;"> /var/log/nginx/error.log</span><span style="color:#79B8FF;"> warn</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;"># Nginx 的错误日志存放目录</span></span>
<span class="line"><span style="color:#F97583;">pid </span><span style="color:#E1E4E8;">       /var/run/nginx.pid;      </span><span style="color:#6A737D;"># Nginx 服务启动时的 pid 存放位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">events</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> use </span><span style="color:#E1E4E8;">epoll;     </span><span style="color:#6A737D;"># 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> worker_connections </span><span style="color:#E1E4E8;">1024;   </span><span style="color:#6A737D;"># 每个进程允许最大并发数</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;"> {   </span><span style="color:#6A737D;"># 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置日志模式</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> log_format </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;$</span><span style="color:#E1E4E8;">remote_addr</span><span style="color:#9ECBFF;"> - $</span><span style="color:#E1E4E8;">remote_user</span><span style="color:#9ECBFF;"> [$</span><span style="color:#E1E4E8;">time_local</span><span style="color:#9ECBFF;">] &quot;$</span><span style="color:#E1E4E8;">request</span><span style="color:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;$</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;"> $</span><span style="color:#E1E4E8;">body_bytes_sent</span><span style="color:#9ECBFF;"> &quot;$</span><span style="color:#E1E4E8;">http_referer</span><span style="color:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;&quot;$</span><span style="color:#E1E4E8;">http_user_agent</span><span style="color:#9ECBFF;">&quot; &quot;$</span><span style="color:#E1E4E8;">http_x_forwarded_for</span><span style="color:#9ECBFF;">&quot;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;"> /var/log/nginx/access.log </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;"># Nginx访问日志存放位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> sendfile </span><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;"># 开启高效传输模式</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> tcp_nopush </span><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;"># 减少网络报文段的数量</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> tcp_nodelay </span><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> keepalive_timeout </span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;"># 保持连接的时间，也叫超时时间，单位秒</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> types_hash_max_size </span><span style="color:#E1E4E8;">2048;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;                 </span><span style="color:#6A737D;">#开启gzip压缩</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">            /etc/nginx/mime.types;      </span><span style="color:#6A737D;"># 文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> default_type </span><span style="color:#E1E4E8;">       application/octet-stream;   </span><span style="color:#6A737D;"># 默认文件类型</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">/etc/nginx/conf.d/*.conf;   </span><span style="color:#6A737D;"># 包含的子配置项位置和文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;       </span><span style="color:#6A737D;"># 配置监听的端口</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> localhost;    </span><span style="color:#6A737D;"># 配置的域名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">  /usr/share/nginx/html;  </span><span style="color:#6A737D;"># 网站根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;"> index.html index.htm;   </span><span style="color:#6A737D;"># 默认首页文件</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> deny </span><span style="color:#E1E4E8;">172.168.22.11;   </span><span style="color:#6A737D;"># 禁止访问的ip地址，可以为all</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> allow </span><span style="color:#E1E4E8;">172.168.33.44； </span><span style="color:#6A737D;"># 允许访问的ip地址，可以为all</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      error_page </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;"> /50x.html;  </span><span style="color:#6A737D;"># 默认50x对应的访问页面</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> error_page </span><span style="color:#E1E4E8;">400 </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;"> error.html;   </span><span style="color:#6A737D;"># 同上</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="location-匹配规则" tabindex="-1">location 匹配规则 <a class="header-anchor" href="#location-匹配规则" aria-label="Permalink to &quot;location 匹配规则&quot;">​</a></h3><blockquote><p><strong>注意：location 匹配的不是 url 路由地址，而是对于服务器中的目录或者文件。</strong></p></blockquote><ul><li><p><code>/</code>：通用匹配，任何内容请求都会匹配到</p></li><li><p><code>=</code>：进行普通字符匹配。也就是完全匹配。</p></li><li><p><code>^~</code>：前缀匹配。如果匹配成功，则不再匹配其他 location。</p></li><li><p><code>~</code>：表示执行一个正则匹配，区分大小写</p></li><li><p><code>~*</code>：表示执行一个正则匹配，不区分大小写</p></li><li><p><code>/xxx/</code>：常规字符串路径匹配</p><p>几个常见的例子说明：</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">location = /111/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type text/plain;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 200 &quot;111 success&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">location /222 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type text/plain;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 200 $uri;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">location ~ ^/333/bbb.*\\.html$ {</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type text/plain;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 200 $uri;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">location ~* ^/444/AAA.*\\.html$ {</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type text/plain;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 200 $uri;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre></div><p>总结一下，一共 4 个 location 语法：</p><ul><li><code>location = /aaa</code> 是精确匹配 /aaa 的路由。</li><li><code>location /bbb</code> 是前缀匹配 /bbb 的路由。</li><li><code>location ~ /ccc.*.html</code> 是正则匹配。可以再加个 _ 表示不区分大小写 location ~_ /ccc.*.html</li><li><code>location ^~ /ddd</code> 是前缀匹配，但是优先级更高。</li></ul><p>这 4 种语法的优先级是这样的：</p><p>精确匹配（=） &gt; 高优先级前缀匹配（^~） &gt; 正则匹配（～ ~*） &gt; 普通前缀匹配</p><p>更多参考：<a href="https://z.itpub.net/article/detail/03489CAF30DD7EB79B9E239E941FA82D" target="_blank" rel="noreferrer">https://z.itpub.net/article/detail/03489CAF30DD7EB79B9E239E941FA82D</a></p><h3 id="预定义变量" tabindex="-1">预定义变量 <a class="header-anchor" href="#预定义变量" aria-label="Permalink to &quot;预定义变量&quot;">​</a></h3><p>nginx 预定义变量也叫全局变量。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">$arg_PARAMNETER GET请求变量名PARAMEMTER参数的值</span></span>
<span class="line"><span style="color:#E1E4E8;">$args 这个变量等于Get 请求中的参数</span></span>
<span class="line"><span style="color:#E1E4E8;">$body_bytes_sent 传送页面的字节数</span></span>
<span class="line"><span style="color:#E1E4E8;">$content_length  请求头中发热content-lenth字段</span></span>
<span class="line"><span style="color:#E1E4E8;">$content_type   请求头中的Content-Type字段。</span></span>
<span class="line"><span style="color:#E1E4E8;">$cookie_COOKIE  cookie COOKIE的值。</span></span>
<span class="line"><span style="color:#E1E4E8;">$document_root  当前请求在root指令中指定的值</span></span>
<span class="line"><span style="color:#E1E4E8;">$document_uri  与$uri相同</span></span>
<span class="line"><span style="color:#E1E4E8;">$host      请求中的主机头(</span><span style="color:#B392F0;">Host</span><span style="color:#E1E4E8;">)字段，如果请求中的主机头不可用或者空，则为处理请求的server名称(</span><span style="color:#B392F0;">处理请求的server的server_name指令的值</span><span style="color:#E1E4E8;">)。值为小写，不包含端口。</span></span>
<span class="line"><span style="color:#E1E4E8;">$hostname机器名使用 gethostname系统调用的值</span></span>
<span class="line"><span style="color:#E1E4E8;">$http_HEADER   HTTP请求头中的内容，HEADER为HTTP请求中的内容转为小写，-变为_(</span><span style="color:#B392F0;">破折号变为下划线</span><span style="color:#E1E4E8;">)，例如：$http_user_agent(</span><span style="color:#B392F0;">Uaer-Agent的值</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sent_http_HEADER  HTTP响应头中的内容，HEADER为HTTP响应中的内容转为小写，-变为_(</span><span style="color:#B392F0;">破折号变为下划线</span><span style="color:#E1E4E8;">)，例如： $sent_http_cache_control, $sent_http_content_type…;</span></span>
<span class="line"><span style="color:#E1E4E8;">$is_args  如果$args设置，值为</span><span style="color:#9ECBFF;">&quot;?&quot;</span><span style="color:#E1E4E8;">，否则为</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">$limit_rate  这个变量可以限制连接速率。</span></span>
<span class="line"><span style="color:#E1E4E8;">$nginx_version当前运行的nginx版本号</span></span>
<span class="line"><span style="color:#E1E4E8;">$query_string  与$args相同</span></span>
<span class="line"><span style="color:#E1E4E8;">$remote_addr客户端的IP地址。</span></span>
<span class="line"><span style="color:#E1E4E8;">$remote_port  客户端的端口。</span></span>
<span class="line"><span style="color:#E1E4E8;">$remote_user   已经经过Auth Basic Module验证的用户名</span></span>
<span class="line"><span style="color:#E1E4E8;">$request_filename  当前连接请求的文件路径，由root或alias指令与URI请求生成</span></span>
<span class="line"><span style="color:#E1E4E8;">$request_body这个变量（0.7.58+）包含请求的主要信息。在使用proxy_pass或fastcgi_pass指令的location中比较有意义</span></span>
<span class="line"><span style="color:#E1E4E8;">$request_body_file客户端请求主体信息的临时文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">$request_completion   如果请求成功，设为</span><span style="color:#9ECBFF;">&quot;OK&quot;</span><span style="color:#E1E4E8;">；如果请求未完成或者不是一系列请求中最后一部分则设为空。</span></span>
<span class="line"><span style="color:#E1E4E8;">$request_method  这个变量是客户端请求的动作，通常为GET或POST。包括0.8.20及之前的版本中，这个变量总为main request中的动作，如果当前请求是一个子请求，并不使用这个当前请求的动作。</span></span>
<span class="line"><span style="color:#E1E4E8;">$request_uri  这个变量等于包含一些客户端请求参数的原始URI，它无法修改，请查看$uri更改或重写URI。</span></span>
<span class="line"><span style="color:#E1E4E8;">$scheme所用的协议，比如http或者是https，比如rewrite ^(</span><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">+)$ $scheme://example.com</span><span style="color:#FFAB70;">$1</span><span style="color:#E1E4E8;"> redirect;</span></span>
<span class="line"><span style="color:#E1E4E8;">$server_addr服务器地址，在完成一次系统调用后可以确定这个值，如果要绕开系统调用，则必须在listen中指定地址并且使用bind参数。</span></span>
<span class="line"><span style="color:#E1E4E8;">$server_name  服务器名称</span></span>
<span class="line"><span style="color:#E1E4E8;">$server_port请求到达服务器的端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">$server_protocol  请求使用的协议，通常是HTTP/1.0或HTTP/1.1。</span></span>
<span class="line"><span style="color:#E1E4E8;">$uri  请求中的当前URI(</span><span style="color:#B392F0;">不带请求参数，参数位于args，不同于浏览器传递的args</span><span style="color:#E1E4E8;">)，不同于浏览器传递的request_uri的值，它可以通过内部重定向，或者使用index指令进行修改。不包括协议和主机名，例如/foo/bar.html</span></span></code></pre></div><p>关于 <code>$http_origin</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">$http_origin并不是nginx的内置参数，nginx支持取自定义的参数值，$http_XXX这个格式是nginx取请求中header的XXX的值的。</span></span>
<span class="line"><span style="color:#E1E4E8;">这里取的是origin,而一般跨域请求都会将请求的来源放在origin中（浏览器会往跨域请求的header上面加origin这个header）。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="color:#9ECBFF;">request headers:</span></span>
<span class="line"><span style="color:#9ECBFF;">-------------------------------</span></span>
<span class="line"><span style="color:#9ECBFF;">Accept: */*</span></span>
<span class="line"><span style="color:#9ECBFF;">Accept-Encoding: gzip, deflate</span></span>
<span class="line"><span style="color:#9ECBFF;">Accept-Language: zh-CN,zh;q=0.9</span></span>
<span class="line"><span style="color:#9ECBFF;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#9ECBFF;">Host: 61.231.19.187:8089</span></span>
<span class="line"><span style="color:#9ECBFF;">If-Modified-Since: Sun, 16 Aug 2020 08:22:11 GMT</span></span>
<span class="line"><span style="color:#9ECBFF;">If-None-Match: &quot;5f38ecb3-159&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">Origin: http://abc.bdc.cn:8080</span></span>
<span class="line"><span style="color:#9ECBFF;">Referer: http://abc.bdc.cn:8080/1/tmp/index.html</span></span>
<span class="line"><span style="color:#9ECBFF;">User-Agent: Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span></code></pre></div><h3 id="一个示例" tabindex="-1">一个示例 <a class="header-anchor" href="#一个示例" aria-label="Permalink to &quot;一个示例&quot;">​</a></h3><p>使用 nginx 部署静态网页：</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">101.200.146.230; </span><span style="color:#6A737D;"># 指定IP或域名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/www/client/daotin; </span><span style="color:#6A737D;"># 静态文件存放在/www/client/daotin目录下</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="server-虚拟主机配置" tabindex="-1">server 虚拟主机配置 <a class="header-anchor" href="#server-虚拟主机配置" aria-label="Permalink to &quot;server 虚拟主机配置&quot;">​</a></h3><p>基于端口号来配置虚拟主机，算是 Nginx 中最简单的一种方式了。原理就是 Nginx 监听多个端口，根据不同的端口号，来区分不同的网站。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">server{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">8001;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">localhost;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/usr/share/nginx/html/html8001;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>然后重启 nginx，我们就可以在浏览器中访问 <code>http://localhost:8001</code>了。</p><h3 id="缓存配置" tabindex="-1">缓存配置 <a class="header-anchor" href="#缓存配置" aria-label="Permalink to &quot;缓存配置&quot;">​</a></h3><p>缓存对于 Web 至关重要，尤其对于大型高负载 Web 站点。Nginx 缓存可作为性能优化的一个重要手段，可以极大减轻后端服务器的负载。通常对于静态资源，即较少经常更新的资源，如图片，css 或 js 等进行缓存，从而在每次刷新浏览器的时候，不用重新请求，而是从缓存里面读取，这样就可以减轻服务器的压力。</p><p>Nginx 缓存类型：</p><p><img src="`+e+`" alt=""></p><p>Nginx 设置缓存有两种方式：</p><ul><li><code>proxy_cache_path</code> 和 <code>proxy_cache</code></li><li><code>Cache-Control</code> 和 <code>Pragma</code></li></ul><blockquote><p>参考：<a href="https://www.cnblogs.com/itzgr/p/13321980.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/itzgr/p/13321980.html</a></p></blockquote><p><strong>SPA 最佳实践</strong></p><p>1、nginx 缓存前端打包的静态资源：<code>index.html</code>不缓存，确保用户获取的是最新版本。CSS、JS、图片等资源，使用长期缓存，或者不设置缓存（因为都有 hash，所以不会导致用户加载旧版本）</p><p>2、接口的内容是否缓存，由后端管理。</p><h3 id="跨域配置" tabindex="-1">跨域配置 <a class="header-anchor" href="#跨域配置" aria-label="Permalink to &quot;跨域配置&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myHeaders </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Headers</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http://101.200.146.230:4444/test.json&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers: myHeaders,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;cors&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;response.json==&gt;&#39;</span><span style="color:#E1E4E8;">, response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test.json ==&gt;&#39;</span><span style="color:#E1E4E8;">, data))</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fetch失败&#39;</span><span style="color:#E1E4E8;">, err));</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><img src="`+c+`" alt="img"></p><h4 id="preflight-request-预检请求" tabindex="-1">preflight request 预检请求 <a class="header-anchor" href="#preflight-request-预检请求" aria-label="Permalink to &quot;preflight request 预检请求&quot;">​</a></h4><p>客户端仅发送了一个 OPTIONS 方法的请求，被服务器 403 状态码给拒绝了，查阅了有关 OPTIONS 方法和预检请求的博客和文档，梳理了大概关系。</p><p><strong>什么是预检请求？</strong></p><ol><li>HTTP 请求分为简单请求 与 复杂请求，两种请求的区别主要在于简单请求不会触发 CORS 预检请求，而复杂请求会触发 CORS 预检请求</li><li>满足简单请求的条件(两个条件需要都满足) <ul><li>方法为 GET、HEAD、POST 之一</li><li>无自定义请求头，且 Content-Type 为 text/plain, mutipart/form-data application/x-www-form-urlencoded 之一</li></ul></li><li>不满足简单请求的一切请求都是复杂请求</li><li>预检请求(一般是浏览器自动发起的 OPTIONS 方法的请求) 中 <ul><li>Access-Control-Request-Method 字段告诉服务器实际请求会使用的 HTTP 方法；</li><li>Access-Control-Request-Headers 字段告知服务器实际情况所携带的自定义首部字段。服务器基于预检请求获得的信息来判断，是否接受接下来的实际请求。服务器端返回的 Access-Control-Allow-Methods 字段 将服务器允许的请求方法告诉客户端。该首部字段与 Allow 类似，但只能用户设计到 CORS 的场景中。</li></ul></li></ol><div class="info custom-block"><p class="custom-block-title">💡 为什么要发起预检请求 ？</p><p><a href="https://blog.csdn.net/mym940725/article/details/79506994" title="《关于preflight request》" target="_blank" rel="noreferrer">《关于 preflight request》</a> 解释的比较清楚，目前浏览器限制跨域的方式主要有两种</p><ol><li>浏览器限制发起跨域请求</li><li>跨域请求可以正常发起，但是返回的结果被浏览器拦截</li></ol><p>一般浏览器都是采用第二种方式限制跨域请求，也就是说请求已经到达了服务器，如果是复杂请求，对服务器数据库的数据进行了操作，但返回给浏览器的结果却被拦截，被识别为一次失败的请求，这时候可能对数据库里数据已经产生了影响。为了防止这种情况发生，这种可能对服务器数据产生操作的 HTTP 请求，浏览器必须先试用 OPTIONS 方法发起预检请求，从而获知服务器是否允许该跨域请求。</p><p>参考资料：</p><ul><li><a href="https://blog.csdn.net/zimuKobby/article/details/108389410" title="https://blog.csdn.net/zimuKobby/article/details/108389410" target="_blank" rel="noreferrer">https://blog.csdn.net/zimuKobby/article/details/108389410</a></li><li><a href="https://www.imqianduan.com/nginx/preflight-options.html" target="_blank" rel="noreferrer">nginx 优化跨域的 OPTIONS 请求</a></li></ul></div><h4 id="如何配置跨域" tabindex="-1">如何配置跨域 <a class="header-anchor" href="#如何配置跨域" aria-label="Permalink to &quot;如何配置跨域&quot;">​</a></h4><blockquote><p><strong>注意：如果是 A 访问 B 出现跨域，则需要在 B 上进行跨域设置，而不是在 A 上。</strong></p></blockquote><p>比如 A 的地址是 <code>101.200.146.230:80</code>，然后访问 B 的地址 <code>101.200.146.230:4444</code> 中的一个 <code>test.json</code>文件，因为端口不同，所以会报跨域错误。</p><p>需要在 B 服务设置跨域：</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">4444;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">101.200.146.230;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 参考方案:https://segmentfault.com/q/1010000021055878</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#9ECBFF;">&quot;Access-Control-Allow-Origin&quot;</span><span style="color:#E1E4E8;"> $http_origin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#   带cookie请求需要加上这个字段，并设置为true</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Access-Control-Allow-Credentials</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># $http_origin动态获取请求客户端请求的域   不用*的原因是带cookie的请求不支持*号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># add_header &quot;Access-Control-Allow-Origin&quot; $http_origin; # 当前请求域名，不支持携带Cookie的请求</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#9ECBFF;">&quot;Access-Control-Allow-Methods&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;GET, POST, OPTIONS&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;"># 允许的请求方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#   表示请求头的字段 动态获取</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Access-Control-Allow-Headers $http_access_control_request_headers;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 防止报preflight request错误</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">= </span><span style="color:#9ECBFF;">&quot;OPTIONS&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/www/static; </span><span style="color:#6A737D;">#资源存放位置</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><strong>除了访问别人服务器上的文件是跨域外，接口访问也是跨域。因为接口也是文件，接口实际上跟服务器上的文件是有一个映射关系的，因此，接口也可以使用 nginx 来进行跨域配置。</strong></p><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><p><strong>什么是反向代理？</strong></p><p>反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p><p><strong>正向代理：</strong> 一般的访问流程是客户端直接向目标服务器发送请求并获取内容，使用正向代理后，客户端改为向代理服务器发送请求，并指定目标服务器（原始服务器），然后由代理服务器和原始服务器通信，转交请求并获得的内容，再返回给客户端。正向代理隐藏了真实的客户端，为客户端收发请求，使真实客户端对服务器不可见；</p><p>举个具体的例子 🌰，你的浏览器无法直接访问谷哥，这时候可以通过一个代理服务器来帮助你访问谷哥，那么这个服务器就叫正向代理。</p><p><img src="`+t+'" alt="1680416377724"></p><p><strong>反向代理：</strong> 与一般访问流程相比，使用反向代理后，直接收到请求的服务器是代理服务器，然后将请求转发给内部网络上真正进行处理的服务器，得到的结果返回给客户端。反向代理隐藏了真实的服务器，为服务器收发请求，使真实服务器对客户端不可见。一般在处理跨域请求的时候比较常用。现在基本上所有的大型网站都设置了反向代理。</p><p>举个具体的例子 🌰，去饭店吃饭，可以点川菜、粤菜、江浙菜，饭店也分别有三个菜系的厨师 👨‍🍳，但是你作为顾客不用管哪个厨师给你做的菜，只用点菜即可，小二将你菜单中的菜分配给不同的厨师来具体处理，那么这个小二就是反向代理服务器。</p><p><img src="'+r+`" alt="1680416395702"></p><p>简单的说，一般给客户端做代理的都是正向代理，给服务器做代理的就是反向代理。</p><p>总结：</p><p>正向代理与反向代理：<a href="https://juejin.cn/post/7095321237122990116" title="https://juejin.cn/post/7095321237122990116" target="_blank" rel="noreferrer">https://juejin.cn/post/7095321237122990116</a></p><p>正向代理是<strong>代理客户端</strong>，为客户端收发请求，使真实客户端对服务器不可见。</p><p>用途：科学上网。</p><p>反向代理是<strong>代理服务器</strong>，为服务器收发请求，使真实服务器对客户端不可见。</p><p>用途：负载均衡，提供安全保障。</p><p>nginx 反向代理主要通过 <code>proxy_pass</code>来配置，将你项目的开发机地址填写到 proxy_pass 后面，正常的格式为 proxy_pass URL 即可。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://10.10.10.10:20186;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>反向代理还有些常用的指令，我在这里给大家列出：</p><ul><li><code>proxy_set_header</code> :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。</li><li><code>proxy_connect_timeout</code>:配置 Nginx 与后端代理服务器尝试建立连接的超时时间。</li><li><code>proxy_read_timeout</code> : 配置 Nginx 向后端服务器组发出 read 请求后，等待相应的超时时间。</li><li><code>proxy_send_timeout</code>：配置 Nginx 向后端服务器组发出 write 请求后，等待相应的超时时间。</li><li><code>proxy_redirect</code> :用于修改后端服务器返回的响应头中的 Location 和 Refresh。</li></ul><h3 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h3><p>一般情况下，客户端发送多个请求到服务器，服务器处理请求，其中一部分可能要操作一些资源比如数据库、静态资源等，服务器处理完毕后，再将结果返回给客户端。</p><p>这种模式对于早期的系统来说，功能要求不复杂，且并发请求相对较少的情况下还能胜任，成本也低。随着信息数量不断增长，访问量和数据量飞速增长，以及系统业务复杂度持续增加，这种做法已无法满足要求，并发量特别大时，服务器容易崩。</p><p>很明显这是由于服务器性能的瓶颈造成的问题，除了堆机器之外，最重要的做法就是负载均衡。</p><p>请求爆发式增长的情况下，单个机器性能再强劲也无法满足要求了，这个时候集群的概念产生了，单个服务器解决不了的问题，可以使用多个服务器，然后将请求分发到各个服务器上，将负载分发到不同的服务器，这就是 <strong>负载均衡</strong> ，核心是「分摊压力」。</p><p><code>Nginx</code>提供以下 <code>负载均衡</code>方式，默认为 <code>轮询</code>。</p><ul><li><strong>轮询</strong>：无需配置，每个请求根据时间顺序逐一分配到不同服务器，若其中一个服务挂了会自动被剔除</li><li><strong>weight</strong>：根据权重分配，指定每个服务器的轮询几率，权重越高其被访问的概率越大，可解决服务器性能不均的问题</li><li><strong>ip_hash</strong>：根据访问 <code>IP</code>的 <code>Hash结果</code>分配，每个访客固定访问一个服务器，可解决动态网页 <code>Session共享</code>的问题</li><li><strong>fair</strong>：根据服务器响应时间分配，响应时间短的服务器会优先分配，需安装 <code>nginx-upstream-fair</code></li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">firstdemo </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># ip_hash; # IpHash方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># fair; # Fair方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> http://127.0.0.1:9999; </span><span style="color:#6A737D;"># 负载均衡目的服务地址：可设置多个服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> http://127.0.0.1:8888;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> http://127.0.0.1:7777 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;"># 配置权重：不配置默认为1</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy_pass firstdemo;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> proxy_connect_timeout </span><span style="color:#E1E4E8;">10;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>上面配置各个服务器中都指明了传输协议为 <code>http://</code>, 但是如果上面的接口没有指明协议的话，那么我们需要在 proxy_pass 上加上了，<code>proxy_pass http://proxy_xxx</code> 这样的，如下配置代码：</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">firstdemo </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># ip_hash; # IpHash方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># fair; # Fair方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 127.0.0.1:9999; </span><span style="color:#6A737D;"># 负载均衡目的服务地址：可设置多个服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 127.0.0.1:8888;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 127.0.0.1:7777 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;"># 配置权重：不配置默认为1</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy_pass http://firstdemo;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> proxy_connect_timeout </span><span style="color:#E1E4E8;">10;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-label="Permalink to &quot;动静分离&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>动静分离分离的是后端的动态资源和静态资源，而不是前端的资源。前端的都是静态资源。。</p></div><p>动静分离就是根据一定规则静态资源的请求全部请求 Nginx 服务器，后台数据请求转发到 Web 应用服务器上。从而达到动静分离的目的。目前比较流行的做法是将静态资源部署在 Nginx 上，而 Web 应用服务器只处理动态数据请求。这样减少 Web 应用服务器的并发压力。</p><p>动静分离，说白了，就是将网站静态资源（HTML，JavaScript，CSS，img 等文件）与后台应用分开部署，静态资源的请求全部请求 Nginx 服务器，后台数据请求转发到 Web 应用服务器上。提高用户访问静态代码的速度，降低对后台应用服务器的请求。后台应用服务器只负责动态数据请求。</p><p>动静分离可通过 location 对请求 url 进行匹配，将网站静态资源（HTML，JavaScript，CSS，img 等文件）与后台应用分开部署，提高用户访问静态代码的速度，降低对后台应用访问。通常将静态资源放到 nginx 中，动态资源转发到 tomcat 服务器中。</p><p>目前动静分离的方式有两种解决方案。</p><ul><li>将静态资源单独部署到一个域名。</li><li>将静态资源放在项目之外的某个文件夹，通过 <code>Nginx</code>配置区分。（比如上述在 <code>www</code>文件夹中创建的 <code>client</code>文件夹用于存放 <code>Web</code>应用源码，创建的 <code>static</code>文件夹用于存放静态资源。）</li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">101.200.146.230; </span><span style="color:#6A737D;"># 指定IP或域名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/www/client/daotin;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 拦截静态资源</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">.*\\.(gif|jpg|jpeg|bmp|png|ico|txt)</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">  /www/static;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> expires </span><span style="color:#E1E4E8;">7d;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示例：</p><p>比如当我们代码中访问资源文件的时候，就会自动去 <code>/www/static</code>目录寻找对应的文件。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-image</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/touxiang.jpg&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-image</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>需要注意的是，如果是下面的写法</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-image</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/static/touxiang.jpg&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-image</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>当我们使用路径匹配代理到 <code>/www/static</code> 后，它其实访问的是 <code>/www/static/static/touxiang.jpg </code>，而不是 <code>/www/static/touxiang.jpg</code>，这个千万要注意了。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/static/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 访问的是 /www/static/static/touxiang.jpg</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/www/static;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 访问的是 /www/static/touxiang.jpg</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># alias /www/static/;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>这也是 root 和 alias 的区别。</p><p>参考：</p><ul><li><a href="https://developer.aliyun.com/article/793181" target="_blank" rel="noreferrer">https://developer.aliyun.com/article/793181</a></li><li><a href="https://juejin.cn/post/7112826654291918855" target="_blank" rel="noreferrer">https://juejin.cn/post/7112826654291918855#heading-4</a></li></ul><h3 id="适配-pc-或移动设备" tabindex="-1">适配 PC 或移动设备 <a class="header-anchor" href="#适配-pc-或移动设备" aria-label="Permalink to &quot;适配 PC 或移动设备&quot;">​</a></h3><p>现在很多网站都是有了 PC 端和 H5 站点的，因为这样就可以根据客户设备的不同，显示出体验更好的，不同的页面了。</p><p>除了自适应之外，很多大型网站使用分开制作的方式来呈现 PC 和 H5 站点内容。</p><p>Nginx 通过内置变量 <code>$http_user_agent</code>，可以获取到请求客户端的 userAgent，就可以用户目前处于移动端还是 PC 端，进而展示不同的页面给用户。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">server{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">localhost;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($http_user_agent </span><span style="color:#F97583;">~* </span><span style="color:#9ECBFF;">&#39;(Android|iPhone|iPod)&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/usr/share/nginx/mobile;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>当然，对于单页面应用，入口都是 index.html，PC 和移动端会使用组件来区分，所以不会用到上面的配置。</p><h3 id="gzip-压缩" tabindex="-1">Gzip 压缩 <a class="header-anchor" href="#gzip-压缩" aria-label="Permalink to &quot;Gzip 压缩&quot;">​</a></h3><p>首先，gzip 是需要服务器和浏览器同时支持的。当浏览器支持 gzip 压缩时，会在请求消息中包含 <code>Accept-Encoding: gzip</code>,这样 Nginx 就会向浏览器发送经过 gzip 后的内容，同时在相应信息头中加入 <code>Content-Encoding:gzip</code>，声明这是 gzip 后的内容，告知浏览器要先解压后才能解析输出。</p><p>Nginx 提供了专门的 gzip 模块，并且模块中的指令非常丰富。</p><ul><li><code>gzip</code> : 该指令用于开启或 关闭 gzip 模块。</li><li><code>gzip_buffers</code> : 设置系统获取几个单位的缓存用于存储 gzip 的压缩结果数据流。</li><li><code>gzip_comp_level</code> : gzip 压缩比，压缩级别是 1-9，1 的压缩级别最低，9 的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。</li><li><code>gzip_disable</code> : 可以通过该指令对一些特定的 User-Agent 不使用压缩功能。</li><li><code>gzip_min_length</code>:设置允许压缩的页面最小字节数，页面字节数从相应消息头的 Content-length 中进行获取。</li><li><code>gzip_http_version</code>：识别 HTTP 协议版本，其值可以是 1.1.或 1.0.</li><li><code>gzip_proxied</code> : 用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩。</li><li><code>gzip_vary</code> : 用于在响应消息头中添加 Vary：Accept-Encoding,使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩。</li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   .....</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 需要压缩的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_types </span><span style="color:#E1E4E8;">text/plain application/javascript text/css;</span></span>
<span class="line"><span style="color:#E1E4E8;">   .....</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><details class="details custom-block"><summary>❓ 如果 Nginx 已经做了 gzip，那么 Vue 还需要做吗？</summary><p>1、其实 Vue 本身不能做压缩打包之类的功能，他是靠 webpack 进行打包，而 webpack 有插件可以生产 gz 类型的文件。</p><p>2、当你把一个包含 gz 的静态资源放到 nginx 上，有 web 请求过来时，nginx 如果开启了 gzip，那么它会检测你的静态资源文件夹里面有没有 gz 文件，如果有的话，nginx 会直接返回 gz 文件，如果没有，nginx 会动态的压缩成 gz 返回到浏览器。</p><p>因此，当服务器配置了 gzip，那么前端可以不用做 gzip，但是你做好了 gz 文件放到服务器上， 可以为服务器省下实时压缩成 gz 文件的计算资源，所以推荐还是前端做好 gzip 然后放到服务器上。</p><blockquote><p>Tips： nginx 检测 gz 文件需要手动配置开启，也可以不检测，每次都实时压缩为 gzip</p></blockquote></details><h3 id="nginx-静态压缩和动态压缩" tabindex="-1"><a href="https://www.cnblogs.com/hahaha111122222/p/16277891.html" target="_blank" rel="noreferrer">Nginx 静态压缩和动态压缩</a> <a class="header-anchor" href="#nginx-静态压缩和动态压缩" aria-label="Permalink to &quot;[Nginx 静态压缩和动态压缩](https://www.cnblogs.com/hahaha111122222/p/16277891.html)&quot;">​</a></h3><p>Nginx 中配置前端的 gzip 压缩，有两种思路：</p><ul><li>Nginx 动态压缩，静态文件还是普通文件，请求来了再压缩，然后返回给前端。</li><li>Nginx 静态压缩，提前把文件压缩成 .gz 格式，请求来了，直接返回即可。</li></ul><p>Nginx 静态压缩需要设置：</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">gzip_static</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">如何判断 gzip_static 是否生效？</p><p>在请求的 response headers 里面的 Etag 里面，没有 <code>W/</code>就表明使用的是我们自己的 .gz 文件。</p></div><h3 id="图片防盗链" tabindex="-1">图片防盗链 <a class="header-anchor" href="#图片防盗链" aria-label="Permalink to &quot;图片防盗链&quot;">​</a></h3><p>防盗链的原理其实很简单，目前比较流行的做法就是通过 Referer 来进行判断和限制，Referer 的解释说明如下：</p><blockquote><p>HTTP Referer 是 header 的一部分，当浏览器向 web 服务器发送请求的时候，一般会带上 Referer，告诉服务器我是从哪个页面链接过来的，服务器基此可以获得一些信息用于处理。——引用自百度百科</p></blockquote><p>简单来说，假如我博客域名是 <a href="http://xn--devler-vy0j03sbubo1swtetzhynxzfn.cn" target="_blank" rel="noreferrer">devler.cn</a>，我在 nginx 中设置，只允许 Referer 为 <code>*.devler.cn</code> 的来源请求图片，其它网站来的一律禁止。这里我们需要用到 <code>ngx_http_referer_module</code> 模块和 <code>$invalid_referer</code> 变量，请看下面进一步解释。</p><h4 id="ngx-http-referer-module-模块" tabindex="-1">ngx_http_referer_module 模块 <a class="header-anchor" href="#ngx-http-referer-module-模块" aria-label="Permalink to &quot;ngx_http_referer_module 模块&quot;">​</a></h4><p><code>ngx_http_referer_module</code> 模块用于阻止对“Referer”头字段中具有无效值的请求访问站点。应该记住，使用适当的“Referer”字段值来构造请求非常容易，因此本模块的预期目的不是要彻底阻止此类请求，而是阻止常规浏览器发送的请求的大量流量。还应该考虑到，即使对于有效请求，常规浏览器也可能不发送“Referer”字段。</p><p>语法：<code>valid_referers none | blocked | server_names | string ...;</code></p><p>可用于：server,location</p><p>可以看到 valid_referers 指令中存在一些参数，比如 none|blocked，含义如下：</p><ul><li>none：请求标头中缺少“Referer”字段，也就是说 Referer 为空，浏览器直接访问的时候 Referer 一般为空。</li><li>blocked： Referer”字段出现在请求标头中，但其值已被防火墙或代理服务器删除; 这些值是不以“<a href="http://xn--ivg/" target="_blank" rel="noreferrer">http://”</a> 或 “<a href="https://xn--ivg/" target="_blank" rel="noreferrer">https://”</a> 开头的字符串;</li><li>server_names： 服务器名称，也就是域名列表。</li></ul><p><code>$invalid_referer</code>变量</p><p>我们设置 valid_referers 指令后，会将其结果传递给一个变量 invalid_referer，其值为 0 或 1，可以使用这个指令来实现防盗链功能，如果 <code>$valid_referers</code>列表中没有包含 Referer 头的值，<code>$invalid_referer</code>将被设置为 1。</p><h4 id="设置防盗链白名单" tabindex="-1">设置防盗链白名单 <a class="header-anchor" href="#设置防盗链白名单" aria-label="Permalink to &quot;设置防盗链白名单&quot;">​</a></h4><p>白名单就是只允许白名单内的域名访问，其余一律禁止。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">.*.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico|webp)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> valid_referers </span><span style="color:#E1E4E8;">none blocked *.devler.cn;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($invalid_referer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>上面的配置含义是先用 location 匹配出需要的格式（图片和视频），然后用 valid_referers 指令设置允许的域名，其它域名没有包含在 valid_referers 列表中，$invalid_referer 变量返回的值为 1，最终返回 403，禁止访问。以上就是防盗链白名单的设置。</p><h4 id="防盗链黑名单" tabindex="-1">防盗链黑名单 <a class="header-anchor" href="#防盗链黑名单" aria-label="Permalink to &quot;防盗链黑名单&quot;">​</a></h4><p>黑名单与白名单正好相反，就是只禁止黑名单中的域名请求，其余一律放行，相比白名单，黑名单的限制更加宽松。网上大部分教程只提到了防盗链白名单的设置，了解原理后黑名单的设置方法也差不多。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">.*.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico|webp)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> valid_referers </span><span style="color:#E1E4E8;">*.baidu.com;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($invalid_referer </span><span style="color:#F97583;">= </span><span style="color:#E1E4E8;">0) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>上面的配置中我们用 valid_referers 指令设置黑名单域名*.baidu.com，获取到指定的 Referer 头之后，$invalid_referer 返回值为 0，最终返回 403，禁止百度的域名来访问。</p><h2 id="完整配置示例" tabindex="-1">完整配置示例 <a class="header-anchor" href="#完整配置示例" aria-label="Permalink to &quot;完整配置示例&quot;">​</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">#定义Nginx运行的用户和用户组</span></span>
<span class="line"><span style="color:#F97583;">user </span><span style="color:#E1E4E8;">nginx;</span></span>
<span class="line"><span style="color:#6A737D;">#nginx进程数，通常设置成和cpu的数量相等</span></span>
<span class="line"><span style="color:#F97583;">worker_processes </span><span style="color:#E1E4E8;">4;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#全局错误日志定义位置和类型，[debug | info | notice | warn | error | crit]</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#进程pid文件</span></span>
<span class="line"><span style="color:#6A737D;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#工作模式及连接数上限</span></span>
<span class="line"><span style="color:#F97583;">events</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#epoll是多路复用IO(I/O Multiplexing)中的一种方式,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#仅用于linux2.6以上内核,可以大大提高nginx的性能</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#是Linux 2.6以上版本内核中的高性能网络I/O模型，linux建议epoll，如果跑在FreeBSD上面，就用kqueue模型。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#补充说明：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#与apache相类，nginx针对不同的操作系统，有不同的事件模型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#A）标准事件模型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#Select、poll属于标准事件模型，如果当前系统不存在更有效的方法，nginx会选择select或poll</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#B）高效事件模型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#Kqueue：使用于FreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 和 MacOS X.使用双处理器的MacOS X系统使用kqueue可能会造成内核崩溃。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#Epoll：使用于Linux内核2.6版本及以后的系统。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#/dev/poll：使用于Solaris 7 11/99+，HP/UX 11.22+ (eventport)，IRIX 6.5.15+ 和 Tru64 UNIX 5.1A+。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#Eventport：使用于Solaris 10。 为了防止出现内核崩溃的问题， 有必要安装安全补丁。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> use </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;"> epoll</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#单个进程最大连接数（最大连接数=连接数+进程数）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cup跑到100%就行。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> worker_connections </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#keepalive 超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> keepalive_timeout </span><span style="color:#E1E4E8;">60;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#分页大小可以用命令getconf PAGESIZE 取得。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#[root@web001 ~]# getconf PAGESIZE</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> client_header_buffer_size </span><span style="color:#E1E4E8;">4k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> open_file_cache </span><span style="color:#E1E4E8;">max=65535 inactive=60s;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#这个是指多长时间检查一次缓存的有效信息。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> open_file_cache_valid </span><span style="color:#E1E4E8;">80s;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> open_file_cache_min_uses </span><span style="color:#E1E4E8;">1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件是记录cache错误.</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> open_file_cache_errors </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#文件扩展名与文件类型映射表。设定mime类型,类型由mime.type文件定义</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">/etc/nginx/mime.types;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#默认文件类型</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> default_type </span><span style="color:#E1E4E8;">application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#默认编码</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> charset </span><span style="color:#E1E4E8;">utf-8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#设定日志格式</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> log_format </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;$</span><span style="color:#E1E4E8;">remote_addr</span><span style="color:#9ECBFF;"> - $</span><span style="color:#E1E4E8;">remote_user</span><span style="color:#9ECBFF;"> [$</span><span style="color:#E1E4E8;">time_local</span><span style="color:#9ECBFF;">] &quot;$</span><span style="color:#E1E4E8;">request</span><span style="color:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;$</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;"> $</span><span style="color:#E1E4E8;">body_bytes_sent</span><span style="color:#9ECBFF;"> &quot;$</span><span style="color:#E1E4E8;">http_referer</span><span style="color:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;&quot;$</span><span style="color:#E1E4E8;">http_user_agent</span><span style="color:#9ECBFF;">&quot; &quot;$</span><span style="color:#E1E4E8;">http_x_forwarded_for</span><span style="color:#9ECBFF;">&quot;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 访问日志</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;"> logs/access.log </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#服务器名字的hash表大小</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_names_hash_bucket_size </span><span style="color:#E1E4E8;">128;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> client_header_buffer_size </span><span style="color:#E1E4E8;">32k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> large_client_header_buffers </span><span style="color:#E1E4E8;">4 </span><span style="color:#79B8FF;">64k</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#设定通过nginx上传文件的大小</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;">8m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> sendfile </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#对于普通应用，必须设为 on,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> sendfile </span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> tcp_nopush </span><span style="color:#E1E4E8;">off;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#长连接超时时间，单位是秒</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> keepalive_timeout </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> tcp_nodelay </span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#gzip模块设置</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip </span><span style="color:#E1E4E8;">on; </span><span style="color:#6A737D;">#开启gzip压缩输出</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_min_length </span><span style="color:#E1E4E8;">1k;    </span><span style="color:#6A737D;">#最小压缩文件大小</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_buffers </span><span style="color:#E1E4E8;">4 </span><span style="color:#79B8FF;">16k</span><span style="color:#E1E4E8;">;    </span><span style="color:#6A737D;">#压缩缓冲区</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_http_version </span><span style="color:#E1E4E8;">1.0; </span><span style="color:#6A737D;">#压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_comp_level </span><span style="color:#E1E4E8;">2;     </span><span style="color:#6A737D;">#压缩等级</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_types </span><span style="color:#E1E4E8;">text/plain application/x-javascript text/css application/xml;    </span><span style="color:#6A737D;">#压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_vary </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_connect_timeout </span><span style="color:#E1E4E8;">300;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_send_timeout </span><span style="color:#E1E4E8;">300;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_read_timeout </span><span style="color:#E1E4E8;">300;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_buffer_size </span><span style="color:#E1E4E8;">64k;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_buffers </span><span style="color:#E1E4E8;">4 </span><span style="color:#79B8FF;">64k</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_busy_buffers_size </span><span style="color:#E1E4E8;">128k;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_temp_file_write_size </span><span style="color:#E1E4E8;">128k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#设定请求缓冲</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> client_header_buffer_size </span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">128k</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> large_client_header_buffers </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">128k</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#负载均衡配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">piao.jd.com </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 192.168.80.121:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        server 192.168.80.122:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        server 192.168.80.123:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#nginx的upstream目前支持4种方式的分配</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#1、轮询（默认）</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#2、weight</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#例如：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#upstream bakend {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 192.168.0.14 weight=10;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 192.168.0.15 weight=10;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#2、ip_hash</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#例如：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#upstream bakend {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    ip_hash;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 192.168.0.14:88;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 192.168.0.15:80;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#3、fair（第三方）</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#按后端服务器的响应时间来分配请求，响应时间短的优先分配。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#upstream backend {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server server1;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server server2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fair;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#4、url_hash（第三方）</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#upstream backend {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server squid1:3128;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server squid2:3128;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    hash $request_uri;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    hash_method crc32;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#tips:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#upstream bakend{#定义负载均衡设备的Ip及设备状态}{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    ip_hash;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 127.0.0.1:9090 down;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 127.0.0.1:8080 weight=2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 127.0.0.1:6060;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    server 127.0.0.1:7070 backup;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#在需要使用负载均衡的server中增加 proxy_pass http://bakend/;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#每个设备的状态设置为:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#1.down表示单前的server暂时不参与负载</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#2.weight为weight越大，负载的权重就越大。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#4.fail_timeout:max_fails次失败后，暂停的时间。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#nginx支持同时设置多组的负载均衡，用来给不用的server来使用。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#client_body_temp_path设置记录文件的目录 可以设置最多3层目录</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#设定虚拟主机配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    server {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#侦听80端口</span></span>
<span class="line"><span style="color:#E1E4E8;">        listen    </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 域名可以有多个，用空格隔开。可以使用ip</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> blog.redis.com.cn;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 默认入口文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#定义服务器的默认网站根目录位置</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/www;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#设定本虚拟主机的访问日志</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;"> logs/nginx.access.log </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 根据请求 URI 设置配置。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#定义首页索引文件的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.php index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 禁止ip1-200访问</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># deny xxx.xxx.xxx.1/200;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># deng all;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 允许访问</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># allow xxx.xxx.xxx.1/200;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 定义错误提示页面</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> error_page </span><span style="color:#E1E4E8;">500 </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;"> /50x.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/50x.html </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 静态文件，设置缓存时间</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">^/(images|javascript|js|css|flash|media|static)/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#过期30天，静态文件不怎么更新，过期可以设大一点，</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#如果频繁更新，则可以设置得小一点。</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> expires </span><span style="color:#E1E4E8;">30d;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">.php$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_pass </span><span style="color:#E1E4E8;">127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_index </span><span style="color:#E1E4E8;">index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 对 &quot;/connect-controller&quot; 启用反向代理</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/connect-controller </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 代理地址：当用户使用接口 http://xy.xxx.com/xxx 的时候，nginx会自动指向内部服务器 http://127.0.0.1:88/xxx的</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 具体参考链接：https://blog.csdn.net/yujia_666/article/details/111595082</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://127.0.0.1:88; </span><span style="color:#6A737D;">#请注意此处端口号不能与虚拟主机监听的端口号一样（也就是server监听的端口）</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_redirect </span><span style="color:#E1E4E8;">off;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># proxy_set_header 用来重定义发往后端服务器的请求头。</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># proxy_set_header是nginx设置请求头给上游服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># add_header是nginx设置响应头信息给浏览器。</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># 参考：https://blog.csdn.net/qq_38826019/article/details/109176896</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#以下是一些反向代理的配置，可选。</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#允许客户端请求的最大单文件字节数</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;">10m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#缓冲区代理缓冲用户端请求的最大字节数，</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> client_body_buffer_size </span><span style="color:#E1E4E8;">128k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#表示使nginx阻止HTTP应答代码为400或者更高的应答。</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_intercept_errors </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#后端服务器连接的超时时间_发起握手等候响应超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#nginx跟后端服务器连接超时时间(代理连接超时)</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_connect_timeout </span><span style="color:#E1E4E8;">90;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#后端服务器数据回传时间(代理发送超时)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_send_timeout </span><span style="color:#E1E4E8;">90;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#连接成功后，后端服务器响应时间(代理接收超时)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_read_timeout </span><span style="color:#E1E4E8;">90;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_buffer_size </span><span style="color:#E1E4E8;">4k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#proxy_buffers缓冲区，网页平均在32k以下的设置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_buffers </span><span style="color:#E1E4E8;">4 </span><span style="color:#79B8FF;">32k</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#高负荷下缓冲大小（proxy_buffers*2）</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_busy_buffers_size </span><span style="color:#E1E4E8;">64k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_temp_file_write_size </span><span style="color:#E1E4E8;">64k;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#禁止访问 .htxxx 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/.ht </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> deny </span><span style="color:#E1E4E8;">all;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre></div><h4 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h4><ul><li>nginx 中文文档：<a href="https://docshome.gitbook.io/nginx-docs/" target="_blank" rel="noreferrer">https://docshome.gitbook.io/nginx-docs/</a></li><li>location 匹配规则：<a href="https://www.cnblogs.com/woshimrf/p/nginx-config-location.html" title="https://www.cnblogs.com/woshimrf/p/nginx-config-location.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/woshimrf/p/nginx-config-location.html</a></li><li><a href="https://mp.weixin.qq.com/s/DAIbd01AlHWnAna7WFMjig" target="_blank" rel="noreferrer">结合 Docker，快速掌握 Nginx 2 大核心用法——神光</a></li></ul><h3 id="ty-store-示例" tabindex="-1">TY-Store 示例 <a class="header-anchor" href="#ty-store-示例" aria-label="Permalink to &quot;TY-Store 示例&quot;">​</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">user </span><span style="color:#E1E4E8;"> nginx;</span></span>
<span class="line"><span style="color:#F97583;">worker_processes </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">error_log </span><span style="color:#E1E4E8;"> /var/log/nginx/error.log</span><span style="color:#79B8FF;"> warn</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">pid </span><span style="color:#E1E4E8;">     /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#F97583;">events</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> worker_connections </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;"># 每个进程允许的最大连接数</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">http</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">      /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> default_type </span><span style="color:#E1E4E8;"> application/octet-stream;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#设定日志格式</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> log_format </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;$</span><span style="color:#E1E4E8;">remote_addr</span><span style="color:#9ECBFF;"> - $</span><span style="color:#E1E4E8;">remote_user</span><span style="color:#9ECBFF;"> [$</span><span style="color:#E1E4E8;">time_local</span><span style="color:#9ECBFF;">] &quot;$</span><span style="color:#E1E4E8;">request</span><span style="color:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&#39;$</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;"> $</span><span style="color:#E1E4E8;">body_bytes_sent</span><span style="color:#9ECBFF;"> &quot;$</span><span style="color:#E1E4E8;">http_referer</span><span style="color:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&#39;&quot;$</span><span style="color:#E1E4E8;">http_user_agent</span><span style="color:#9ECBFF;">&quot; &quot;$</span><span style="color:#E1E4E8;">http_x_forwarded_for</span><span style="color:#9ECBFF;">&quot;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;"> /var/log/nginx/access.log </span><span style="color:#79B8FF;"> main</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;">100M;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> client_body_buffer_size </span><span style="color:#E1E4E8;">100M;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 这个指令指定是否传递4xx和5xx错误信息到客户端，或者允许nginx使用error_page处理错误信息。你必须明确的在error_page中指定处理方法使这个参数有效</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> fastcgi_intercept_errors </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> server_tokens </span><span style="color:#E1E4E8;">off;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> sendfile </span><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#tcp_nopush     on;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> keepalive_timeout </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#gzip  on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tms-services</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 10.8.15.216:11001;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 10.8.15.217:11001;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#server 10.8.11.30:5700;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ops-services </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 10.8.15.216:11000;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> localhost;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header Content-Security-Policy &quot;script-src &#39;unsafe-inline&#39; &#39;unsafe-eval&#39; &#39;self&#39;; style-src &#39;unsafe-inline&#39; &#39;self&#39;&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header X-XSS-Protection &#39;1; mode=block&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header X-Content-Type-Options &#39;nosniff&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header Set-Cookie &quot;HttpOnly&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header Set-Cookie &quot;Secure&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header Strict-Transport-Security &quot;max-age=63072000;includeSubDomains;preload&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header Cache-Control &#39;no-store, no-cache, must-revalidate, post-check=0, pre-check=0&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#add_header Pragma no-cache;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">!~* </span><span style="color:#E1E4E8;">GET|POST|DELETE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">!~* </span><span style="color:#E1E4E8;">GET|POST|DELETE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~*</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.(ini|cfg|dwt|lbi|lzma|arc)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~*</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/(modules|images|js|plugins|css)/$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~*</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.(tar|gz|7z|bz|ace|uha|uda|zpaq)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ossfile </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_uri </span><span style="color:#F97583;">~* </span><span style="color:#DBEDFF;">^.*\\/(.*)\\.(java|txt|doc|pdf|rar|gz|zip|docx|exe|xlsx|ppt|pptx|jpg|png|bin|tar)(\\?attname=([^&amp;]+))$</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Content-Disposition </span><span style="color:#9ECBFF;">&quot;attachment;filename=$</span><span style="color:#E1E4E8;">arg_attname</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_next_upstream </span><span style="color:#E1E4E8;">http_502 http_504</span><span style="color:#79B8FF;"> error</span><span style="color:#E1E4E8;"> timeout invalid_header;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">https://whtypos-oss-sg.oss-ap-southeast-1.aliyuncs.com/ossfile;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> expires </span><span style="color:#E1E4E8;">30d;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/s3file </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_uri </span><span style="color:#F97583;">~* </span><span style="color:#DBEDFF;">^.*\\/(.*)\\.(java|txt|doc|pdf|rar|gz|zip|docx|exe|xlsx|ppt|pptx|jpg|png|bin|tar)(\\?attname=([^&amp;]+))$</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Content-Disposition </span><span style="color:#9ECBFF;">&quot;attachment;filename=$</span><span style="color:#E1E4E8;">arg_attname</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_next_upstream </span><span style="color:#E1E4E8;">http_502 http_504</span><span style="color:#79B8FF;"> error</span><span style="color:#E1E4E8;"> timeout invalid_header;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://10.8.40.233:30878/bluelinkup/s3file;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> expires </span><span style="color:#E1E4E8;">30d;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># root与alias区别</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># root示例：请求 http://127.0.0.1:80/blog/root.html 这个地址时，那么在服务器里面对应的真正的资源是 /usr/local/nginx/html/blog/root.html文件。可以发现真实的路径是root指定的值加上location指定的值。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># alisa示例：请求http://127.0.0.1:80/blog/alias.html时，在服务器查找的资源路径是：/usr/local/nginx/html/alias.html。正如其名，alias指定的路径是location的别名，不管location的值怎么写，资源的真实路径都是alias指定的路径.。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ops/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_filename </span><span style="color:#F97583;">~* </span><span style="color:#E1E4E8;">.*\\.(?:htm|html)$) {</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Cache-Control </span><span style="color:#9ECBFF;">&quot;private, no-store, no-cache, must-revalidate, proxy-revalidate&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> alias </span><span style="color:#E1E4E8;"> /usr/share/nginx/html/ops/;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/services/tms </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://tms-services/;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000m</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Connection </span><span style="color:#9ECBFF;">&quot;upgrade&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/services/ops </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://ops-services/;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000m</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 配置websocket -------start---------</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Connection </span><span style="color:#9ECBFF;">&quot;upgrade&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_read_timeout </span><span style="color:#E1E4E8;">3600s;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_send_timeout </span><span style="color:#E1E4E8;">3600s;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 配置websocket -------end---------</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;"> /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/help-center/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://10.8.15.216:22011/;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;">2000m;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/assistant/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://10.8.15.216:9998/;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> client_max_body_size </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000m</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 配置websocket -------start---------</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Connection </span><span style="color:#9ECBFF;">&quot;upgrade&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_read_timeout </span><span style="color:#E1E4E8;">3600s;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;"> proxy_send_timeout </span><span style="color:#E1E4E8;">3600s;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 配置websocket -------end---------</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="nginx-可视化配置" tabindex="-1">Nginx 可视化配置 <a class="header-anchor" href="#nginx-可视化配置" aria-label="Permalink to &quot;Nginx 可视化配置&quot;">​</a></h2><p>工具：<a href="https://github.com/digitalocean/nginxconfig.io" title="https://github.com/digitalocean/nginxconfig.io" target="_blank" rel="noreferrer">https://github.com/digitalocean/nginxconfig.io</a></p><h2 id="进阶学习资料" tabindex="-1">进阶学习资料 <a class="header-anchor" href="#进阶学习资料" aria-label="Permalink to &quot;进阶学习资料&quot;">​</a></h2><ul><li><a href="https://jspang.com/article/39" target="_blank" rel="noreferrer">一个前端必会的 Nginx 免费教程 (共 11 集)</a></li><li>极客时间：<a href="https://time.geekbang.org/course/intro/100020301?tab=intro" title="Nginx 核心知识 150 讲" target="_blank" rel="noreferrer">Nginx 核心知识 150 讲</a></li></ul>`,188)]))}const x=n(E,[["render",i]]);export{_ as __pageData,x as default};
