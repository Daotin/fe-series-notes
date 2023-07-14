/**
 *
 * @param {*} commonPath 专栏路径
 * @returns
 * 其他：
 * 文件名规则：xxx-yyy[-zzz].md
 * xxx:序号
 * yyy:sidebar显示的文件名
 * zzz(可选)：表示分组，未填会显示默认分组
 */

const DefaultGroupName = "默认分组";

export function createSideBar(commonPath) {
  const filePath = `./docs/${commonPath}/`;

  const fs = require("fs");
  const mdFiles = fs.readdirSync(filePath);
  let mdNames = []; // 文件名
  const mdNamesObj = {}; // 分组对应文件名
  let excludeFileName = ["index", "image", "images"];

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

  // console.log("⭐mdNames==>", mdNames); // [ '10-测试1', '2-测试2', '300-测试3', '6-测试6-分组1' ]

  // 获取分组对应的文件名
  if (mdNames.length) {
    mdNames.forEach((name) => {
      const order = name.split("-")[0];
      const title = name.split("-")[1];
      const group = name.split("-")[2] || DefaultGroupName;

      if (mdNamesObj[group]) {
        mdNamesObj[group].push(order + "-" + title);
      } else {
        mdNamesObj[group] = [order + "-" + title];
      }
    });
  }

  // mdNamesObj: {'默认分组': [ '10-测试1', '2-测试2', '300-测试3', '6-测试6' ] }

  // 排序
  for (const key in mdNamesObj) {
    const titleList = mdNamesObj[key];

    mdNamesObj[key] = titleList.sort(
      (a, b) => a.split("-")[0] - b.split("-")[0]
    );
  }

  // console.log("⭐mdNamesObj==>", mdNamesObj); // { '默认分组': [ '2-测试2', '6-测试6', '10-测试1', '300-测试3' ] }

  // 得到最后的sidebar
  let sideBars = [];
  let groupKeys = Object.keys(mdNamesObj); // 年份数组

  if (groupKeys.length) {
    sideBars = [];
    for (const group in mdNamesObj) {
      const names = mdNamesObj[group];

      const obj = {
        text: group,
        collapsed: group !== groupKeys[0], // 第一个分组默认展开
        items: names.map((name) => {
          // name格式：// 2-测试2
          let text = name.split("-")[1];
          let link =
            group === DefaultGroupName
              ? `/${commonPath}/${name}.md`
              : `/${commonPath}/${name}-${group}.md`;
          // appendData(name, days.join("-"));
          return {
            text: text,
            link: link,
          };
        }),
      };
      sideBars.push(obj);
    }
  }
  // console.log("⭐sideBars==>", sideBars);
  return sideBars;
}

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
