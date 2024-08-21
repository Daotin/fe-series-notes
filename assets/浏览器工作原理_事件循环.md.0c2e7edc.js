import{_ as s,o as n,c as a,V as o}from"./chunks/framework.ff44d2fd.js";const l="/fe-series-notes/assets/img-20240503100572.57982ddc.png",p="/fe-series-notes/assets/img-20240503100532.9fae190b.png",e="/fe-series-notes/assets/img-20240503130509.efc2864e.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"浏览器工作原理/事件循环.md","filePath":"浏览器工作原理/事件循环.md","lastUpdated":1724227780000}'),t={name:"浏览器工作原理/事件循环.md"},c=o('<p>渲染进程的主线程需要处理各种各样的任务，JS 脚本，DOM 渲染，布局，CSS 计算，事件等等，V8 引擎也是在主线程上运行的。</p><p>这就要一套系统来维持主线程的运转，这就是事件循环。</p><h2 id="事件循环和消息队列" tabindex="-1">事件循环和消息队列 <a class="header-anchor" href="#事件循环和消息队列" aria-label="Permalink to &quot;事件循环和消息队列&quot;">​</a></h2><p>如果是你，你会如何设计这个系统？</p><p>1、第一版</p><p>通常来说，主线程会按照顺序执行任务，如果是一些确定的任务还好，但是这就有一个缺点了，就是无法执行临时新到的新任务？如何才能执行？这就需要事件循环机制了。</p><p>2、第二版</p><p>加入循环的机制，等待任务的到来。来一个，执行一个。</p><p><img src="'+l+'" alt=""></p><p>缺点：其他的线程无法把任务给主线程执行？</p><p>3、第三版</p><p>引入「消息队列」，主线程接收到的 IO 线程的任务，装入消息队列，主线程循环从消息队列中取任务执行。</p><p><img src="'+p+`" alt=""></p><h2 id="宏任务-微任务" tabindex="-1">宏任务，微任务 <a class="header-anchor" href="#宏任务-微任务" aria-label="Permalink to &quot;宏任务，微任务&quot;">​</a></h2><p>加入到消息队列的任务种类很多，如输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、JavaScript 定时器等等。除此之外，消息队列中还包含了很多与页面相关的事件，如 JavaScript 执行、解析 DOM、样式计算、布局计算、CSS 动画等。</p><p>但是由于消息队列先进先出的特性，导致一些实时性比较高的任务，如果加入的晚，就不能及时执行。比如一个 DOM 的变化，如果前面任务执行的很长时间，界面就不能得到及时的渲染。</p><p><strong>解决办法：微任务。</strong></p><p>通常我们把消息队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列，在执行宏任务的过程中，如果 DOM 有变化，那么就会将该变化添加到微任务列表中，等宏任务中的主要功能都直接完成之后，这时候，渲染引擎并不着急去执行下一个宏任务，而是执行当前宏任务中的微任务，这就保证了 DOM 的变化，页面能够及时响应。</p><p>能放进微任务的都是<strong>异步执行</strong>的任务。</p><p>每个宏任务都关联了一个微任务队列。</p><p>那么接下来，我们就需要分析两个重要的时间点——微任务产生的时机和执行微任务队列的时机。</p><p>微任务产生的方式：</p><ol><li>使用 MutationObserver 监控某个 DOM 节点的变化</li><li>使用 Promise</li></ol><p>执行时机：通常情况下，在当前宏任务中的 JavaScript 快执行完成时，也就在 JavaScript 引擎准备退出全局执行上下文并清空调用栈的时候，JavaScript 引擎会检查全局执行上下文中的微任务队列，然后按照顺序执行队列中的微任务。</p><p>如果在执行微任务的过程中，产生了新的微任务，同样会将该微任务添加到微任务队列中，V8 引擎一直循环执行微任务队列中的任务，直到队列为空才算执行结束。也就是说在执行微任务过程中产生的新的微任务并不会推迟到下个宏任务中执行，而是在当前的宏任务中继续执行。</p><h2 id="如何理解-js-的事件循环机制" tabindex="-1">如何理解 js 的事件循环机制？ <a class="header-anchor" href="#如何理解-js-的事件循环机制" aria-label="Permalink to &quot;如何理解 js 的事件循环机制？&quot;">​</a></h2><p>JavaScript 的事件循环机制（Event Loop）是 JavaScript 处理异步操作的核心。理解这个机制有助于你更好地理解 JavaScript 的执行模型，尤其是如何处理异步代码（如 <code>setTimeout</code>、<code>Promise</code>、<code>async/await</code> 等）。下面是对事件循环机制的详细解释：</p><p>1、<strong>JavaScript 单线程模型</strong></p><p>JavaScript 是单线程的，这意味着同一时间内只能执行一个任务。这带来了一个问题，如果遇到耗时的操作（如网络请求、文件读取），就会阻塞其他代码的执行。为了解决这个问题，JavaScript 引入了异步编程和事件循环机制。</p><p>2、<strong>执行栈（Call Stack）</strong></p><p>执行栈是 JavaScript 引擎用来存储函数调用的结构。当一个函数被调用时，它会被推入栈中；当函数执行完毕后，它会从栈中弹出。这个过程是同步的，栈中的任务必须一个接一个地完成。</p><p>3、<strong>异步任务与任务队列（Task Queue）</strong></p><p>当 JavaScript 执行异步任务时（如 <code>setTimeout</code>、<code>Promise</code> 等），这些任务不会立即进入执行栈，而是被放入一个任务队列中。当执行栈中的同步任务完成后，事件循环会从任务队列中取出最早加入的任务，并将其推入执行栈中执行。</p><p>任务队列分为两种主要类型：</p><ul><li><strong>宏任务队列（Macro Task Queue）</strong>：包括 <code>setTimeout</code>、<code>setInterval</code>、<code>I/O</code> 操作等。</li><li><strong>微任务队列（Micro Task Queue）</strong>：包括 <code>Promise.then</code>、<code>process.nextTick</code>（Node.js）等。</li></ul><p>4、<strong>事件循环（Event Loop）</strong></p><p>事件循环是 JavaScript 用来协调执行栈和任务队列的机制。它会不断检查执行栈是否为空，如果为空，就会检查任务队列中是否有待执行的任务。如果有，事件循环会将任务队列中的第一个任务推入执行栈中执行。</p><p>事件循环的顺序如下：</p><ol><li>执行栈中的所有同步代码。</li><li>如果执行栈为空，查看微任务队列并执行所有微任务。</li><li>执行一个宏任务（如 <code>setTimeout</code>）。</li><li>重复上述过程。</li></ol><p><strong>举个例子</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Start&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Timeout&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Promise&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;End&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>这个例子的执行过程是：</p><ol><li><code>console.log(&#39;Start&#39;)</code> 进入执行栈并立即执行，输出 <code>Start</code>。</li><li><code>setTimeout</code> 是一个宏任务，它会被放入宏任务队列中，并不会立即执行。</li><li><code>Promise.resolve().then</code> 是一个微任务，它会被放入微任务队列中，并且会在所有同步代码执行完后立即执行。</li><li><code>console.log(&#39;End&#39;)</code> 进入执行栈并立即执行，输出 <code>End</code>。</li><li>同步代码执行完毕，执行微任务队列中的任务，输出 <code>Promise</code>。</li><li>最后，宏任务队列中的任务执行，输出 <code>Timeout</code>。</li></ol><p>输出结果为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">Start</span></span>
<span class="line"><span style="color:#e1e4e8;">End</span></span>
<span class="line"><span style="color:#e1e4e8;">Promise</span></span>
<span class="line"><span style="color:#e1e4e8;">Timeout</span></span></code></pre></div><p><strong>总结</strong></p><ul><li>JavaScript 采用单线程模型，通过事件循环机制来处理异步任务。</li><li>异步任务被分为宏任务和微任务，微任务优先于宏任务执行。</li><li>事件循环会不断检查执行栈和任务队列，确保代码按顺序执行。</li></ul><p>理解事件循环机制对于编写高效的异步 JavaScript 代码非常重要，特别是在处理复杂的异步逻辑时。</p><div class="info custom-block"><p class="custom-block-title">✅ 怎么样算是一个宏任务？一句代码就算一个宏任务吗？</p><p>一个宏任务（Macro Task）是指在 JavaScript 事件循环中执行的一整块任务，通常是由宿主环境（如浏览器或 Node.js）调度的。宏任务并不是单纯的一行代码，而是由宿主环境调度并执行的较大的任务块。</p><p>1、 <strong>什么是宏任务？</strong></p><p>宏任务通常包括但不限于以下几类：</p><ul><li>整个脚本执行（例如，当浏览器加载并执行一个 <code>&lt;script&gt;</code> 标签中的代码时，这是一个宏任务）。</li><li><code>setTimeout</code> 和 <code>setInterval</code> 的回调函数。</li><li>用户交互事件的回调（如点击事件）。</li><li>I/O 操作的回调（如网络请求的响应）。</li><li><code>postMessage</code> 的回调。</li><li><code>setImmediate</code> 的回调（Node.js 特有）。</li></ul><p>2、<strong>宏任务的执行过程</strong></p><p>在事件循环的每一个循环迭代中，通常会：</p><ol><li>执行一个宏任务中的所有代码。</li><li>在当前宏任务完成后，处理微任务队列中的所有微任务。</li><li>然后，再执行下一个宏任务。</li></ol><p>3、 <strong>一句代码算一个宏任务吗？</strong></p><p>一句代码并不等同于一个宏任务。一个宏任务通常是一个更大的执行块，比如一个完整的脚本或一个定时器回调函数。在这个宏任务内，可能包含多行代码。只有当这个宏任务中的代码全部执行完毕后，才会检查并执行微任务，然后再继续执行下一个宏任务。</p><p>举个例子：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Task 1&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 这行代码是当前宏任务中的一部分</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Task 2&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 这是下一个宏任务</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Task 3&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 这行代码也是当前宏任务中的一部分</span></span></code></pre></div><p>在上面的代码中：</p><ul><li>整个脚本加载并执行，是一个宏任务。</li><li><code>setTimeout</code> 的回调是另一个宏任务。</li></ul><p><strong>执行顺序</strong>：</p><ol><li><code>console.log(&#39;Task 1&#39;)</code> 和 <code>console.log(&#39;Task 3&#39;)</code> 都是在当前宏任务中执行。</li><li>当前宏任务执行完后，事件循环会处理微任务（如果有），然后执行 <code>setTimeout</code> 的回调函数，这是一个新的宏任务。</li></ol></div><h3 id="promise-和微任务有啥关系" tabindex="-1">Promise 和微任务有啥关系？ <a class="header-anchor" href="#promise-和微任务有啥关系" aria-label="Permalink to &quot;Promise 和微任务有啥关系？&quot;">​</a></h3><p>Promise 解决的是回调地狱的问题。</p><p>Promise 的一般使用如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">executor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 将 Promise 改成我们自己的 Bromsie</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> demo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bromise</span><span style="color:#E1E4E8;">(executor);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onResolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">demo.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(onResolve);</span></span></code></pre></div><p>当执行到 resolve(100)的时候，实际上会触发 demo.then 设置的回调函数 onResolve，但是根据上面的代码的执行的顺序，很显然，当执行到 resolve(100)的时候，demo.then(onResolve) 还没有执行，就是还没有绑定 onResolve 方法，也就没法打印出 100.</p><p>但是最后居然打印了 100，那么在 Promise 的内容到底做了什么魔法处理？</p><p>下面是 Promise 简单的实现原理：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bromise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">executor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> onResolve_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> onReject_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模拟实现 resolve 和 then，暂不支持 rejcet</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">onResolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">onReject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    onResolve_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> onResolve;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onResolve_</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">executor</span><span style="color:#E1E4E8;">(resolve, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>如果是这样的话，在执行上面代码的时候就会报错：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">Uncaught TypeError: onResolve_ is not a function</span></span>
<span class="line"><span style="color:#e1e4e8;">    at resolve (&lt;anonymous&gt;:10:13)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at executor (&lt;anonymous&gt;:17:5)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at new Bromise (&lt;anonymous&gt;:13:5)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at &lt;anonymous&gt;:19:12</span></span></code></pre></div><p>哎，跟我们的分析是一致，那么要怎么修改一下？这就用到微任务了。</p><p>我们需要让 resolve 中的 onResolve* 函数延后执行，可以在 resolve 函数里面加上一个定时器，让其延时执行 onResolve* 函数，你可以参考下面改造后的代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onResolve_</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>上面采用了定时器来推迟 onResolve 的执行，不过使用定时器的效率并不是太高.</p><p>好在我们有微任务，所以在 Promise 实现原理中，把这个定时器改为微任务了，这样既可以让 onResolve_ 延时被调用，又提升了代码的执行效率。这就是 Promise 与微任务的关系了。</p><h3 id="async-和-await" tabindex="-1">async 和 await <a class="header-anchor" href="#async-和-await" aria-label="Permalink to &quot;async 和 await&quot;">​</a></h3><p>虽然 Promise 极大地改善了异步编程的可管理性，但在某些情况下，使用.then()和.catch()方法来管理复杂的异步流程仍然可能导致代码冗长和难以理解。<code>async</code> 和 <code>await</code> 的引入正是为了满足这种需求，它们允许开发者以一种近乎同步的方式编写异步代码，同时保持非阻塞的优势。</p><p>要解决的问题：</p><p><code>async</code> 和 <code>await</code> 主要解决以下问题：</p><ol><li><strong>代码可读性</strong>：使异步代码看起来和同步代码相似，这样开发者就可以以线性和更直观的方式理解代码流程，而不需要跟踪 Promise 链。</li><li><strong>错误处理</strong>：允许使用传统的 try-catch 语法来捕捉异步代码中的错误，这比在 Promise 中使用.catch()更自然和一致。</li><li><strong>简化代码结构</strong>：减少了因为链式 Promise 而导致的嵌套和复杂结构，简化了代码编写。</li></ol><p>实现原理：</p><p><code>async</code> 和 <code>await</code> 是基于 Promise 和生成器（generators）的概念实现的。</p><p>生成器：</p><blockquote><p>参考链接：<a href="https://github.com/Daotin/Web/blob/master/08-ES6%E8%AF%AD%E6%B3%95/05-Generator%EF%BC%8Casync%EF%BC%8CClass.md" target="_blank" rel="noreferrer">05-Generator，async，Class</a></p></blockquote><p>生成器函数是一个带星号函数，而且是可以暂停执行和恢复执行的。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">genDemo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开始执行第一段&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;generator 2&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开始执行第二段&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;generator 2&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开始执行第三段&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;generator 2&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;执行结束&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;generator 2&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main 0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> gen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">genDemo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main 1&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main 2&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main 3&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main 4&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。</p><p>下一步，必须调用遍历器对象的<code>next</code>方法，使得指针移向下一个状态。也就是说，每次调用<code>next</code>方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个<code>yield</code>表达式（或<code>return</code>语句）为止。</p><p><em>❓ 那么，Generator 函数可以实现函数的暂停和恢复，是怎么做到的呢？</em></p><p>要搞懂函数为何能暂停和恢复，那你首先要了解<strong>协程</strong>的概念。</p><p>协程是一种比线程更加轻量级的存在。你可以把协程看成是跑在线程上的任务，一个线程上可以存在多个协程，但是在线程上同时只能执行一个协程，比如当前执行的是 A 协程，要启动 B 协程，那么 A 协程就需要将主线程的控制权交给 B 协程，这就体现在 A 协程暂停执行，B 协程恢复执行；同样，也可以从 B 协程中启动 A 协程。通常，如果从 A 协程启动 B 协程，我们就把 A 协程称为 B 协程的<strong>父协程</strong>。</p><p>当使用 yield 暂停协程的时候，就会将控制权转交给父协程，也就是调用 Generator 的进程。</p><p><em>❓async 和 await 是如何由 Generator 函数和 Promise 来实现的呢？</em></p><p>看下面示例代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>打印的结果为：0,1,3,100,2</p><p>我们站在协程的视角看下为啥是这个顺序：</p><ol><li>首先，执行<code>console.log(0)</code>这个语句，打印出来 0。</li><li>紧接着就是执行 foo 函数，由于 foo 函数是被 async 标记过的，所以当进入该函数的时候，首先执行 foo 函数中的<code>console.log(1)</code>语句，并打印出 1。</li><li>执行到 foo 函数中的<code>await 100</code>这个语句了，当执行到<code>await 100</code>时，会默认创建一个 Promise 对象，代码如下所示：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> promise_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((resolve,reject){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(100)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><ol start="4"><li>上一节我们知道，resolve(100)会放在微任务列表，然后协程就把控制权转交给父协程，此时打印<code>console.log(3)</code></li><li>随后父协程将执行结束，在结束之前，执行微任务队列，微任务队列中有<code>resolve(100)</code>打印 100</li><li>最后，打印 2。</li></ol><p><em>❓ 下面思考题融合了宏任务，微任务，定时器，请问下面代码输出什么？</em></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bar start&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bar end&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script start&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise executor&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise then&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script end&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>分析：</p><ol><li>首先在主协程中初始化异步函数 foo 和 bar，碰到 console.log 打印 script start；</li><li>解析到 setTimeout，初始化一个 Timer，创建一个 task，并加入延时队列任务</li><li>执行 bar 函数，将控制权交给协程，输出 bar start，碰到 await，执行 foo，输出 foo，创建一个 Promise 返回给主协程，并添加到微任务队列</li><li>向下执行 new Promise，输出 promise executor，返回 resolve 添加到微任务队列</li><li>输出 script end</li><li>当前 task 结束之前检查微任务队列，执行第一个微任务，将控制器交给协程输出 bar end</li><li>执行第二个微任务 输出 promise then</li><li>当前任务执行完毕进入取出延时队列任务，输出 setTimeout。</li></ol><h2 id="事件循环案例-settimeout-如何设计" tabindex="-1">事件循环案例：setTimeout 如何设计？ <a class="header-anchor" href="#事件循环案例-settimeout-如何设计" aria-label="Permalink to &quot;事件循环案例：setTimeout 如何设计？&quot;">​</a></h2><p>setTimeout 的回调不能放到消息队列，因为消息队列是一个个按顺序执行的。那咋办？</p><p>在 Chrome 中，除了正常使用的消息队列之外，还有另外一个消息队列<strong>延迟队列</strong>，这个队列中维护了需要延迟执行的任务列表。</p><p>所以当通过 JavaScript 创建一个定时器时，渲染进程会将该定时器的回调任务（包含了回调函数 xxx、当前发起时间、延迟执行时间）添加到延迟队列中。</p><p>然后，当一个宏任务执行完成后，会去延迟队列查找延时到期的任务去执行。执行完了，再去消息队列执行后续的宏任务。</p><p><em>❓ 但，你会发现一个问题？如果一个宏任务要执行很久，那么 setTimeout 不就不准了？</em></p><p>另外，setTimeout 还有一些其他注意事项：</p><ol><li>如果 setTimeout 存在嵌套调用，那么延时时间最短为 4 ms。 （一般如果使用 setTimeout 来做动画的时候，都是需要 setTimeout 嵌套调用，那么对于实时性很高的动画就不适用了。）</li><li>在未激活的页面中的 setTimeout 执行的最小间隔为 1000ms ，这是浏览器干预的，为了欧化后台页面的加载损耗以及降低耗电量。</li><li>延时时间有最大值。（ Chrome、Safari、Firefox 都是以 32 个 bit 来存储延时值的，32bit 最大只能存放的数字是 2147483647 毫秒，这就意味着，如果 setTimeout 设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，这导致定时器会被立即执行）</li><li>如果 setTimeout 的回调函数是一个对象中的一个方法属性，那么这个方法中的 this 会变成 window。</li></ol><h2 id="事件循环案例-xmlhttprequest-如何设计" tabindex="-1">事件循环案例：XMLHttpRequest 如何设计？ <a class="header-anchor" href="#事件循环案例-xmlhttprequest-如何设计" aria-label="Permalink to &quot;事件循环案例：XMLHttpRequest 如何设计？&quot;">​</a></h2><p>上面，setTimeout 是直接将延迟任务添加到延迟队列中，而 XMLHttpRequest 发起请求，是由浏览器的其他进程或者线程去执行，然后再将执行结果利用 IPC 的方式通知渲染进程，之后渲染进程再将对应的消息添加到消息队列中。</p><p>也就是绕了一下，最后还是回归事件循环。</p><p><img src="`+e+'" alt=""></p>',105),E=[c];function r(i,y,F,d,g,u){return n(),a("div",null,E)}const v=s(t,[["render",r]]);export{m as __pageData,v as default};
