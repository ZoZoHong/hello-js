/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode-cn.com/problems/delete-and-earn/
// 最大点数 动态规划 dfs
// 类似打家劫舍

var test = [2, 2, 3, 3, 3, 4];

var deleteAndEarn = function (nums) {

    let maxVal = 0;
    for (const val of nums) {
        maxVal = Math.max(val, maxVal);
    }
    const sum = new Array(maxVal + 1).fill(0);
    for (const val of nums) {
        sum[val] += val;
    }
    return rob(sum);
};

const rob = (nums) => {
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
}

console.log(deleteAndEarn(test));