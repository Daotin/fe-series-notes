# vue2-principle-learning

Vue2 官方文档：https://v2.cn.vuejs.org/v2/guide/index.html

学习资料（已学完）：https://juejin.cn/book/6844733705089449991

## 源码学习

> 灵魂提问：学习 Vue 源码，到底是为了学习 Vue 的什么？

我认为主要学习以下几点：

核心模块：

- [响应式原理](响应式系统/响应式原理.md)：Vue.js 的响应式系统使得数据和视图之间保持同步。
- 编译原理：Vue.js 使用基于模板的方式来组织用户界面，编译器负责将模板转换为可执行的渲染函数。
- 虚拟 DOM：Vue.js 使用虚拟 DOM 来追踪界面的状态变化，以提高渲染效率
- 渲染原理：渲染器负责将虚拟 DOM 渲染到实际的浏览器 DOM 中
- 组件系统

辅助模块：

- 事件机制
- 生命周期

周边模块：

- Vuex 原理
- VueRouter 原理
