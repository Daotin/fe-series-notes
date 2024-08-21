// 模拟Vue实例
class Vue {
  constructor(options) {
    this.$data = options.data;
    this.$el = document.querySelector(options.el);
    this.originTemplate = this.$el.innerHTML; // 保存原始模板
    this.observe(this.$data);
    this.$watcher = new Watcher(this, this.render.bind(this), true);
    console.log('originTemplate', this.originTemplate);
    this.render();
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

  // 渲染函数
  render() {
    console.log('组件重新渲染');
    if (!this.$el) return;
    const data = this.$data;
    const reg = /\{\{(.*?)\}\}/g;
    this.$el.innerHTML = this.originTemplate.replace(reg, (match, key) => {
      key = key.trim();
      return data[key];
    });
  }
}

// 依赖收集器
class Dep {
  constructor() {
    this.subs = new Set();
  }

  addSub(sub) {
    console.log('addSub', this.subs.size);
    this.subs.add(sub);
  }

  notify() {
    console.log('notify', this.subs);
    this.subs.forEach((sub) => sub.update());
  }
}

// 观察者
class Watcher {
  constructor(vm, fn, isRenderWatcher) {
    this.vm = vm;
    this.getter = fn;
    this.isRenderWatcher = isRenderWatcher;
    this.deps = new Set();
    this.newDeps = new Set();
    this.value = this.get();
  }

  get() {
    Dep.target = this;
    let value = this.getter.call(this.vm);
    Dep.target = null;
    this.cleanupDeps();
    return value;
  }

  addDep(dep) {
    if (!this.newDeps.has(dep)) {
      this.newDeps.add(dep);
      if (!this.deps.has(dep)) {
        dep.addSub(this);
      }
    }
  }

  cleanupDeps() {
    this.deps.forEach((dep) => {
      if (!this.newDeps.has(dep)) {
        dep.subs.delete(this);
      }
    });
    let tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.clear();
  }

  update() {
    queueWatcher(this);
  }

  run() {
    this.get();
  }
}

// 更新队列
const queue = [];
let waiting = false;

function queueWatcher(watcher) {
  console.log('queueWatcher', queue);
  if (!queue.includes(watcher)) {
    queue.push(watcher);
    if (!waiting) {
      waiting = true;
      Promise.resolve().then(flushQueue);
    }
  }
}

function flushQueue() {
  const seenWatchers = new Set();
  queue.forEach((watcher) => {
    if (!seenWatchers.has(watcher)) {
      seenWatchers.add(watcher);
      watcher.run();
    }
  });
  queue.length = 0;
  waiting = false;
}

// 使用示例
const app = new Vue({
  el: '#app',
  data: {
    name: 'Vue',
    count: 0,
  },
});

// 更改数据，触发更新
const btn = document.querySelector('.btn-update');
let count = 0;
btn.onclick = function () {
  console.log('更新前');
  count += 1;
  app.$data.count = count;
  app.$data.name = 'Vue ' + (count + 2);
  console.log('数据已更新，等待下一个tick');
};
