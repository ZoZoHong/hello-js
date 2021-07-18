/**
 * call 调用这个函数 且 输入this 参数列表
 * apply 和call类似，但是输入 参数数组
 * bind 将this指向传入的参数
 * 
 * 涉及面试题：call、apply 及 bind 函数内部实现是怎么样的？
 */

const numbers = [5, 6, 2, 3, 7];
function inner() {
    const numbers = [5, 6, 1, 3, 8];
    const max = Math.max.apply(this, numbers);

    console.log(max);
    // expected output: 7

    const min = Math.min.apply(this, numbers);

    console.log(min);
    // expected output: 2
}
inner();

// call
Function.prototype.mycall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    // 不传入this默认为window
    context = context || window;
    // 调用的函数 指向this
    context.fn = this;
    // 把从 1 开始的参数 放入 arg
    const args = [...arguments].slice(1);
    // result为返回的值
    const result = context.fn(...args);
    delete context.fn;
    // 删除内存
    return result;
}
// apply 参数列表换成参数数组
Function.prototype.myapply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    // 不传入this默认为window
    context = context || window;
    // 调用的函数 指向this
    context.fn = this;
    let result;
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    // 删除内存
    return result;
}
// bind 较为复杂 将this的指向 传入的参数
Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    const _this = this;
    const args = [...arguments].slice(1);
    return function F() {
        if (this instanceof F) {
            return new _this(...args, ...arguments);
        }
        return _this.apply(context, args.concat(...arguments));
    }
}
console.log(Math.max.mycall(this, 2, 3, 4, 7, 6));
// apply 为参数数组
console.log(Math.max.myapply(this, [2, 3, 4, 7, 6]));
// bind

this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
    x: 81,
    getX: function () { return this.x; }
};
console.log(module.getX());
module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.mybind(module);
// 81
console.log(boundGetX());

/**
 * new 的原理
 *
 * new之后发生了
 *  新生成了一个对象 
 *  链接到原型 proto
 *  绑定this  bind
 *  返回新对象
 * 
 * 涉及面试题：new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？
 */
// function <=> new Function ，是语法糖哒

function create() {
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments);
    return result instanceof Object ? result : obj;
}
