/**
 * 
 * https://leetcode-cn.com/problems/last-stone-weight-ii/
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let n = stones.length;
    let sum = stones.reduce((a, b) => a + b);
    let t = Math.floor(sum / 2);
    const dp = new Array(n + 1).fill(0).map(() => new Array(t + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        const x = stones[i - 1];
        for (let j = 0; j <= t; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= x) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - x] + x);
            }
        }
    }
    return Math.abs(sum - 2 * dp[n][t]);
};


// 官解
var lastStoneWeightII = function (stones) {
    let sum = 0;
    for (const weight of stones) {
        sum += weight;
    }
    const m = Math.floor(sum / 2);
    const dp = new Array(m + 1).fill(false);
    dp[0] = true;
    for (const weight of stones) {
        for (let j = m; j >= weight; --j) {
            dp[j] = dp[j] || dp[j - weight];
        }
    }
    for (let j = m; ; --j) {
        if (dp[j]) {
            return sum - 2 * j;
        }
    }
};


