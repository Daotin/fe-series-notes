/**
 * 该脚本用于生成指定文件夹下的目录索引文件 index.md。
 *
 * 使用方法：
 * 在命令行中执行以下命令：
 * node index.js [目标文件夹]
 *
 * 参数说明：
 * [目标文件夹]：要生成目录索引的文件夹名称。
 *
 * 注意事项：
 * - 请确保目标文件夹存在。
 * - 目标文件夹下的所有以 .md 结尾的文件（除了 index.md）将被包含在目录索引中。
 * - 目录索引文件将会被写入到目标文件夹下的 index.md 文件中。
 * - 目录索引文件的格式为 Markdown。
 */

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const targetFolder = process.argv[2];

if (!targetFolder) {
  console.error('Please specify a folder name.');
  process.exit(1);
}

// 路径处理，跟当前文件下的docs/xxx 目录
const docsPath = path.join(__dirname, 'docs');
const basePath = path.join(docsPath, targetFolder);

console.log('basePath==>', basePath);

// 检查路径是否存在
if (!fs.existsSync(basePath)) {
  console.error('The specified folder does not exist.');
  process.exit(1);
}

// 初始化 markdown 内容
let markdownContent = '# 文章目录\n\n';

// 递归遍历文件夹
function walkDirectory(dir, nested = '') {
  const files = fs.readdirSync(dir);

  let directories = [];
  let markdownFiles = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      directories.push(filePath);
    } else if (stat.isFile() && path.extname(file) === '.md' && path.basename(file).toLowerCase() !== 'index.md') {
      markdownFiles.push(filePath);
    }
  });

  // 输出 Markdown 文件链接
  if (markdownFiles.length > 0) {
    const localPath = path.relative(basePath, dir);
    const title = localPath || '其他';
    markdownContent += `## ${title}\n`;
    markdownFiles.forEach((filePath) => {
      const relativePath = path.relative(basePath, filePath);
      const name = path.basename(filePath, '.md');
      const link = `./${relativePath.replace('.md', '')}`;
      markdownContent += `- [${name}](${link})\n`;
    });
    markdownContent += '\n';
  }

  // 递归子目录
  directories.forEach(walkDirectory);
}

// 开始遍历
walkDirectory(basePath);

// 写入 index.md 文件
fs.writeFileSync(path.join(basePath, 'index.md'), markdownContent);

console.log('index.md has been generated successfully.');
