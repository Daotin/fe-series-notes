// 模拟Vue实例
class Vue {
  constructor(options) {
    this.$data = options.data;
    this.$el = document.querySelector(options.el);
    this.observe(this.$data);
    this.compile(this.$el);
  }

  // 观察数据
  observe(data) {
    if (!data || typeof data !== 'object') return;
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }

  // 定义响应式数据
  defineReactive(obj, key, val) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
      set(newVal) {
        if (newVal === val) return;
        val = newVal;
        dep.notify();
      },
    });
  }

  // 编译模板
  compile(el) {
    const nodes = el.childNodes;
    Array.from(nodes).forEach((node) => {
      if (node.nodeType === 3) {
        // 文本节点
        const reg = /\{\{(.*?)\}\}/;
        const match = node.textContent.match(reg);
        if (match) {
          const key = match[1].trim();
          new Watcher(this.$data, key, (val) => {
            node.textContent = val;
          });
        }
      }
    });
  }
}

// 依赖收集器
class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach((sub) => sub.update());
  }
}

// 观察者
class Watcher {
  constructor(data, key, cb) {
    this.data = data;
    this.key = key;
    this.cb = cb;
    Dep.target = this;
    this.value = data[key]; // 触发getter,收集依赖
    Dep.target = null;
  }

  update() {
    const newVal = this.data[this.key];
    if (newVal !== this.value) {
      this.value = newVal;
      this.cb(newVal);
    }
  }
}

// 使用示例
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!',
  },
});

// 更改数据,触发更新
setTimeout(() => {
  app.$data.message = 'Data changed!';
}, 1000);
