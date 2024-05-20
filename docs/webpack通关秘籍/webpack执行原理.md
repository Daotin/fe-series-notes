## webpack启动流程

当我们执行npm run dev/build的时候，做了什么操作？

```json
"scripts": {
	"build": "wabpack"
}
```

当使用npm run 的时候，实际上执行的是`./node_modules/.bin/webpack` 指令。

> 这个webpack指令是哪儿来的？

是在安装webpack的时候，如果安装的包中有bin选项，那么在安装的时候，如果是全局安装，则会放到全局usr/bin目录下（linux），如果是局部安装，则会放到`./node_modules/.bin`下。

bin的写法有两种：
```json
// 第一种：在这种情况下，name字段对应的值将作为命令
"bin": "./bin/webpack.js",
// 第二种：可以定义多个命令，每个命令指向不同的可执行文件
"bin": {
  "webpack-cli": "./bin/cli.js"
},
```

所以，对于webpack为例，实际指向的是`./bin/webpack.js` 文件。

### webpack的webpack.js做了什么？

这个脚本是一个Node.js命令行工具的引导程序，用于确保用户安装了必要的webpack命令行工具（CLI），并在需要时自动安装。

具体流程：

1. **设置初始退出代码**：将`process.exitCode`设为0，表示默认情况下程序成功退出。
2. **定义`runCommand`函数**：该函数使用`child_process`模块运行子进程来执行命令，并返回一个Promise，以便处理异步任务。
   - **作用**：用于执行安装命令或其他命令行任务。
3. **定义`isInstalled`函数**：检查给定的npm包是否已安装。
   - **作用**：用于检测`webpack-cli`或`webpack-command`是否已安装。
4. **定义`CliOption`类型**：定义了一个包含CLI工具信息的对象结构，用于描述可用的CLI选项。
5. **定义可用CLI列表`CLIs`**：包含两个CLI工具的信息，`webpack-cli`和`webpack-command`，并检测它们是否已安装。
6. **检查已安装的CLI工具**：通过过滤`CLIs`列表，获取已安装的CLI工具。
   - **作用**：确定用户系统中已安装的CLI工具数量。
7. **如果CLI工具数量为0，处理无已安装CLI工具的情况**：
   - 显示安装CLI工具的提示信息。
   - 检测项目是否使用Yarn作为包管理器。
   - 提示用户是否要安装`webpack-cli`。
   - 根据用户输入，使用`npm`或`yarn`安装`webpack-cli`。
8. **如果CLI工具数量为1，处理已安装一个CLI工具的情况**：
   - 加载并执行已安装的CLI工具。
9. **如果CLI工具数量为2，处理安装了多个CLI工具的情况**：
  - 提示用户只需安装一个CLI工具，并将退出代码设为1。

最后，如果我们安装了webpack-cli，则会加载并执行`webpack-cli`，具体的代码为：
```js
require(path.resolve(
	path.dirname(pkgPath),
	pkg.bin[installedClis[0].binName]
));
```

最终实际执行的是`./bin/cli.js`。

### webpack-cli中cli.js做了什么？

1、导入一些不需要编译的参数。比如init，info等

```js
const { NON_COMPILATION_ARGS } = require("./utils/constants");
```

2、如果命令行参数中有上述不需要编译的参数，直接执行`prompt-command.js`文件并退出

```js
const NON_COMPILATION_CMD = process.argv.find(arg => {
	if (arg === "serve") {
		global.process.argv = global.process.argv.filter(a => a !== "serve");
		process.argv = global.process.argv;
	}
	return NON_COMPILATION_ARGS.find(a => a === arg);
});

if (NON_COMPILATION_CMD) {
	return require("./utils/prompt-command")(NON_COMPILATION_CMD, ...process.argv);
}
```

> `prompt-command.js`文件做了什么工作？

主要作用是检查特定的 `@webpack-cli` 包是否已安装，如果未安装，则提示用户是否安装该包。其执行流程如下：

1. 构建包的名称和路径，并尝试在本地或全局范围内解析该包的路径。
2. 如果包已安装，调用 `runWhenInstalled` 函数继续执行后续逻辑。
3. 如果包未安装，构建安装命令（使用 `npm` 或 `yarn`），并通过 `readline` 模块向用户提示是否安装该包。
4. 根据用户的输入：
   - 如果用户同意安装，运行安装命令，然后调用 `runWhenInstalled` 或特定的初始化逻辑。
   - 如果用户拒绝安装，显示错误信息并设置退出代码为 1。

通过这一流程，函数确保在执行特定命令之前所需的 `@webpack-cli` 包已经安装。

比如，init示例如下：
![](images/img-20240520140527.png)

3、引入 yargs，用于解析命令行参数

```js
const yargs = require("yargs").usage(`webpack-cli ${require("../package.json").version}

Usage: webpack-cli [options]
       webpack-cli [options] --entry <entry> --output <output>
       webpack-cli [options] <entries...> --output <output>
       webpack-cli <command> [options]

For more information, see https://webpack.js.org/api/cli/.`);

// 引入 config-yargs.js，用于配置 yargs.配置的内容有很多命令的分组。
require("./config/config-yargs")(yargs);

/**
*解析命令行参数并处理错误、帮助信息等.
   
   其中，err 为错误信息，argv 为解析后的参数，output 为帮助信息。
   output: 
     - 当用户输入有效命令和选项时，output 为空，执行命令逻辑。
     - 当用户请求帮助、版本信息或输入无效命令时，output 包含相应的信息。 
*/
yargs.parse(process.argv.slice(2), (err, argv, output) => {
		Error.stackTraceLimit = 30;

		// arguments validation failed
		if (err && output) {
			console.error(output);
			process.exitCode = 1;
			return;
		}

		// help or version info
		if (output) {
			console.log(output);
			return;
		}

		if (argv.verbose) {
			argv["display"] = "verbose";
		}
	...


/*
convert-argv.js文件的作用是解析命令行参数和配置文件，将其转换为 Webpack 可用的配置选项，
并确保所有必要的插件和编译器已正确注册和加载，从而准备好执行 Webpack 构建任务
*/
let options = require("./utils/convert-argv")(argv);
```

`config-yargs.js`配置的分组如下：

参数分组 (config/config-args.js)，将命令划分为9类：

- Config options: 配置相关参数(文件名称、运行环境等)
- Basic options: 基础参数(entry设置、debug模式设置、watch监听设置、devtool设置)
- Module options: 模块参数，给 loader 设置扩展
- Output options: 输出参数(输出路径、输出文件名称)
- Advanced options: 高级用法(记录设置、缓存设置、监听频率、bail等)
- Resolving options: 解析参数(alias 和 解析的文件后缀设置)
- Optimizing options: 优化参数
- Stats options: 统计参数
- options: 通用参数(帮助命令、版本信息等)

![](images/img-20240520140536.png)

4、引入webpack，执行编译任务

```js
function processOptions(options) {
 // ...
}
processOptions(options);
```

processOptions具体的执行内容如下：

1. **处理 Promise**：如果 `options` 是一个 Promise，则等待其解析后再次调用 `processOptions`，捕获错误并退出。
   如果 Webpack 配置文件是以异步方式加载的，比如动态导入或使用某些插件/工具生成的配置，返回值可能是一个 Promise
```js
if (typeof options.then === "function") {
	options.then(processOptions).catch(function(err) {
		console.error(err.stack || err);
		// eslint-disable-next-line no-process-exit
		process.exit(1);
	});
	return;
}
```

2. **解析并转换统计选项**：根据 `options.stats` 设置输出选项 `outputOptions`，并根据命令行参数进一步调整输出选项。
	中间大段 ifArg 的代码主要作用是根据命令行参数对 outputOptions 进行动态配置。
	ifArg 是一个辅助函数，用于检查命令行参数是否存在，并根据参数值修改相应的 outputOptions 属性。

> `outputOptions` 的作用是配置和控制 Webpack 编译过程中的输出信息。
> 比如我们一般统计包的大小使用webpack-bundle-analyzer，但是也可以使用stats（ `webpack --config webpack.prod.js --json > stats.json` ）进行初略统计，一般不怎么使用。


3. **初始化 Webpack 编译器**：根据配置选项创建 Webpack 编译器实例，并处理初始化过程中可能的错误。
```js
try {
/**
 * 这段代码是在使用 webpack 函数创建一个新的 webpack 编译器实例。webpack 是一个模块打包工具，它可以将许多模块转换成静态资源。
  在这段代码中，webpack 函数接收一个参数 options，这是一个对象，包含了一系列配置选项。这些选项可以用来定制 webpack 的行为。
  例如，你可以在 options 对象中指定入口文件、输出路径、加载器等。
  webpack(options) 的返回值是一个 webpack 编译器实例，这个实例被赋值给了 compiler 变量。
  你可以使用这个 compiler 实例来启动编译过程，或者对编译过程进行更细粒度的控制。
 */
  compiler = webpack(options);
} catch() {
//...
}
```

4. **设置进度插件**：如果命令行参数包含 `progress`，则添加进度插件。
```js
if (argv.progress) {
	const ProgressPlugin = require("webpack").ProgressPlugin;
	new ProgressPlugin({
		profile: argv.profile
	}).apply(compiler);
}
```

5. **处理编译回调**：定义 `compilerCallback` 处理编译后的输出，包括错误处理和结果输出。

```js
function compilerCallback(err, stats) { 
	// 1. 清理缓存
	// 2. 处理错误
	// 3. 输出编译结果
	// 4. 检查错误
}
```

6. **执行编译或监视**：根据配置选项执行一次性编译或启用文件监视模式。

```js
// 这行代码检查配置选项 `firstOptions` 或 `options` 中是否设置了 `watch` 属性
if (firstOptions.watch || options.watch) { 
 // ...
 // 使用 compiler.watch 方法启用 Webpack 的文件监视模式。watchOptions 包含监视相关的选项，compilerCallback 是编译完成后的回调函数。
 compiler.watch(watchOptions, compilerCallback);
} else {
	// 如果没有设置 watch 属性，则执行一次性编译
	compiler.run((err, stats) => {//...})
}
```


最后，总结一下`cli.js`做的内容：

1. 引入 yargs，对命令行进行定制
2. 分析命令行参数，对各个参数进行转换，组成编译配置项options
3. 引用webpack，根据配置项options进行编译和构建。


compiler到底做了什么？

































