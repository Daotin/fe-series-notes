const commonPath = "/menu1";

export default [
  {
    text: "2022",
    collapsible: true,
    collapsed: false,
    items: [
      // This shows `/guide/index.md` page.
      {
        text: "函数式弹框组件warnDialog实现",
        link: `${commonPath}/warnDialog.md`,
      }, // /guide/one.md
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
