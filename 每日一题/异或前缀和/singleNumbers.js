/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    // 分组异或 全部异或只能找出一个出现一次的数,所以需要分组
    let xor = 0;
    xor = nums.reduce((a, b) => a ^ b);

    // 任意选 xor 中一位为 1 的;
    let div = 1;
    let a = 0, b = 0;
    while ((div & xor) === 0) {
        div <<= 1;
    }
    for (const num of nums) {
        if (div & num) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    return [a, b];
};

let nums = [1, 2, 10, 4, 1, 4, 3, 3]
console.log(singleNumbers(nums));