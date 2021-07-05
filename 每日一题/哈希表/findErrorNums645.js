/**
 * https://leetcode-cn.com/problems/set-mismatch/
 * 方法一 : 排序 遍历 
 * 方法二 : 哈希表
 * 方法三:
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    // 找到重复然后在找到丢失的整数
    // 不能遍历 , 用桶排序 其实就是哈希表
    const buckets = new Array(nums.length + 1).fill(0);
    // 统计个数
    buckets[0] = Infinity;
    for (const num of nums) {
        buckets[num] = (buckets[num] || 0) + 1;
    }


    return [buckets.findIndex(v => v === 2), buckets.findIndex(v => v === 0)];

};



let nums = [3, 2, 2];
console.log(findErrorNums(nums));