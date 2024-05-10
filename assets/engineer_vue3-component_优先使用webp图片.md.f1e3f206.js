import{_ as s,o as n,c as a,V as p}from"./chunks/framework.ff44d2fd.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"engineer/vue3-component/优先使用webp图片.md","filePath":"engineer/vue3-component/优先使用webp图片.md","lastUpdated":1715332685000}'),e={name:"engineer/vue3-component/优先使用webp图片.md"},l=p(`<p>在vue2中有一个mixin.js文件，用来混入enum枚举和const常量，以及图片到所有的组件中。避免每次在组件中使用，需要import导入。</p><p>在此基础上增加一些代码，如果图片的文件名相同，则优先使用webp格式的图片。</p><p>代码如下：</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">import * as configConst from &quot;@/config/const&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">import * as configEnum from &quot;@/config/enum&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">let requireContext = require.context(&quot;./../assets/img&quot;, false, /\\\\\\\\.(jpg|jpeg|png|webp|svg|bmp)$/);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">+ // 判断是否有重复的图片文件名</span></span>
<span class="line"><span style="color:#85E89D;">+ let repeatImg = {};</span></span>
<span class="line"><span style="color:#85E89D;">+ let repeatImgKeys = [];</span></span>
<span class="line"><span style="color:#85E89D;">+ requireContext.keys().forEach(file =&gt; {</span></span>
<span class="line"><span style="color:#85E89D;">+  const fileName = file.replace(/^\\\\\\\\.\\\\\\\\/(.*)\\\\\\\\.\\\\\\\\w+$/, &quot;$1&quot;);</span></span>
<span class="line"><span style="color:#85E89D;">+  if (repeatImg[fileName]) {</span></span>
<span class="line"><span style="color:#85E89D;">+     repeatImg[fileName]++;</span></span>
<span class="line"><span style="color:#85E89D;">+   } else {</span></span>
<span class="line"><span style="color:#85E89D;">+     repeatImg[fileName] = 1;</span></span>
<span class="line"><span style="color:#85E89D;">+   }</span></span>
<span class="line"><span style="color:#85E89D;">+ });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">+ for (const key in repeatImg) {</span></span>
<span class="line"><span style="color:#85E89D;">+   const count = repeatImg[key];</span></span>
<span class="line"><span style="color:#85E89D;">+   if (count &gt; 1) {</span></span>
<span class="line"><span style="color:#85E89D;">+     repeatImgKeys.push(key);</span></span>
<span class="line"><span style="color:#85E89D;">+   }</span></span>
<span class="line"><span style="color:#85E89D;">+ }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">let imgObj = {};</span></span>
<span class="line"><span style="color:#E1E4E8;">requireContext.keys().forEach(file =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const fileName = file.replace(/^\\\\\\\\.\\\\\\\\/(.*)\\\\\\\\.\\\\\\\\w+$/, &quot;$1&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  // 格式示例：imgbgproductpng</span></span>
<span class="line"><span style="color:#E1E4E8;">  let imgName = file.replace(/\\\\\\\\.|-|_/g, &quot;&quot;).replace(/\\\\\\\\//g, &quot;img&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  imgObj[imgName] = requireContext(file);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  // 格式示例：imgBgProduct</span></span>
<span class="line"><span style="color:#E1E4E8;">  let imgNameNew = file.replace(/\\\\\\\\.\\\\\\\\//g, &quot;&quot;).split(&quot;.&quot;)[0];</span></span>
<span class="line"><span style="color:#E1E4E8;">  imgNameNew = &quot;img&quot; + _.upperFirst(_.camelCase(imgNameNew));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">+   // 优先使用webp图片</span></span>
<span class="line"><span style="color:#85E89D;">+   if (repeatImgKeys.includes(fileName)) {</span></span>
<span class="line"><span style="color:#85E89D;">+     if (file.includes(&quot;webp&quot;)) {</span></span>
<span class="line"><span style="color:#85E89D;">+       imgObj[imgNameNew] = requireContext(file);</span></span>
<span class="line"><span style="color:#85E89D;">+     }</span></span>
<span class="line"><span style="color:#85E89D;">+   } else {</span></span>
<span class="line"><span style="color:#85E89D;">+     imgObj[imgNameNew] = requireContext(file);</span></span>
<span class="line"><span style="color:#85E89D;">+   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  // console.log(&quot;⭐imgNameNew==&gt;&quot;, file);</span></span>
<span class="line"><span style="color:#E1E4E8;">  // console.log(&quot;⭐imgNameNew==&gt;&quot;, imgNameNew);</span></span>
<span class="line"><span style="color:#E1E4E8;">  // console.log(&quot;⭐imgObj==&gt;&quot;, imgObj);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.log(&quot;==== mixin done! ====&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const list = {</span></span>
<span class="line"><span style="color:#E1E4E8;">  data() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      ...imgObj,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ...configConst,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ...configEnum</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">export default list;</span></span></code></pre></div><p>在main.js中进行混入：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> mixin </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/utils/mixin.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">(mixin);</span></span></code></pre></div>`,6),o=[l];function t(c,i,r,E,m,y){return n(),a("div",null,o)}const f=s(e,[["render",t]]);export{g as __pageData,f as default};
