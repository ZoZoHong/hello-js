/**
 * dp 中等
 * https://leetcode-cn.com/problems/target-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    // 通过计算可得 neg = (target - sum)/2
    const sum = nums.reduce((a, b) => a + b);
    const diff = sum - target;
    if (diff % 2 !== 0 || diff < 0) {
        // 要求neg为非负整数
        return 0;
    }
    const neg = diff / 2;
    const n = nums.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        const num = nums[i - 1];
        for (let j = 0; j <= neg; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= num) {
                dp[i][j] += dp[i - 1][j - num];
            }
        }
    }
    return dp[n][neg];
};

var findTargetSumWays = function (nums, target) {
    // 回溯 复杂度高
    let count = 0;
    const backtrack = (nums, target, index, sum) => {
        if (index === nums.length) {
            if (sum === target) {
                count++;
            }
        } else {
            backtrack(nums, target, index + 1, sum + nums[index]);
            backtrack(nums, target, index + 1, sum - nums[index]);
        }
    }
    backtrack(nums, target, 0, 0);
    return count;
}



