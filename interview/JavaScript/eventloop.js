
/**
 * 首先执行同步代码，这属于宏任务  
 * 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
 * 执行所有微任务
 * 当执行完所有微任务后，如有必要会渲染页面
 * 然后开始下一轮EventLoop，执行宏任务中的异步代码，也就是setTimeout中的回调函数
 * 
 * ----------------------
 * 
 * 单线程
 * 同步/异步 
 * 宏任务 微任务 
 * 异步进程处理 - > 达成条件放入异步任务进程 
 */

/**
 * 第一个思考题
 */

// console.log(1);
// setTimeout(() => {
//     console.log(3);
// }, 100)
// console.log(2);

/**
 * 第二个思考题
 */

// console.log(1);
// setTimeout(() => {
//     console.log(3);
// }, 0)
// console.log(2);

/**
 * 第三个思考题
 */

/**
 * 同步
 * log()
 * async1()
 * setTimeout()
 * Promise()
 * console()
 */
console.log('script start')
async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function () {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })

console.log('script end')