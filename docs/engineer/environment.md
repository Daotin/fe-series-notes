## 实际测试和配置

### 测试结果

**vite.config.ts 会先于 main.ts 运行**

1、在 vite.config.ts 中：

- 在 vite 中打印 `process.env` 只有一些内置的变量，是没有任何 `NODE_ENV` 的，也没有任何 `VITE_`开头的环境变量
- 在 vite 中打印 `import.meta.env` 为 undefined

当 vite 执行完成后（大约 2s，会执行 main.ts 文件）：

2、在 main.ts 中：

- 在 main.ts 中打印 `process.env` 会报错，提示 process is not defined
- 在 main.ts 中打印 `import.meta.env` 会有除了内建变量外，还有自定义 `VITE_`开头的环境变量

![](./images/env-1.png)

3、在 main.ts 执行完成后，再到 vue 组件中看看：

- 在 login.vue 中打印 `process.env` 会报错，提示 process is not defined
- 在 login.vue 中打印 `import.meta.env` 会有除了内建变量外，还有自定义 `VITE_`开头的环境变量

跟 main.ts 中是一致的。

4、再到其他 js 文件中看看，比如 `tailwind.config.js` 文件：

- 打印 `process.env`，除了内置的变量，还多出了`VITE_USER_NODE_ENV`和`NODE_ENV`，是在 vite 中添加的（参考文章：[vite 项目为什么可以直接使用 NODE_ENV](https://daotin.github.io/posts/2022/11/16/vite%E9%A1%B9%E7%9B%AE%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8NODE_ENV.html)），但是其他的`VITE_`开头的变量（比如 `VITE_BASE_URL`）不在里面。
- 打印 `import.meta.env` 会报错

### 如何配置

那么，如何得到一个完整的对象，包含 `process.env` 内置变量，`import.meta.env` 内置变量（一般用处不大），还有自定义的环境变量呢？

答案：就是使用[define](https://cn.vitejs.dev/config/shared-options.html#define)

具体设置如下，我们设置了`process.env`对象，又单独设置了`NODE_ENV`：

```js
define: {
  'process.env': {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    NODE_ENV: loadEnv(mode, process.cwd())?.VITE_USER_NODE_ENV,
  },
},
```

此时，除了 `vite.config.ts` 和 `tailwind.config.js` 外，其他的 ts 文件，vue 文件都可以在 `process.env` 拿到完整的 **`process.env` 内置变量** 和 **`VITE_`开头的自定义的环境变量** 。

- `vite.config.ts` 因为是入口，所以还是只能拿到 `process.env` 内置变量
- `tailwind.config.js` 能拿到 `process.env` 内置变量，外加 `VITE_USER_NODE_ENV`，也够用了。
- 其他地方，一律使用`process.env.VITE_USER_NODE_ENV` 或者 `process.env.NODE_ENV` 即可。

### vite.config.ts 怎么使用 env 文件定义的环境变量？

首先，它好像也用不上 env 中自定义的环境变量，实在想用，可以使用 Vite 导出的 `loadEnv` 函数来加载指定的 `.env` 文件，或者使用骚操作，[通过 node 文件读取的方式](https://github.com/vitejs/vite/issues/1930#issuecomment-778595832)进行。

毕竟尤雨溪也说过，这是个“[鸡生蛋，蛋生鸡](https://github.com/vitejs/vite/issues/1930)”的问题。
