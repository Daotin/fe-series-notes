/**
 * Vue 2的响应式原理主要通过Object.defineProperty方法来实现，核心思想是通过这个方法拦截对象属性的读取和设置操作，从而实现数据的响应式变化。
 * 
 * 下面是Vue 2响应式系统的基本步骤：

侦测数据变化：Vue在初始化实例时对data选项的属性执行递归遍历，包括嵌套对象的属性，利用Object.defineProperty将这些属性全部转为getter/setter。
这个过程发生在observer函数中。

依赖收集：在getter中收集依赖，即收集当前组件的Watcher。当属性被读取时，会触发getter，这时会将当前的Watcher对象（Dep.target指向的对象）添加到这个属性的依赖列表中（即Dep实例的subs数组）。
这个过程发生在defineReactive函数的getter中。

派发更新：当属性被修改时，会触发setter，这时会执行依赖列表中所有Watcher的update方法，通知所有依赖于该属性的组件重新渲染。
这个过程发生在defineReactive函数的setter中。

Watcher：Vue组件的每一个实例都对应一个watcher实例，它会在组件渲染的过程中把接触过的数据属性记录为依赖。
之后当依赖项的setter被调用时，会通知watcher，从而使它关联的组件重新渲染。

Dep：每个被侦测的数据都会关联一个Dep实例，它用来存储依赖于该数据的所有Watcher。
当数据变化时，Dep会负责通知它的subs中的所有Watcher去更新。

通过这种机制，Vue可以精确知道组件何时需要重新渲染，从而达到数据变化驱动视图更新的效果。
 */

// 每一个对象属性都需要一个订阅者 Dep 来管理依赖收集和派发更新
class Dep {
  constructor() {
    // 用来存放Watcher对象的数组
    this.subs = [];
  }
  // 在subs中添加一个Watcher对象
  addSub(sub) {
    this.subs.push(sub);
  }
  // 通知所有Watcher对象更新视图
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

// 每一处使用对象的属性的地方都需要一个订阅者 Watcher 来进行依赖收集
class Watcher {
  constructor(key) {
    // this.key = key;
    // 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到
    Dep.target = this;
  }
  // 更新视图的方法
  update() {
    console.log('视图更新啦～');
  }
}

// 对对象的一个属性进行响应式处理
function defineReactive(obj, key, val) {
  // 一个Dep类对象
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true /* 属性可枚举 */,
    configurable: true /* 属性可被修改或删除 */,
    get: function reactiveGetter() {
      /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
      dep.addSub(Dep.target);
      return val; /* 实际上会依赖收集，下一小节会讲 */
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return;
      // 在set的时候触发dep的notify来通知所有的Watcher对象更新视图
      dep.notify();
    },
  });
}

// 循环遍历对象，对每一个属性进行响应式处理
function observer(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

// 定义Vue类
class Vue {
  /* Vue构造类 */
  constructor(options) {
    this._data = options.data;
    observer(this._data);

    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    // PS：这里的watcher没有跟任何的属性绑定，只是单纯的演示
    new Watcher();

    /* 在这里模拟render的过程，为了触发test属性的get函数 */
    console.log('render~', this._data.test1);
  }
}

// 测试
let vm = new Vue({
  data: {
    test1: 'I am test1.',
    test2: 'I am test2.',
    test3: 'I am test3.',
  },
});

const btn = document.querySelector('.btn-update');

console.log(btn);

btn.onclick = function () {
  vm._data.test1 = 'hello,world.';
};
