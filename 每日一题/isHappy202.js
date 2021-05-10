/**
 * 快乐数 简单题
 * https://leetcode-cn.com/problems/happy-number/
 * 哈希表查死循环
 * 快慢指针
 * 数学法 - 规律
 * 
 * @param {number} n
 * @return {boolean}
 */


var isHappy = function (n) {
    let slow = n;
    let fast = getNext(n);
    while (fast != 1 && fast != slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};

const getNext = (n) => {
    return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
}

console.log(isHappy(4));