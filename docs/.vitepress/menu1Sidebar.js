const commonPath = "/menu1";

export default [
  {
    text: "2022",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "try...catch",
        link: `${commonPath}/try.md`,
      },
      {
        text: "dev和prod环境",
        link: `${commonPath}/dev.md`,
      },
      {
        text: "函数式弹框组件warnDialog实现",
        link: `${commonPath}/warnDialog.md`,
      },
    ],
  },
  {
    text: "2011",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "c", link: `${commonPath}/c.md` },
      { text: "d", link: `${commonPath}/d.md` }, // /guide/one.md
    ],
  },
];
