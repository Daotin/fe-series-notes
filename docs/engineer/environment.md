# 配置环境变量

## 开发环境和生产环境的区别

开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。

开发环境(development)和生产环境(production)的构建目标差异很大。

在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。

而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。

## `process.env`

`process` 对象是全局变量，它提供当前 node.js 的有关信息，以及控制当前 node.js 的有关进程。因为是全局变量，它对于 node 应用程序是始终可用的，无需 `require()`。

`process` 对象用于处理与当前进程相关的事情，它是一个全局对象，可以在任何地方直接访问到它而无需引入额外模块。

`process.env` 获取当前系统环境信息的对象，常规可以用来进一步获取环境变量、用户名等系统信息：

```js
console.log(process.env);
console.log("username: " + process.env.USERNAME);
console.log("PATH: " + process.env.PATH);
```

### `process.env.NODE_ENV`

首先要明白一点：

:::tip
`process.env`对象上本来是不存在 `NODE_ENV` 这个属性的。
:::

然而`process.env.NODE_ENV`可用，是前端工程化过程中大家约定俗成的做法，尤其是 webpack 构建前端工程时，会经常使用。

> 那这个属性是什么时候赋值给`process.env`的呢？

其实是 webpack 或者 vite 等工具，在构建时，将 `NODE_ENV` 赋值给`process.env`对象的。至于为什么叫`NODE_ENV`，应该是约定成俗的吧。

NODE_ENV 通常为“production”（生产环境）和“development”（开发环境），或者“prod”和“dev”，以此来区分不同环境下的逻辑行为。

我们可以通过在运行脚本时，手工对 NODE_ENV 赋值。例如 `package.json` 中的脚本：

```js
"scripts": {
  "dev": "NODE_ENV=development webpack --watch ",
  "build": "NODE_ENV=development webpack --mode=production"
},
```

::: warning
说明：`NODE_ENV=development` 在 windows 环境下会报错，需要改为 `set NODE_ENV=production` ，为了解决这个差异，可以使用 `cross-env` 跨平台的设置和使用环境变量。

```js
"scripts": {
  "serve": "cross-env NODE_ENV=development vite",
  "build": "cross-env NODE_ENV=prod vite build --mode prod",
},
```

:::

## 在 webpack 中的配置

在 webpack 中，这样设置之后，我们可以在**脚本**中使用 `process.env.NODE_ENV` 了，但是不能在**模块**中使用，要想在模块当中直接使用，我们还需要一些配置。

在 webpack 4+ 中，你可以使用 mode 选项：

```js
module.exports = {
  mode: "production",
};
```

但是在 webpack 3 及其更低版本中，你需要使用 `DefinePlugin`：

DefinePlugin 官网的解释是：DefinePlugin 允许我们创建全局变量，可以在编译时进行设置。

因此可以使用该属性来设置全局变量来区分开发环境和正式环境，这就是 DefinePlugin 的基本功能。

```js
var webpack = require("webpack");

module.exports = {
  plugins: [
    // 设置环境变量信息
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object"),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
```

## 在 vite 中的配置

**在 vite 启动后，会在 vite 内部通过 `mode` 属性，设置 `process.env.NODE_ENV`，所以我们才能在项目中使用**。

之前，我们在 scripts 命令中使用 `cross-env` 来设置 `NODE_ENV`，但是如果需要配置的环境变量太多，全部设置在 scripts 命令中既不美观也不容易维护，所以我们可以将环境变量配置在`.env` 文件中。

### `import.meta.env`

Vite 在一个特殊的 `import.meta.env` 对象上暴露环境变量。比如`import.meta.env.MODE`表示应用运行的模式。但是只有几个内置变量可用：

- `import.meta.env.MODE`: string 应用运行的模式。
- `import.meta.env.BASE_URL`: string 部署应用时的基本 URL。他由 base 配置项决定。
- `import.meta.env.PROD`: boolean 应用是否运行在生产环境。
- `import.meta.env.DEV`: boolean 应用是否运行在开发环境 (永远与 `import.meta.env.PROD` 相反)。
- `import.meta.env.SSR`: boolean 应用是否运行在 server 上。

:::tip
当我们设定 `.env` 环境变量文件后，`VITE_`开头的变量就会出现在 `import.meta.env` 中，我们就可以在项目中使用。
:::

### `.env`文件

Vite 使用 `dotenv` 从你的 环境目录 中的下列文件加载额外的环境变量：

```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

```

加载的环境变量也会通过 `import.meta.env` 以字符串形式暴露给客户端源码。

为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码（**也就是说只有 `VITE_`开头的自定义变量会出现在 `import.meta.env` 中**）。

例如下面这些环境变量：

```
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```

只有 `VITE_SOME_KEY` 会被暴露为 `import.meta.env.VITE_SOME_KEY` 提供给客户端源码，而 `DB_PASSWORD` 则不会。

```js
console.log(import.meta.env.VITE_SOME_KEY); // 123
console.log(import.meta.env.DB_PASSWORD); // undefined
```

当然，我们可以自定义 env 变量的前缀，请参阅 [envPrefix](https://cn.vitejs.dev/config/shared-options.html#envprefix)（不过，也没必要修改）。
