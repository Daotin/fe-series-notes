# 代码规范

## 开启 VSCode 插件推荐

新增 `.vscode/extensions.json` 文件

```json
{
  "recommendations": [
    "johnsoncodehk.volar",
    "johnsoncodehk.vscode-typescript-vue-plugin",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

## 项目工作区规范

新增 `.vscode/settings.json` 文件

```json
{
  // eslint 保存格式化
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.options": {
    "extensions": [".js", ".ts", ".jsx", ".tsx", ".vue"]
  },
  // 编辑器保存格式化
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  // .ts 文件格式化程序
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // .vue 文件格式化程序
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 操作时作为单词分隔符的字符
  "editor.wordSeparators": "`~!@#%^&*()=+[{]}\\|;:'\",.<>/?",
  // 一个制表符等于的空格数
  "editor.tabSize": 2,
  // 行尾字符
  "files.eol": "\n",
  // 保存到额时候用使用 prettier进行格式化
  "editor.formatOnSave": true,
  // // 不要有分号
  // "prettier.semi": false,
  // // 使用单引号
  // "prettier.singleQuote": true,
  // // 默认使用prittier作为格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Prettier 配置

> Prettier 主要是为了代码风格的规范或统一，例如单引号还是双引号，每行最大长度，等号左右空格，使用 tab 还是 空格等等

1、在 VSCode 中安装[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)插件

2、新增`.prettierrc.js`文件

```js
module.exports = {
  // 超过多少字符后换行
  printWidth: 120,
  // 行末分号
  semi: false,
  // 单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用tab缩进还是空格
  useTabs: true,
  // 是否使用尾逗号
  trailingComma: "es5", // 对象或数组末尾加逗号
  // > 标签放在最后一行的末尾，而不是单独放在下一行
  jsxBracketSameLine: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号。 alwaysz:总是带括号，avoid：省略括号
  arrowParens: "avoid",
};
```

3、新增`.prettierignore`文件

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

## ESLint 配置

> ESLint 主要是为了做代码检测，例如未使用的变量，未定义的引用，比较时使用 ===，禁止不必要的括号等等

新增 `.eslintrc.cjs` 文件，并配置规则，关闭 prettier 的警告：

```js
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  rules: {
    "prettier/prettier": "off",
  },
};
```
