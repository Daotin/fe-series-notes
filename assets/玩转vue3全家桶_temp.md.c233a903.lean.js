import{_ as e,o as n,c as a,S as p}from"./chunks/framework.d5a27ec8.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"玩转vue3全家桶/temp.md","filePath":"玩转vue3全家桶/temp.md","lastUpdated":1715517094000}'),l={name:"玩转vue3全家桶/temp.md"};function o(t,s,c,r,i,y){return n(),a("div",null,s[0]||(s[0]=[p(`<p>对于 value，官方是这样解释的：</p><p>将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的。这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值而非引用传递的：在任何值周围都有一个封装对象，这样我们就可以在整个应用中安全地传递它，而不必担心在某个地方失去它的响应性</p><hr><p>补充一下 vue-router 4.x 已经废弃了 hashchange 统一使用 popstate</p><p>history.pushState()并不会触发监听的 popstate 事件，得自己手动改 current.value 的值。。。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">defineProps类型定义的两种方式：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1、</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">interface IProps {</span></span>
<span class="line"><span style="color:#e1e4e8;">  title?: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">  back?: () =&gt; void;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const props = defineProps&lt;IProps&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">或者</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const props = defineProps&lt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">  title?: string;</span></span>
<span class="line"><span style="color:#e1e4e8;">  back?: () =&gt; void;</span></span>
<span class="line"><span style="color:#e1e4e8;">}&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">缺点：没有默认值，需要使用withDefaults</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const props = withDefaults(defineProps&lt;IProps&gt;(), {</span></span>
<span class="line"><span style="color:#e1e4e8;">  size: 14,</span></span>
<span class="line"><span style="color:#e1e4e8;">  strokeWidth: 3,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2、</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const props = defineProps({</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  size: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: number,</span></span>
<span class="line"><span style="color:#e1e4e8;">    default: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  optionType: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: Number as PropType&lt;enumOptionType&gt;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    validator(value: enumOptionType) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return [enumOptionType.add, enumOptionType.edit].includes(value)</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre></div>`,6)]))}const m=e(l,[["render",o]]);export{u as __pageData,m as default};
