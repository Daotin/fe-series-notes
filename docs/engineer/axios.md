# 封装网络请求

## 配置步骤

1、安装依赖

```
npm i axios
```

2、新增 utils/request.ts 文件

```ts
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { baseURL } from "@/config/domain";
import { TokenName } from "@/config/const";
import { useAppStoreWithOut } from "@/store";
import { usePermission } from "@/hooks";
import router from "@/router";
import { localMng } from "@/utils/storage-mng";
import md5 from "md5";

const appStore = useAppStoreWithOut();

class Request {
  private baseConfig: AxiosRequestConfig = {
    baseURL,
    headers: {},
    timeout: 20000,
  };

  private instance: AxiosInstance = axios.create(this.baseConfig);

  public constructor() {
    console.log("==>=========Request constructor==============");
    const token = localMng.getItem(TokenName);
    console.log("token==>", token);
    if (token) {
      this.setHeader({
        Authorization: token,
      });
    } else {
      this.initInstance();
    }
  }

  private initInstance() {
    this.instance = axios.create(this.baseConfig);
    this.setReqInterceptors();
    this.setResInterceptors();
  }

  // 请求拦截器
  private setReqInterceptors = () => {
    this.instance.interceptors.request.use(
      (config) => {
        // const { checkApiPermission } = usePermission()
        // config.cancelToken = new axios.CancelToken(function executor(c) {
        // if (!checkApiPermission(config.url)) {
        //   c(config.url + '没有权限')
        //   router.push('/error/forbidden')
        // }
        // });
        const controller = new AbortController(); // 每个请求时都新生成一个AbortController实例

        config.signal = controller.signal;

        // 计算当前请求key值
        const key = this.getRequestKey(config);

        if (this.checkPending(key)) {
          // 重复请求则取消当前请求
          appStore.requests(key).abort();
        } else {
          appStore.addRequest(key, controller);
        }

        // console.log(`%c++++++ 开始请求：${config.url} ++++++`, "color:green");
        // console.log(config.data);
        // console.log(`%c++++++ end ++++++`, "color:green");
        return config;
      },
      (err) => {
        window.$message.error("请求失败");
        return Promise.reject(err);
      }
    );
  };

  // 响应拦截器
  private setResInterceptors = () => {
    this.instance.interceptors.response.use(
      (res) => {
        const { code = 200, body, message } = res.data;
        switch (code) {
          case 200:
            // 请求完成，删除请求中状态
            const key = this.getRequestKey(res.config);
            this.removePending(key);

            return Promise.resolve(body || res.data);
          case 401:
            window.$message.warning(message || "无权限");
            appStore.logout(false);
            return Promise.reject(res.data);
          default:
            window.$message.error(message || "响应失败");
            return Promise.reject(res.data);
        }
      },
      (err) => {
        if (!axios.isCancel(err)) {
          window.$message.error("响应失败");
        }
        return Promise.reject(err);
      }
    );
  };

  // 设置请求头
  public setHeader = (headers: any) => {
    this.baseConfig.headers = { ...this.baseConfig.headers, ...headers };
    this.initInstance();
  };

  // 检查key值
  private checkPending = (key) => !!appStore.requests[key];

  // 删除key值
  private removePending = (key) => {
    delete appStore.requests[key];
  };

  // 可以根据请求的地址，方式，参数，统一计算出当前请求的md5值作为key
  private getRequestKey = (config) => {
    if (!config) {
      // 如果没有获取到请求的相关配置信息，根据时间戳生成
      return md5(+new Date());
    }
    const data =
      typeof config.data === "string"
        ? config.data
        : JSON.stringify(config.data);
    return md5(config.url + "&" + config.method + "&" + data);
  };

  // get请求
  public get = (
    url: string,
    data = {},
    config: AxiosRequestConfig<any> = {}
  ): Promise<any> =>
    this.instance({ url, method: "get", params: data, ...config });

  // post请求
  public post = (
    url: string,
    data = {},
    config: AxiosRequestConfig<any> = {}
  ): Promise<any> => this.instance({ url, method: "post", data, ...config });

  // 不经过统一的axios实例的get请求
  public postOnly = (
    url: string,
    data = {},
    config: AxiosRequestConfig<any> = {}
  ): Promise<any> =>
    axios({
      ...this.baseConfig,
      url,
      method: "post",
      data,
      ...config,
    });

  // 不经过统一的axios实例的post请求
  public getOnly = (
    url: string,
    data = {},
    config: AxiosRequestConfig<any> = {}
  ): Promise<any> =>
    axios({
      ...this.baseConfig,
      url,
      method: "get",
      params: data,
      ...config,
    });

  // delete请求
  public deleteBody = (
    url: string,
    data = {},
    config: AxiosRequestConfig<any> = {}
  ): Promise<any> => this.instance({ url, method: "delete", data, ...config });

  public deleteParam = (
    url: string,
    data = {},
    config: AxiosRequestConfig<any> = {}
  ): Promise<any> =>
    this.instance({ url, method: "delete", params: data, ...config });
}

export default new Request();
```

3、使用方式

```ts
import request from "@/utils/request";

// 登录
export const apiGetUserInfo = () => request.post("/sys/user/info");
export const apiGetMenuList = () => request.post("/sys/menus");
```

## 配置说明

网络封装主要是封装 axios 请求，封装通用的 get，post 方法，还有添加请求拦截器和响应拦截器。

- 请求拦截器：主要添加一些权限的校验，重复请求的取消等
- 响应拦截器：主要对返回值做处理，做统一的 code 判断，统一的失败后的 tip 提示等。

### axios 基本使用

安装好依赖后，在使用的地方直接引入就可以了：

```html
<script setup>
  import axios from 'axios';
  //...
  axios({
      url: 'xxx',
      ...
  })
</script>
```

### axios 二次封装

很多关于 axios 封装的代码都会在 main.ts 文件中进行全局属性的配置，比如设置 axios 的超时时间：

```ts
axios.defaults.timeout = 20000;
```

虽然这样配置并没有什么问题，但网络请求一般在我们的开发中会作为一个单独模块进行封装，对外统一接口，这样的好处是我们可以在一个集中的地方进行网络请求的相关配置，还可以对请求进行一些预处理和返回结果的拦截处理，也不会与 main.ts 文件中本身的逻辑混合。

我们新增 `request.ts` 文件，需要实现下面功能：

1. 添加请求和响应的拦截
2. 增加重复请求的取消
3. 对外统一接口

具体代码如上面第二步骤。

上面我们使封着的一个**类**的形式，或者采用另一种**导出实例**的方式进行封装，也是可以的：

```ts
import axios from "axios";

// 创建请求实例
const instance = axios.create({
  baseURL: "/api",
  // 指定请求超时的毫秒数
  timeout: 20000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    }
    const { message } = error;
    console.error(message);
    return Promise.reject(error);
  }
);

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return instance({
    method: "post",
    url,
    data,
    params,
  });
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return instance({
    method: "get",
    url,
    params,
  });
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return instance({
    method: "put",
    url,
    params,
    data,
  });
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
  return instance({
    method: "delete",
    url,
    params,
  });
}

export default instance;
```

### 重复请求的取消

有时候，为了避免接口的重复调用，比如表单的提交，我们通常在提交按钮上加一个 loading，当有结果返回时才能再次提交。但是有时候总会忘记加这个 loading，导致表单重复提交。

那么我们可以在封装 axios 的时候，可以通过内部提供的 `AbortController` 来取消重复的网络请求。

**取消重复请求的原理如下**：

我们对每个请求生成一个独一无二的 key 值，在发送请求的时候，将这个 key 值保存起来，当有重复的请求发送时，我们判断当前 key 值的请求正在进行中，就调用 aixos 提供的取消请求的方法取消当前请求，请求返回后，再将 key 值从保存中移除，让下一次请求可以成功发送。

::: danger
但是需要注意，并不是所有的项目都需要取消重复接口操作，因为比如有的处理是后端处理，然后前端轮询查询，这个时候就是不合适的。

参考链接：[Ajax 怎么取消？要不要取消？](https://ssshooter.com/2022-06-23-cancel-ajax/)
:::

取消重复请求具体代码如下：

```ts
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { baseURL } from "@/config/domain";
import { TokenName } from "@/config/const";
import { useAppStoreWithOut } from "@/store";
import { usePermission } from "@/hooks";
import router from "@/router";
import { localMng } from "@/utils/storage-mng";
import md5 from "md5";

const appStore = useAppStoreWithOut();

class Request {
  // ...

  // 请求拦截器
  private setReqInterceptors = () => {
    this.instance.interceptors.request.use(
      (config) => {
        const controller = new AbortController(); // 每个请求时都新生成一个AbortController实例

        config.signal = controller.signal;

        // 计算当前请求key值
        const key = this.getRequestKey(config);

        if (this.checkPending(key)) {
          // 重复请求则取消当前请求
          appStore.requests(key).abort();
        } else {
          appStore.addRequest(key, controller);
        }

        return config;
      },
      (err) => {
        window.$message.error("请求失败");
        return Promise.reject(err);
      }
    );
  };

  // 响应拦截器
  private setResInterceptors = () => {
    this.instance.interceptors.response.use(
      (res) => {
        const { code = 200, body, message } = res.data;
        switch (code) {
          case 200:
            // 请求完成，删除请求中状态
            const key = this.getRequestKey(res.config);
            this.removePending(key);

            return Promise.resolve(body || res.data);
          case 401:
            window.$message.warning(message || "无权限");
            appStore.logout(false);
            return Promise.reject(res.data);
          default:
            window.$message.error(message || "响应失败");
            return Promise.reject(res.data);
        }
      },
      (err) => {
        if (!axios.isCancel(err)) {
          window.$message.error("响应失败");
        }
        return Promise.reject(err);
      }
    );
  };

  // 检查key值
  private checkPending = (key) => !!appStore.requests[key];

  // 删除key值
  private removePending = (key) => {
    delete appStore.requests[key];
  };

  // 可以根据请求的地址，方式，参数，统一计算出当前请求的md5值作为key
  private getRequestKey = (config) => {
    if (!config) {
      // 如果没有获取到请求的相关配置信息，根据时间戳生成
      return md5(+new Date());
    }
    const data =
      typeof config.data === "string"
        ? config.data
        : JSON.stringify(config.data);
    return md5(config.url + "&" + config.method + "&" + data);
  };

  //...
}

export default new Request();
```

::: tip
AbortController 兼容性：Chrome > 66，不支持 IE11
:::

### 在路由跳转的时候取消所有请求

我们还可以进一步将取消请求和路由跳转结合，**在路由跳转的时候取消所有请求**。

思路如下：

1、由于在使用 `controller.abort()` 之后，无法再次请求，所以必须重新 new AbortController() 然后设置 signal，接口请求才能生效，所以每次请求都需要重新 new AbortController()。

2、然后，我们需要在 `router.beforeEach` 中 `abort`，就需要把所有 new AbortController()的实例存储在 store 中，并且使用 key 开做索引，存储结构如下：

```ts
{
	"4273984623896423984": AbortController实例1,
	"2364283462983462394": AbortController实例2
  ...
}
```

key 为 getRequestKey 返回值，value 为对应的 new AbortController()实例。

3、在请求拦截器中，判断如果 key 存在，就使用对应的 value 执行 abort 函数。

4、如果在 router.beforeEach，就遍历对象，执行所有实例的 abort 方法。

示例代码如下：

store 中增加：

```ts
export const useAppStore = defineStore("app", {
  state: (): IState => ({
    requests: {}, // 存储每个请求。形式：{ md5: controller }
  }),
  actions: {
    // 增加请求controller
    addRequest(key, controller) {
      this.requests[key] = controller;
      console.log("this.requests==>", this.requests);
    },
    // 取消所有请求
    requestAbort() {
      let controllers = Object.values(this.requests);
      controllers.forEach((controller) => controller.abort());
      this.requests = {};
      console.log("request abort!");
    },
  },
});

export const useAppStoreWithOut = () => useAppStore(store);
```

在全局导航守卫中：

```ts
// 导航守卫
router.beforeEach(async (to) => {
  console.log("=======router.beforeEach=========");
  const appStore = useAppStoreWithOut();
  const title = (to.meta && (to.meta.title as string)) || "";
  if (title) {
    document.title = title;
  }
  const appStore = useAppStoreWithOut();

  // 在路由跳转的时候取消所有请求
  appStore.requestAbort();

  //...
});
```
