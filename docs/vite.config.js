import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  plugins: [
    // 中文全文搜索解决方案：https://github.com/emersonbottero/vitepress-plugin-search/issues/11
    SearchPlugin({
      encode: false,
      tokenize: "full",
    }),
  ],
});
