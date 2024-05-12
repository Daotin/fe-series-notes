https://github.com/Daotin/Web/blob/master/11-%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9E%84%E5%BB%BA/03-Webpack.md

## entry
指定 webpack 的打包⼊⼝

单⼊⼝：entry 是⼀个字符串, 多⼊⼝：entry 是⼀个对象
```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};

module.exports = {
	entry: {
		app: './src/app.js',
		adminApp: './src/adminApp.js'
	}
};
```


## output
告诉 webpack 如何将编译后的⽂件输出到磁盘。

```js
module.exports = {
	entry: './path/to/my/entry/file.js'
	output: {
		filename: 'bundle.js’,
		path: __dirname + '/dist'
	}
};

// 多出口配置
module.exports = {
	entry: {
		app: './src/app.js',
		search: './src/search.js'
	},
	output: {
		filename: '[name].js', // 通过占位符确保文件名称唯一
		path: __dirname + '/dist'
	}
};
```

## loaders
webpack 开箱即用只支持 JS 和 JSON 两种文件类型，通过 Loaders 去支持其它文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。

本身是一个函数，接受源文件作为参数，返回转换的结果。

语法：
```js
const path = require('path');
module.exports = {
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.txt$/, use: 'raw-loader' } // 需要先npm i raw-loader -D
		]
	}
};
```


## plugins

插件⽤于 bundle ⽂件的优化，资源管理和环境变量注⼊,作⽤于整个构建过程。

比如打包前，删除dist目录，自动生成dist下html文件等一些不属于loader做的事情。

用法：
```js
const path = require('path');
module.exports = {
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};
```


### 常用loader和plugin配置
> ==注意：这些loader都需要先经过npm i安装！==


```js
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			// 解析 ES6
			{
				test: /\.js$/,
				use: 'babel-loader' 
			},
			// css-loader ⽤于加载 .css ⽂件，并且转换成 commonjs 对象导出
			// style-loader 将导出的样式通过 <style> 标签插⼊到 head 中
			// loader加载的顺序是右边先执行！
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			// 解析less
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			// 解析图片，字体首选url-loader或者file-loader，url-loader比file-loader多了options配置，可以设置较⼩资源⾃动 base64
			{
				test: /\.(png|svg|jpg|gif)$/, // test: /\.woff|woff2|eot|ttf|otf)$/
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240 // 10kB
						}
					}
				]
			}
		]
	}
};
```

> babel-loader需要配置`.babelrc`：

```json
{
  "presets": [
	  "@babel/preset-env" // 一个配置集合
  ],
  "plugins": [
	  "@babel/proposal-class-properties" // 单独的配置
  ]
}
```


## 文件监听

两种方式：

- 启动 webpack 命令时，带上 --watch 参数
- 在配置 webpack.config.js 中设置 watch: true

缺点：页面需要手动刷新。

原理：**轮询判断⽂件的最后编辑时间是否变化。如果某个⽂件发⽣了变化，并不会⽴刻告诉监听者，⽽是先缓存起来，等 aggregateTimeout。**
```js
module.export = {
	//默认 false，也就是不开启
	watch: true,
	//只有开启监听模式时，watchOptions才有意义
	wathcOptions: {
		//默认为空，不监听的文件或者文件夹，支持正则匹配
		ignored: /node_modules/,
		//监听到变化发生后会等300ms再去执行，默认300ms
		aggregateTimeout: 300,
		//判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
		poll: 1000
	}
}
```


## 热更新

webpack-dev-server 优点：
- 不需要手动刷新页面
- 文件修改后的编译不输出文件到硬盘，而是到内存，速度更快

使用方式：使⽤webpack内置 HotModuleReplacementPlugin插件，不需要额外安装。
```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist', // webpack-dev-server服务的目录
        hot: true  // 开启热更新
    }
};
```

另外，还有一个`webpack-dev-middleware`也可以热更新，当后端使用的是Express或另一个Node.js框架作为你的服务器，可以将 `webpack-dev-middleware` 集成到现有的Node.js服务器中，这样就不需要运行一个额外的服务器（如 `webpack-dev-server`）来处理前端的热更新。

但是，由于是前后端分离开发，专门让后端搞一个对后端来说没用的东西也不太合理，除非是前后端都是一个人开发。

所以，最好的选择还是webpack-dev-server。

### 热更新原理

todo：https://vue3js.cn/interview/webpack/HMR.html#%E4%BA%8C%E3%80%81%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86

