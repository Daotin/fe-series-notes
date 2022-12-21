# 引入 TailWindCSS

1、安装插件

```
npm install tailwindcss@latest postcss@latest autoprefixer@latest -D
```

2、新增`postcss.config.js`文件

将 `tailwindcss` 和 `autoprefixer` 添加到您的 PostCSS 配置中：

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3、在 main.less 中引入即可

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4、在 main.ts 中引入 main.less 文件

```js
import "./assets/main.less";
```

5、通过`npx tailwindcss init`，生成 tailwind 配置文件：

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
