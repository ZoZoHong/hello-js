/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    // 特殊情况
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    if (len === 2) return Math.max(nums[0], nums[1]);
    //初始化dp数组 
    let dp = [nums[0], Math.max(nums[1], nums[0])];
    //穷举
    for (let i = 2; i < len; i++) {
        //状态转移方程 相邻的不能偷
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    //返回最大的金额 其实就是 对面 奇数和偶数的区别
    return Math.max(dp[len - 1], dp[len - 2]);
};