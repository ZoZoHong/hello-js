// 迭代器
class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator] () {
        let count = 1, limit = this.limit;
        return {
            next () {
                if (count <= limit) {
                    return { done: false, value: count++ }
                } else {
                    return { done: true, value: undefined }
                }
            },
            return () {
                console.log('Exiting early');
                return { done: true }
            }
        }
    }
}

let counter = new Counter(5)
console.log(counter[Symbol.iterator]());

for (let i of counter) {
    console.log(i);
}
console.log('-----\r');
for (let i of counter) {
    if (i > 2) {
        break;
        // 不关闭的话,就不会下次会续上一次继续迭代
    }
    console.log(i);
}

// 生成器


function* nTimes (n) {
    if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
    }
}

for (const x of nTimes(3)) {
    console.log(x);
}
