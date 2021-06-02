/**
 * 中等题 前缀和 哈希表 同余定理
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // 关键是如何判断子数组的数量
    const m = nums.length;
    if (m < 2) {
        return false;
    }
    // 条件 大小 >= 2
    // 元素总和 %k === 0
    const map = new Map();
    map.set(0, -1);

    let pre = 0;
    let prevIndex = 0;


    for (const num of nums) {
        pre += num;
        if (map.has(pre % k)) {
            if (prevIndex - map.get(pre % k) >= 2) {
                return true;
            }
        } else {
            map.set(pre % k, prevIndex);
        }
        prevIndex++;
    }


    return false;
};


const nums = [23, 2, 6, 4, 7];
const k = 13;

console.log(checkSubarraySum(nums, k));