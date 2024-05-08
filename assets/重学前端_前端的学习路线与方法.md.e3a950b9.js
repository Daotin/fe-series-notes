import{_ as a,o as t,c as s,V as r}from"./chunks/framework.ff44d2fd.js";const e="/fe-series-notes/assets/img-20240508140566.dd483410.png",p="/fe-series-notes/assets/img-20240508140510.aab7d288.png",i="/fe-series-notes/assets/img-20240508140528.98633f77.png",o="/fe-series-notes/assets/img-20240508140515.ca35ce6c.png",n="/fe-series-notes/assets/img-20240508140573.250a5b1a.png",P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"重学前端/前端的学习路线与方法.md","filePath":"重学前端/前端的学习路线与方法.md","lastUpdated":1715154151000}'),l={name:"重学前端/前端的学习路线与方法.md"},c=r('<h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><p>我希望达到三个目标：</p><ul><li>带你摸索出适合自己的前端学习方法；</li><li>帮助你建立起前端技术的知识架构；</li><li>让你理解前端技术背后的核心思想。</li></ul><p>在开始具体的知识讲解之前，这篇文章中，我想先来谈两个前端学习方法。</p><h2 id="学习方法-建立知识架构" tabindex="-1">学习方法：建立知识架构 <a class="header-anchor" href="#学习方法-建立知识架构" aria-label="Permalink to &quot;学习方法：建立知识架构&quot;">​</a></h2><p>什么叫做知识架构？我们可以把它理解为知识的“目录”或者索引，<strong>它能够帮助我们把零散的知识组织起来，也能够帮助我们发现一些知识上的盲区。</strong></p><p>当然，知识的架构是有优劣之分的，最重要的就是逻辑性和完备性。</p><p>那么我们试着做个前端知识架构图：</p><p>分四个模块：</p><ul><li><strong>JavaScript语言</strong></li><li><strong>HTML和CSS</strong></li><li><strong>浏览器的实现原理和API</strong></li><li><strong>前端工程实践</strong></li></ul><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h3><p><img src="'+e+'" alt=""></p><p>在 JavaScript 的模块中，首先我们可以把语言按照文法、语义和运行时来拆分，这符合编程语言的一般规律：<strong>用一定的词法和语法，表达一定语义，从而操作运行时。</strong></p><p>类型：7中基本类型（对象类型是重点）</p><p>实例：对 JavaScript 来说类似基础库，JavaScipt 的内置对象多达 150 以上，比如常见的Math库，Date库等。</p><p>执行过程：按照从大结构到小结构的角度讲解，从最顶层的程序与模块、事件循环和微任务，到函数、再到语句级的执行。我们从粗到细地了解执行过程。</p><p>词法：</p><p>语法：</p><p>语义：与语法是一一对应的。</p><h3 id="html和css" tabindex="-1">HTML和CSS <a class="header-anchor" href="#html和css" aria-label="Permalink to &quot;HTML和CSS&quot;">​</a></h3><p><img src="'+p+'" alt=""></p><p><strong>HTML 的部分</strong>，我们会按照<strong>功能和语言</strong>来划分它的知识，HTML 的功能主要由标签来承担，所以我们首先会把标签做一些分类，并对它们分别进行讲解。</p><ol><li>文档元信息：通常是出现在 head 标签中的元素，包含了描述文档自身的一些信息；</li><li>语义相关：扩展了纯文本，表达文章结构、不同语言要素的标签；</li><li>链接：提供到文档内和文档外的链接；</li><li>替换型标签：引入声音、图片、视频等外部元素替换自身的一类标签；</li><li>表单：用于填写和提交信息的一类标签；</li><li>表格：表头、表尾、单元格等表格的结构。</li></ol><p>以及几个重要的语言机制：实体、命名空间。</p><p>还有HTML 的补充标准：ARIA，它是 HTML 的扩展，在可访问性领域，它有至关重要的作用。</p><p><strong>CSS 部分</strong>，按照惯例，我们也会从语言和功能两个角度去介绍。在语言部分，我们会从大到小介绍 CSS 的各种语法结构，比如 @rule、选择器、单位等等。功能部分，我们大致可以分为布局、绘制和交互类。</p><p>在布局类我们介绍两个最常用的布局：正常流和弹性布局。绘制类我们则会分成图形相关的和文字相关的绘制。最后我们会介绍动画和其它交互。</p><h3 id="浏览器的实现原理和-api" tabindex="-1">浏览器的实现原理和 API <a class="header-anchor" href="#浏览器的实现原理和-api" aria-label="Permalink to &quot;浏览器的实现原理和 API&quot;">​</a></h3><p><img src="'+i+'" alt=""></p><p>浏览器部分我们会先介绍下浏览器的实现原理，这是我们深入理解 API 的基础。</p><p>我们会从一般的浏览器设计出发，按照解析、构建 DOM 树、计算 CSS、渲染、合成和绘制的流程来讲解浏览器的工作原理。</p><p>在 API 部分，我们会从 W3C 零散的标准中挑选几个大块的 API 来详细讲解，主要有：事件、DOM、CSSOM 几个部分，它们分别覆盖了交互、语义和可见效果，这是我们工作中用到的主要内容。</p><h3 id="前端工程实践" tabindex="-1">前端工程实践 <a class="header-anchor" href="#前端工程实践" aria-label="Permalink to &quot;前端工程实践&quot;">​</a></h3><p><img src="'+o+'" alt=""></p><p>最后一个模块是前端工程实践。我们在掌握了前面的基础知识之后，也就基本掌握了做一个前端工程师的底层能力。在这个模块中，分享一些性能、工具链、持续集成、搭建系统、架构与基础库这几个方向的前端工程实践案例。</p><p><strong>性能</strong>：对任何一个前端团队而言，性能是它价值的核心指标，从早年“重构”的实践开始，前端有通过性能证明自己价值的传统。</p><p>但是性能并非细节的堆砌，也不是默默做优化，所以，我会从团队的角度来跟你一起探讨性能的方法论和技术体系。</p><p><strong>工具链</strong>：对一个高效又合作良好的前端团队来说，一致性的工具链是不可或缺的保障，作为开发阶段的入口，工具链又可以和性能、发布、持续集成等系统链接到一起，成为团队技术管理的基础。</p><p><strong>持续集成</strong>：并非一个新概念，但是过去持续集成概念和理论都主要针对软件开发，而对前端来说，持续集成是一个新的课题（当然对持续集成来说，前端也是一个新课题），比如 daily build 就完全不适用前端，前端代码必须是线上实时可用的。这一部分内容将会针对前端的持续集成提出一些建设的思路。</p><p><strong>搭建系统</strong>：前端工作往往多而繁杂，针对高重复性、可模块化的业务需求，传统的人工开发不再适用，搭建系统是大部分大型前端团队的选择。这一部分内容我将会介绍什么是搭建系统，以及一些常见的搭建系统类型。</p><p><strong>架构和基础库</strong>：软件架构师主要解决功能复杂性的问题，服务端架构师主要解决高流量问题，而前端是页面间天然解耦，分散在用户端运行的系统，但是前端架构也有自己要解决的问题。</p><p>前端需求量大、专业人才稀缺，更因为前端本身运行在浏览器中，有大量兼容工作要做。所以前端架构的主要职责是兼容性、复用和能力扩展。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p><img src="'+n+'" alt=""></p>',44),_=[c];function h(g,d,m,u,S,f){return t(),s("div",null,_)}const q=a(l,[["render",h]]);export{P as __pageData,q as default};
