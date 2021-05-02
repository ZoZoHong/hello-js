'use strict';


console.log('使用Promise ， 开始！');
new Promise((resolve, reject) => {
    console.log('初始化');

    resolve();
})
    .then(() => {
        throw new Error('有哪里不对了');
        console.log('执行「这个」”');

    })
    .then(() => {
        console.log("猜猜我是谁");
    })
    .catch(() => {
        console.log('执行「那个」');
    })
    .then(() => {
        console.log('执行「这个」，无论前面发生了什么');
    })
    .finally(() => {
        console.log('最后执行这个');
    })
    .then(() => {
        console.log('点then会一直执行');
    });


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
//手写promise
// 三个常量表示三种状态
// const PENDING = 'pending'
// const RESOLVED = 'resolved'
// const REJECTED = 'rejected'
// function MyPromise(fn) {
//     // that 确保this的指向在异步执行的时候不出错
//     const that = this;
//     // 一开始的状态就是PENDING 
//     that.state = PENDING;
//     // value 用于保存 resolve reject 传入的值
//     that.value = null;
//     // 回调保存起来 用于状态改变时使用
//     that.resolvedCallbacks = [];
//     that.rejectedCallbacks = [];
//     // 判断是否为等待状态
//     function resolve(value) {
//         if (value instanceof MyPromise) {
//             // 如果原型为promise
//             return value.then(resolve, rejcet);
//         }
//         setTimeout(() => {
//             if (that.state === PENDING) {
//                 that.state = RESOLVED;
//                 that.value = value;
//                 that.resolvedCallbacks.map(cb => cb(that.value));
//             }
//         }, 0)

//     }
//     function reject(value) {
//         // 为了保证函数执行顺序，需要将两个函数体代码使用 setTimeout 包裹起来
//         setTimeout(() => {
//             if (that.state === PENDING) {
//                 that.state = REJECTED;
//                 that.value = value;
//                 that.rejectedCallbacks.map(cb => cb(that.value));
//             }
//         }, 0);

//     }
// } try {
//     fn(resolve, reject);
// } catch (e) {
//     reject(e);
// }


// // 在Mypromise的原型上定义函数then
// MyPromise.prototype.then = function (onFulfilled, onRejected) {
//     const that = this;
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
//     onRejected = typeof onRejected === 'function' ? onRejected : r => {
//         throw r;
//     };
//     if (that.state === PENDING) {
//         that.resolvedCallbacks.push(onFulfilled);
//         that.rejectedCallbacks.push(onRejected);
//     }
//     if (that.state === RESOLVED) {
//         onFulfilled(that.value);
//     }
//     if (that.state === REJECTED) {
//         onRejected(that.value);
//     }
// }

// new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//         // console.log('testMyPromise');
//     }, 0)
// }).then(value => {
//     console.log(value);
//     console.log("我呢");
// })

// new Promise((resolve, reject) => {
//     console.log('start');
//     resolve(4);
// }).then().then(value => console.log(value)).then(console.log('我是后面的promise'));


// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, 1000);
// }
// 解决输出6的问题
// for (var i = 1; i <= 5; i++) {
//     // 匿名函数 + 闭包
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j)
//         }, j * 1000)
//     })(i)
// }
// // 
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }


// function create() {
//     let obj = new Object();
//     let con = [].shift.call(arguments);
//     obj.__proto__ = con.prototype;
//     let result = con.apply(obj, arguments);
//     return typeof result === 'object' ? result : obj;
// }


// module.exports = {
//     respect: respect,
//     greet: greet
// };
// //导入http模块
// var http = require('http');
// //创建http:server,并传入回调函数
// var server = http.createServer(function(request,response){
//     //回调函数接收request和response对象
//     console.log(request.method+':'+request.url);
//     //获取http请求的method和url
//     //将http响应200写入response,同时设置内容类型
//     response.writeHead(200,{'Content-Type':'text/html'});
//     //将http响应的html内容写入response
//     response.end('<hl>Hello.World!</hl>');
// });

// server.listen(8080);
// console.log('Sever is running at http://127.0.0.1:8080/');