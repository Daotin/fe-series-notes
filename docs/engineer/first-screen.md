# 首屏优化

对于 SaaS 系统，一般来说首屏即是登录页，登录有什么地方可以优化的呢？

一般在登录页，会有一个很大的图片，而如果网络不好的话，加载的速度会很慢，所以优化登录页面的图片加载速度是很关键的。

## 优化登录背景图片

1、尽量使用 `webp` 的格式

WebP 的优势在于它具有更优的图像数据压缩算法，在拥有肉眼无法识别差异的图像质量前提下，带来更小的图片体积，同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都非常优秀、稳定和统一。

2、先使用一个小的占位图片，等大图片加载完毕后，再替换成大图片

```ts
/**
 * 等到图片加载完成
 * @param url 图片链接
 */
export function waitForImageLoad(url: string) {
  return new Promise((request, inject) => {
    var img = new Image();
    img.src = url;
    img.addEventListener("load", function () {
      request(url);
      img.remove();
    });
  });
}
```

具体的使用方式：

```ts
import LoginBg from "@/assets/images/login/login-bg.webp?url";
import { waitForImageLoad } from "@/utils";

onMounted(async () => {
  // 优化图片加载完成后再替换首页图片
  try {
    const dom = document.querySelector(".login-wrap") as HTMLElement;
    await waitForImageLoad(LoginBg);
    dom!.style.backgroundImage = `url(${LoginBg})`;
  } catch (error) {
    console.error(error);
  }
});
```

这样在第一次加载登录界面的时候，就会很快打开界面。
