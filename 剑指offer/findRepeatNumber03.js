/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    // 方法一 排序 双指针 O(n)
    nums.sort((a, b) => a - b);
    let left = -1;
    for (const num of nums) {
        if (left !== num) {
            left = num;
        } else {
            return left;
        }
    }
    return -1;
};

var findRepeatNumber = function (nums) {
    // 不改变 数组 哈希表
    // 太简单了 没就set if has 就返回

}

var findRepeatNumber = function (nums) {
    // 原地交换
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        if (nums[nums[i]] === nums[i]) return nums[i];
        [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    }
    return -1;
}

