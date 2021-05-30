/**
 * 中等
 * 拆分 遍历 -> 超时
 * https://leetcode-cn.com/problems/total-hamming-distance/
 * @param {number[]} nums
 * @return {number}
 */


var totalHammingDistance = function (nums) {
    let total = 0, n = nums.length;
    const MAX = 30;
    // 超时
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         total += hammingDistance(nums[i], nums[j]);
    //     }
    // }
    // 逐位计算 全长减去 含0的长度
    for (let i = 0; i < MAX; i++) {
        let c = 0;
        for (const val of nums) {
            c += (val >> i) & 1; // 为1就含1,
        }
        total += c * (n - c);
    }
    return total;
};

console.log(totalHammingDistance([4, 14, 2]));
