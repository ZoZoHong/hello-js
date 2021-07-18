var i = 1;
const throttle = (fn, wait = 50) => {
    let lastTime = 0;
    return function (...args) {
        //当前时间
        let now = +new Date();
        if (now - lastTime > wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    }
}

// 防抖
const debounce = (fn, wait = 50) => {
    let timer = 0;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}

setInterval(
    throttle(() => {
        console.log(i++);
    }, 1000),
    1
);