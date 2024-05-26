## loader

loader的定义：**loader 只是一个导出为函数的JavaScript 模块**。

下面是一个最简单的loader：
```js
module.exports = function(source) {
	return source;
};
```

### loader-runner

使用loader-runner来测试loader，避免每次需安装webpack进行测试。

```js
const { runLoaders } = require("loader-runner");
const path = require("path");
const fs = require("fs");

console.log('==>',path.join(__dirname, "./demo.txt"))

runLoaders(
  {
    resource: path.join(__dirname, "./demo.txt"), 
    // 字符串：资源的绝对路径（可以选择包含查询字符串）
    loaders: [
      path.join(__dirname, "./raw-loader.js")
    ],
    // String[]：loader的绝对路径（可选地包括查询字符串）
    // {loader, options}[]: 带有选项对象的加载器的绝对路径
    context: { minimize: true },
    // 用作基本上下文的附加加载器上下文
    readResource: fs.readFile.bind(fs),
    // 可选：读取资源的函数
    // 仅当未提供 'processResource' 时使用
    // 必须有签名 function(path, function(err, buffer))
    // 默认使用 fs.readFile
  },
  function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  }
);

```

### loader其他配置

#### 1、传参和获取

loader通过options进行传参
```js
//...
module.exports = {
  module: {
    rules: [
      {
		test: /.(png|jpg|gif|jpeg)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 10240
				}
			}
		]
	},
    ],
  },
};
```

通过 loader-utils 的 getOptions 方法获取参数：

```js
const loaderUtils = require("loader-utils");

module.exports = function(content) {
	const options = loaderUtils.getOptions(this);
};
```


#### 2、loader异常处理

- 通过throw抛出异常
- 通过 this.callback 传递错误
```js
this.callback(
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap,
  meta?: any
);
```

通过callback而不是return 的方式，可以传多个内容：
```js
module.exports = function(source) {
  // return source
  this.callback(null, source, 11, 22, 33)
}
```

输出结果为：
```
{
  result: [ '你好', 11, 22, 33 ],
  resourceBuffer: <Buffer e4 bd a0 e5 a5 bd>,
  cacheable: true,
  fileDependencies: [
    '/Users/daotin/Desktop/github/fe-series-code/geektime-webpack-course/demo/loader-runner/demo.txt'
  ],
  contextDependencies: [],
  missingDependencies: []
}
```


#### 3、loader异步处理

通过 this.async 来返回一个异步函数callback，第一个参数是 Error，第二个参数是处理的结果。

```js
module.exports = function(source) {
	const callback = this.async();
	callback(null, source);
};
```

#### 4、loader缓存
```js
this.cacheable(false) //关掉缓存
```

#### 5、loader文件输出

使用`this.emitFile` 进行文件写入（*仅在webpack中有效，单独使用loader-runner无效*）

```js
const loaderUtils = require("loader-utils");
const path = require('path')

module.exports = function(source) {
	const url = path.join(__dirname, 'dist/index.js');
	
	this.emitFile(url, source);
	
	this.callback(null, source)
}
```


## plugin

