const commonPath = "/frontend";

// const mdFiles = import.meta.globEager("../../frontend/*.md");

const fs = require("fs");
const mdFiles = fs.readdirSync("./docs/frontend/");
const mdNames = []; // 文件名
const mdNamesObj = {}; // 年份对应文件名

// 获取文件名
Object.values(mdFiles).forEach((item) => {
  try {
    let name = item.split(".")[0];
    // 过滤分组首页index.md
    if (name !== "index") {
      mdNames.push(name);
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
});

// 获取年份对应的文件名
if (mdNames.length) {
  mdNames.forEach((name) => {
    const year = name.split("-")[0];
    const realnameArr = name.split("-").filter((item, i) => i !== 0);
    console.log("⭐==>", name.split("-"), realnameArr);
    const realname = realnameArr.join("-");

    if (year && year.match(/^\d+$/)) {
      if (mdNamesObj[year] && mdNamesObj[year].length) {
        console.log("⭐mdNamesObj[year]==>", mdNamesObj[year]);
        mdNamesObj[year].push(realname);
      } else {
        mdNamesObj[year] = [realname];
      }
    }
  });
}

console.log("⭐mdNames==>", mdNames, mdNamesObj);

// 得到最后的sidebar
let sideBars = [];

if (Object.keys(mdNamesObj).length) {
  sideBars = [];
  for (const year in mdNamesObj) {
    const names = mdNamesObj[year];
    const obj = {
      text: year,
      collapsible: true,
      collapsed: true,
      items: names.map((name) => {
        let a = name.split("-").splice(0, 1, "a");
        return {
          text: name,
          link: `${commonPath}/${year}-${name}.md`,
        };
      }),
    };
    sideBars.push(obj);
  }
}

console.log("⭐sideBars==>", sideBars);

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
