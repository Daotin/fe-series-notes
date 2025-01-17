import{_ as n,o as a,c as l,S as p}from"./chunks/framework.d5a27ec8.js";const o="/fe-series-notes/assets/img-20240508140590.af2691f4.png",e="/fe-series-notes/assets/img-20240508140566.83df170d.png",t="/fe-series-notes/assets/img-20240508140579.90c60c5a.png",E="/fe-series-notes/assets/img-20240508140502.e27b37b0.png",c="/fe-series-notes/assets/img-20240508140504.35f0e96e.png",v=JSON.parse('{"title":"玩转 Vue 3 全家桶","description":"","frontmatter":{},"headers":[],"relativePath":"玩转vue3全家桶/index.md","filePath":"玩转vue3全家桶/index.md","lastUpdated":1715150313000}'),r={name:"玩转vue3全家桶/index.md"};function y(i,s,u,F,d,g){return a(),l("div",null,s[0]||(s[0]=[p('<h1 id="玩转-vue-3-全家桶" tabindex="-1">玩转 Vue 3 全家桶 <a class="header-anchor" href="#玩转-vue-3-全家桶" aria-label="Permalink to &quot;玩转 Vue 3 全家桶&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>前端工程师进阶困难的痛点就是，没有体系化的学习。</p><p><img src="'+o+'" alt=""></p><p>问题 todo</p><ul><li>Vue 2 大胆引入虚拟 DOM 来解决响应式数据过多的问题？</li></ul><h2 id="前端框架发展史" tabindex="-1">前端框架发展史 <a class="header-anchor" href="#前端框架发展史" aria-label="Permalink to &quot;前端框架发展史&quot;">​</a></h2><p><strong>石器时代</strong>：</p><ul><li>静态网页。整个 90 年代，受限于网速，网页都是静态页，显示非常单一，前端的工作大部分都只是让美工来切切图和写写 HTML+CSS。</li><li>动态网页。JSP形式，缺点任何数据更新，都需要刷新整个页面，并且在带宽不足的年代，这样做会耗费不少加载网页的时间。</li><li>Ajax阶段。2004 年，Google 发布了 Gmail，用户可以在不刷新页面的情况下进行复杂的交互，之后，Ajax 逐渐成为网页开发的技术标准，也不断地被应用于各种网站。也宣告了 Web2.0 时代正式到来。</li></ul><p><strong>铁器时代</strong>：</p><ul><li>jQuery+Bootstrap：解决浏览器兼容问题</li></ul><p><strong>工业时代</strong>：</p><ul><li>MVVM（数据驱动视图时代）：AngularJS 的诞生，引领了前端 MVVM 模式的潮流；我们甚至不再需要使用 jQuery 去寻找 DOM，而是只关注数据的来源和修改，这也就是现在我们所处的前端时代。</li></ul><h2 id="vue3新特性" tabindex="-1">Vue3新特性 <a class="header-anchor" href="#vue3新特性" aria-label="Permalink to &quot;Vue3新特性&quot;">​</a></h2><h3 id="vue2遗留问题" tabindex="-1">Vue2遗留问题 <a class="header-anchor" href="#vue2遗留问题" aria-label="Permalink to &quot;Vue2遗留问题&quot;">​</a></h3><ul><li>从开发维护的角度看，Vue 2 是使用 Flow.js 来做类型校验。但现在 Flow.js 已经停止维护了，整个社区都在全面使用 TypeScript 来构建基础库，Vue 团队也不例外。</li><li>从社区的二次开发难度来说，Vue 2 内部运行时，是直接执行浏览器 API 的。但这样就会在 Vue 2 的跨端方案中带来问题，要么直接进入 Vue 源码中，和 Vue 一起维护，比如 Vue 2 中你就能见到 Weex 的文件夹。</li><li>从我们普通开发者的角度来说，Vue 2 响应式并不是真正意义上的代理，而是基于 Object.defineProperty() 实现的。所以有很多缺陷，比如：新增数据就无法监听</li><li>Option API 在组织代码较多组件的时候不易维护。当代码超过 300 行的时候，新增或者修改一个功能，就需要不停地在 data，methods 里跳转写代码，我称之为上下反复横跳。</li></ul><h3 id="从七个方面了解-vue-3-新特性" tabindex="-1">从七个方面了解 Vue 3 新特性 <a class="header-anchor" href="#从七个方面了解-vue-3-新特性" aria-label="Permalink to &quot;从七个方面了解 Vue 3 新特性&quot;">​</a></h3><p><strong>1、RFC 机制</strong></p><p>新的 RFC 机制也让我们所有人都可以参与 Vue 新语法的讨论。</p><p><strong>2、响应式系统</strong></p><p>Vue3使用Proxy对数据进行代理，而不是使用Object.defineProperty对数据进行拦截。</p><p><strong>Proxy 代表一种方向，就是框架会越来越多的拥抱浏览器的新特性。</strong></p><p><strong>3、自定义渲染器</strong></p><p>Vue 2 内部所有的模块都是揉在一起的，这样做会导致不好扩展的问题。</p><p>Vue 3 是怎么解决这个问题的呢？那就是<strong>拆包</strong>，使用最近流行的 <strong>monorepo</strong> 管理方式，响应式、编译和运行时全部独立了。</p><p>比如响应式独立了出来。而 Vue 2 的响应式只服务于 Vue，Vue 3 的响应式就和 Vue 解耦了，你甚至可以在 Node.js 和 React 中使用响应式。</p><p>渲染的逻辑也拆成了平台无关渲染逻辑和浏览器渲染 API 两部分 。那么，在你想使用 Vue 3 开发小程序、开发 canvas 小游戏以及开发客户端的时候，就不用全部 fork Vue 的代码，只需要实现平台的渲染逻辑就可以。</p><p><strong>4、全部模块使用 TypeScript 重构</strong></p><p>类型系统的好处：第一点是，类型系统带来了更方便的提示；第二点是，类型系统让代码更健壮。</p><p><strong>5、Composition API 组合语法</strong></p><p>Options Api缺点：</p><ul><li>由于所有数据都挂载在 this 之上，因而 Options API 的写法对 TypeScript 的类型推导很不友好，并且这样也不好做 Tree-shaking 清理代码。</li><li>新增功能基本都得修改 data、method 等配置，并且代码上 300 行之后，会经常上下反复横跳，开发很痛苦。</li><li>代码不好复用，Vue 2 的组件很难抽离通用逻辑，只能使用 mixin，还会带来命名冲突的问题。</li></ul><p>使用 Composition API 后，虽然看起来烦琐了一些，但是带来了诸多好处：</p><ul><li>所有 API 都是 import 引入的。用到的功能都 import 进来，对 Tree-shaking 很友好，我的例子里没用到功能，打包的时候会被清理掉 ，减小包的大小。</li><li>不再上下反复横跳，我们可以把一个功能模块的 methods、data 都放在一起书写，维护更轻松。</li><li>代码方便复用，可以把一个功能所有的 methods、data 封装在一个独立的函数里，复用代码非常容易。</li><li>Composotion API 新增的 return 等语句，在实际项目中使用使用<code>&lt;script setup&gt;</code>特性可以清除， 我们后续项目中都会用到这样的操作。</li></ul><p>Composition API 的代码风格，看起来会特别清爽。</p><p><strong>6、新的组件</strong></p><p>Vue 3 还内置了 Fragment、Teleport 和 Suspense 三个新组件。</p><ul><li>Fragment: Vue 3 组件不再要求有一个唯一的根节点，清除了很多无用的占位 div。</li><li>Teleport: 允许组件渲染在别的元素内，主要开发弹窗组件的时候特别有用。</li><li>Suspense: 异步组件，更方便开发有异步请求的组件。</li></ul><p><strong>7、新一代工程化工具 Vite</strong></p><p>webpack的缺陷：Webpack 等工程化工具的原理，就是根据你的 import 依赖逻辑，形成一个依赖图，然后调用对应的处理工具，把整个项目打包后，放在内存里再启动调试。由于要预打包，所以复杂项目的开发，启动调试环境需要 3 分钟都很常见，Vite 就是为了解决这个时间资源的消耗问题出现的。</p><p>下图展示了 Webpack 的工作原理，Webpack 要把所有路由的依赖打包后，才能开始调试。</p><p><img src="'+e+'" alt=""></p><p>现代浏览器已经默认支持了 ES6 的 import 语法，Vite 就是基于这个原理来实现的。具体来说，在调试环境下，我们不需要全部预打包，只是把你首页依赖的文件，依次通过网络请求去获取，整个开发体验得到巨大提升，做到了复杂项目的秒级调试和热更新。</p><p>下图所示的是 Vite 的工作原理，一开始就可以准备联调，然后根据首页的依赖模块，再去按需加载，这样启动调试所需要的资源会大大减少。</p><p><img src="'+t+'" alt=""></p><p><strong>Vue3新特性总结图</strong></p><p><img src="'+E+`" alt=""></p><h2 id="vue-3的响应式机制" tabindex="-1">Vue 3的响应式机制 <a class="header-anchor" href="#vue-3的响应式机制" aria-label="Permalink to &quot;Vue 3的响应式机制&quot;">​</a></h2><p>Vue 中用过三种响应式解决方案，分别是 <code>defineProperty</code>、<code>Proxy</code> 和 <code>value setter</code>。</p><h3 id="defineproperty" tabindex="-1">defineProperty <a class="header-anchor" href="#defineproperty" aria-label="Permalink to &quot;defineProperty&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">let getDouble = n=&gt;n*2</span></span>
<span class="line"><span style="color:#E1E4E8;">let obj = {}</span></span>
<span class="line"><span style="color:#E1E4E8;">let count = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">let double = getDouble(count)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.defineProperty(obj,&#39;count&#39;,{</span></span>
<span class="line"><span style="color:#E1E4E8;">    get(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        return count</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    set(val){</span></span>
<span class="line"><span style="color:#E1E4E8;">        count = val</span></span>
<span class="line"><span style="color:#E1E4E8;">        double = getDouble(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(double)  // 打印2</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.count = 2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(double) // 打印4  有种自动变化的感觉</span></span></code></pre></div><p>缺陷：我们删除 obj.count 属性，set 函数就不会执行，double 还是之前的数值</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">delete obj.count</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(double) // doube还是4</span></span></code></pre></div><h3 id="reactive响应式" tabindex="-1">reactive响应式 <a class="header-anchor" href="#reactive响应式" aria-label="Permalink to &quot;reactive响应式&quot;">​</a></h3><p>通过 new Proxy 代理了 obj 这个对象，然后通过 get、set 和 deleteProperty 函数代理了对象的读取、修改和删除操作，从而实现了响应式的功能。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">let proxy = new Proxy(obj,{</span></span>
<span class="line"><span style="color:#E1E4E8;">    get : function (target,prop) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        return target[prop]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    set : function (target,prop,value) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target[prop] = value;</span></span>
<span class="line"><span style="color:#E1E4E8;">        if(prop===&#39;count&#39;){</span></span>
<span class="line"><span style="color:#E1E4E8;">            double = getDouble(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    deleteProperty(target,prop){</span></span>
<span class="line"><span style="color:#E1E4E8;">        delete target[prop]</span></span>
<span class="line"><span style="color:#E1E4E8;">        if(prop===&#39;count&#39;){</span></span>
<span class="line"><span style="color:#E1E4E8;">            double = NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(obj.count,double)</span></span>
<span class="line"><span style="color:#E1E4E8;">proxy.count = 2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(obj.count,double) </span></span>
<span class="line"><span style="color:#E1E4E8;">delete proxy.count</span></span>
<span class="line"><span style="color:#E1E4E8;">// 删除属性后，我们打印log时，输出的结果就会是 undefined NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(obj.count,double)</span></span></code></pre></div><h3 id="ref响应式" tabindex="-1">ref响应式 <a class="header-anchor" href="#ref响应式" aria-label="Permalink to &quot;ref响应式&quot;">​</a></h3><p>利用对象的 get 和 set 函数来进行监听</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">let getDouble = n =&gt; n * 2</span></span>
<span class="line"><span style="color:#E1E4E8;">let _value = 1</span></span>
<span class="line"><span style="color:#E1E4E8;">double = getDouble(_value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">let count = {</span></span>
<span class="line"><span style="color:#E1E4E8;">  get value() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return _value</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  set value(val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    _value = val</span></span>
<span class="line"><span style="color:#E1E4E8;">    double = getDouble(_value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(count.value,double)</span></span>
<span class="line"><span style="color:#E1E4E8;">count.value = 2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(count.value,double)</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p><img src="`+c+`" alt=""></p><h3 id="定制响应式数据" tabindex="-1">定制响应式数据 <a class="header-anchor" href="#定制响应式数据" aria-label="Permalink to &quot;定制响应式数据&quot;">​</a></h3><p><strong>我们可以把日常开发中用到的数据，无论是浏览器的本地存储，还是网络数据，都封装成响应式数据，统一使用响应式数据开发的模式。这样，我们开发项目的时候，只需要修改对应的数据就可以了。</strong></p><p><strong>可以把一切项目中的状态和数据都封装成响应式的接口，屏蔽了浏览器的 API，对外暴露的就是普通的数据，可以极大地提高我们的开发效率。</strong></p><p>比如，我们可以在 loading 状态下，去修改浏览器的小图标 favicon。和本地存储类似，修改 favicon 时，我们需要找到 head 中有 icon 属性的标签。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">import {ref,watch} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default function useFavicon( newIcon ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const favicon = ref(newIcon)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    const updateIcon = (icon) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head</span></span>
<span class="line"><span style="color:#E1E4E8;">        .querySelectorAll(\`link[rel*=&quot;icon&quot;]\`)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .forEach(el =&gt; el.href = \`\${icon}\`)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    const reset = ()=&gt;favicon.value = &#39;/favicon.ico&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    watch( favicon,</span></span>
<span class="line"><span style="color:#E1E4E8;">      (i) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateIcon(i)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {favicon,reset}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre></div><p><strong>平时项目中还有哪些可以封装成响应式数据？</strong></p><p>todo</p><p>composition API 就是把逻辑代码聚合起来. 一些工具函数都可以被封装起来。比如：</p><ul><li>websocket </li><li>解析 url parameter </li><li>浏览器页面全屏、滚动等的封装（之前有需求就是全屏要动态调整页面的布局，在没有封装的情况下，就要每个页面需要时都写监听，而用useXXX感觉会优雅很多）</li><li>鼠标状态监听 </li><li>表单验证</li><li>图片懒加载</li><li>本地化持久化存储</li><li>performance 性能检测</li><li>甚至实现自定义 logger</li></ul><h3 id="vueuse-工具包" tabindex="-1">Vueuse 工具包 <a class="header-anchor" href="#vueuse-工具包" aria-label="Permalink to &quot;Vueuse 工具包&quot;">​</a></h3><p>安装</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install @vueuse/core</span></span></code></pre></div><p>使用</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toggle&quot;</span><span style="color:#E1E4E8;">&gt;click&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFullscreen } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">isFullscreen</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">enter</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">toggle</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useFullscreen</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;vuex&quot;">​</a></h2><h3 id="手写迷你-vuex" tabindex="-1">手写迷你 vuex <a class="header-anchor" href="#手写迷你-vuex" aria-label="Permalink to &quot;手写迷你 vuex&quot;">​</a></h3><p>vuex正常使用方式如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// store/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vuex&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> store;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./store&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(store);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件使用</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ count }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;add&quot;&gt;点击累加&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { computed } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">let store = useStore();</span></span>
<span class="line"><span style="color:#E1E4E8;">let count = computed(() =&gt; store.state.count);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function add() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;add&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>手写mini Vuex</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// store/gvuex.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { provide, inject, reactive } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">STORE_KEY</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;__store__&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: options.</span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._mutations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.mutations;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 读取state的时候就返回_state.data</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._state.data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._mutations[type];</span></span>
<span class="line"><span style="color:#E1E4E8;">    func </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state, payload);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 为了在main.js中可以使用use(store)的方式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">provide</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">STORE_KEY</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStore</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useStore</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inject</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">STORE_KEY</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { createStore, useStore };</span></span></code></pre></div><p>在store/index.js中引入：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./gvuex&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><p>Count组件中使用：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ count }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;add&quot;</span><span style="color:#E1E4E8;">&gt;点击累加&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { computed } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../store/gvuex&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useStore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> store.state.count);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;add&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;vue-router&quot;">​</a></h2><p>手写 mini vue-router</p><p>使用 hash 模式的迷你 vue-router。</p><p>在router/ 文件夹下新增grouter/index.js文件：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { inject, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> RouterLink </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./RouterLink.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> RouterView </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./RouterView.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ROUTER_KEY</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;__router__&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRouter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inject</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">ROUTER_KEY</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWebHashHistory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 注册hashchange事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bindEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hashchange&quot;</span><span style="color:#E1E4E8;">, fn);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    bindEvent,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: window.location.hash.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.history;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.routes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.routes;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 保存当前路由</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.url);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当hash改变，触发hashchange回调，会修改current值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">bindEvent</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.current.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.location.hash.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">provide</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">ROUTER_KEY</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注册全局组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;router-link&quot;</span><span style="color:#E1E4E8;">, RouterLink);</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;router-view&quot;</span><span style="color:#E1E4E8;">, RouterView);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { createRouter, createWebHashHistory, useRouter };</span></span></code></pre></div><p>修改router/index.js入口，使用grouter/index.js文件：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// import { createRouter, createWebHashHistory } from &quot;vue-router&quot;;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRouter, createWebHashHistory } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./grouter&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Home </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../views/Home.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> About </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../views/About.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Count </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/Count.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">, component: Home },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&quot;/about&quot;</span><span style="color:#E1E4E8;">, component: About },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&quot;/count&quot;</span><span style="color:#E1E4E8;">, component: Count },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: </span><span style="color:#B392F0;">createWebHashHistory</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">// 使用 hash 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router;</span></span></code></pre></div><p>新增grouter/RouterView.vue和RouterLink.vue文件，并在grouter/index.js中注册为全局组件：</p><p>RouterLink.vue</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;#&#39; + to&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>RouterView.vue</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;comp&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">component</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { computed } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useRouter } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./index&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRouter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 匹配 current 地址对应的组件，然后动态渲染到 router-view。</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">comp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> router.routes.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> route.path </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> router.current.value</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> route </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> route.component </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>实际上，vue-router 还需要处理很多额外的任务，比如路由懒加载、路由的正则匹配等等，这里都没实现。</p>`,98)]))}const m=n(r,[["render",y]]);export{v as __pageData,m as default};
