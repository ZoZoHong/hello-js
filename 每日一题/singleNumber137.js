/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode-cn.com/problems/single-number-ii/

// 方法一 哈希表
var singleNumber = function (nums) {
    var numbers = new Map();
    for (let num of nums) {
        numbers.set(num, (numbers.get(num) || 0) + 1);
    }
    let ans = 0;
    for (const [num, count] of numbers.entries()) {
        if (count === 1) {
            ans = num;
            break;
        }
    }
    return ans;
};
// 数字电路设计
// 先上代码
// O n  O 1 换来了代码可读性低,需要配真值表和逻辑运算公式
// 出现三次,则需要三进制,故设计一个三进制电路,通过 其实就是 记录1次 + 记录2次 ,把3次的都过滤
// 00 01 10 --> 00 01 10
// 出现三次 x ,b就会变成0
var singleNumber = function (nums) {
    let a = 0, b = 0;
    for (const num of nums) {
        b = ~a & (b ^ num);
        a = ~b & (a ^ num);
    }
    return b;
}