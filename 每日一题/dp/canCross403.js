/**
 * @param {number[]} stones
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/frog-jump/

//  方法一 : 动态规划 复杂度 n^2
var canCross = function (stones) {
    // 初始化dp 数组
    // 为什么使用 二维数组 dp[i][k] i 记录 当前位置 k 记录 跳跃的距离
    const n = stones.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = true;
    // 先遍历一次,去掉必定跳不到最后的数组
    for (let i = 1; i < n; i++) {
        if (stones[i] - stones[i - 1] > i) {
            return false;
        }
    }
    // 开始跳跃 遍历
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const k = stones[i] - stones[j];
            if (k > j + 1) {
                break;
            }
            // 状态转换方程
            dp[i][k] = dp[j][k - 1] || dp[j][k + 1] || dp[j][k];
            if (i === n - 1 && dp[i][k]) {
                return true;
            }
        }
    }
    return false;
};