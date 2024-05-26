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

> plugin的编写没有类似loader-runner的独立环境，必须在webpack的环境中编写。

### 插件的基本结构

- 插件名称
- apply方法（参数为compiler）（可以查看[自定义插件](webpack构建原理.md#^5480f4)）
- 插件监听的hooks
- 插件处理流程

![](images/img-20240526150559.png)

### plugin其他配置

#### 1、插件中如何获取传递的参数？

通过插件的构造函数进行获取。

```js
module.exports = class MyPlugin {
	constructor(options) {
		this.options = options;
	}
	apply() {
		console.log("apply", this.options);
	}
};
```

#### 2、插件的错误处理

参数校验阶段可以直接 throw 的方式抛出
```js
throw new Error("Error")
```

如果是在hooks处理阶段，通过 compilation 对象的 warnings和 errors 数组接收。
```js
compilation.warnings.push("warning");
compilation.errors.push("error");
```

#### 3、文件写入磁盘

将内容设置到`compilation.assets`对象上即可。

#### 示例：编写一个压缩构建资源为zip包的插件

要求：
- 生成的 zip 包文件名称可以通过插件传入
- 需要使用 compiler 对象上的特定的 hooks进行资源生成，而不能使用fs

分析：
- 资源的压缩使用 jszip (https://www.npmjs.com/package/jszip)
- emit 生成文件阶段，读取的是 compilation.assets 对象的值，讲zip 资源包设置到 compilation.assets 对象上即可
- 设置到compilation.assets 对象上时候，需要通过webpack-sources库中的RawSource类进行封装，因为Webpack 期望的是一个符合特定接口的对象，该对象需要包含至少 `source()` 和 `size()` 方法。`RawSource` 类正是为了这个目的而设计的，它提供了这些方法，使得 Webpack 能够正确处理和输出文件内容


具体`zip-plugin.js`插件代码：

```js
const JSZip = require("jszip");
const { RawSource } = require("webpack-sources");
const zip = new JSZip();

module.exports = class ZipPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log("zip plugin执行");

    compiler.hooks.emit.tapAsync("myZipPlugin", (compilation, callback) => {
      // console.log(compilation.options.output.path); // dist绝对路径

      // 创建一个目录
      const zip = new JSZip();
      const folder = zip.folder(this.options.filename || "filename");

      // 目录写入文件
      for (let filename in compilation.assets) {
        const source = compilation.assets[filename].source(); // 打包后的文件内容
        folder.file(filename, source);
      }

      // 生成压缩文件
      zip.generateAsync({ type: "nodebuffer" }).then((content) => {
        // console.log(new RawSource(content));
        const filename = this.options.filename + ".zip";
        compilation.assets[filename] = new RawSource(content); // 通过RawSource包裹一层

        callback();
      });
    });
  }
};

```

webpack配置文件中使用：
```js
'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('./plugins/zip-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: false,
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ZipPlugin({
      filename: 'daotin'
    })
  ]
};

```