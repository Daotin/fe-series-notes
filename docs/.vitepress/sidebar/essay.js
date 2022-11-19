const commonPath = "/frontend";
const filePath = `./docs${commonPath}/`;

// const mdFiles = import.meta.globEager("../../frontend/*.md");

const fs = require("fs");
const mdFiles = fs.readdirSync(filePath);
let mdNames = []; // 文件名
const mdNamesObj = {}; // 年份对应文件名
let excludeFileName = ["index", "images"];

// 获取文件名
Object.values(mdFiles).forEach((item) => {
  try {
    let name = item.split(".")[0];
    // 过滤分组首页index.md
    if (!excludeFileName.includes(name)) {
      mdNames.push(name);
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
});

// 对mdNames排序，按照标题时间降序
if (mdNames.length) {
  mdNames = mdNames.sort((prev, next) => {
    let a = prev
      .split("-")
      .filter((item, i) => i < 3)
      .join("");
    let b = next
      .split("-")
      .filter((item, i) => i < 3)
      .join("");
    console.log("⭐a==>", a, b);
    return b - a;
  });
}

console.log("⭐mdNames==>", mdNames);

// 获取年份对应的文件名
if (mdNames.length) {
  mdNames.forEach((name) => {
    const year = name.split("-")[0];
    if (year && year.match(/^\d+$/)) {
      if (mdNamesObj[year] && mdNamesObj[year].length) {
        mdNamesObj[year].push(name);
      } else {
        mdNamesObj[year] = [name];
      }
    }
  });
}

// console.log("⭐mdNames==>", mdNames, mdNamesObj);

// 得到最后的sidebar
let sideBars = [];
let yearKeys = Object.keys(mdNamesObj); // 年份数组

if (yearKeys.length) {
  sideBars = [];
  for (const year in mdNamesObj) {
    const names = mdNamesObj[year];

    const obj = {
      text: year,
      collapsible: true,
      collapsed: year === yearKeys[0], // 第一个分组默认展开
      items: names.map((name) => {
        // name格式：// 2022-08-10-git-commit规范
        let days = [];
        let realName = [];
        name.split("-").forEach((item, idx) => {
          if (idx < 3) {
            days.push(item);
          } else {
            realName.push(item);
          }
        });

        let link = `${commonPath}/${name}.md`;
        // appendData(name, days.join("-"));
        return {
          text: realName.join("-"),
          link: link,
        };
      }),
    };
    sideBars.push(obj);
  }
}

// console.log("⭐sideBars==>", sideBars);

// 在文件最后追加更新日期
function appendData(name, day) {
  fs.readFile(`${filePath}/${name}.md`, (error, data) => {
    if (error) throw new Error(error);
    else {
      const text = data.toString();
      if (!text.match(/update in \d{4}-\d{1,2}-\d{1,2}/)) {
        fs.appendFileSync(
          `${filePath}/${name}.md`,
          `\n
::: warning 更新日期
update in  ${day}
:::
`
        );
      }
    }
  });
}

export default sideBars;

// export default [
//   {
//     text: "2022",
//     collapsible: true,
//     collapsed: false,
//     items: [
//       {
//         text: "try...catch",
//         link: `${commonPath}/try.md`,
//       },
//       {
//         text: "dev和prod环境",
//         link: `${commonPath}/dev.md`,
//       },
//       {
//         text: "函数式弹框组件warnDialog实现",
//         link: `${commonPath}/warnDialog.md`,
//       },
//     ],
//   },
//   {
//     text: "2011",
//     collapsible: true,
//     collapsed: true,
//     items: [
//       { text: "c", link: `${commonPath}/c.md` },
//       { text: "d", link: `${commonPath}/d.md` }, // /guide/one.md
//     ],
//   },
// ];
