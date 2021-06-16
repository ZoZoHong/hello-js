/**
 * https://leetcode-cn.com/problems/stone-game/
 * @param {number[]} piles
 * @return {boolean}
 */
// 博弈论
var stoneGame = function (piles) {
    return true
};

// DP!
var stoneGame = function (piles) {
    const n = piles.length;
    const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
    for (let len = 1; len <= n; len++) {
        for (let l = 1; l + len - 1 <= n; l++) {
            let r = l + len - 1;
            let a = piles[l - 1] + dp[l + 1][r];
            let b = piles[r - 1] + dp[l][r - 1];
            dp[l][r] = Math.max(a, b);
        }
    }
    return dp[1][n] > 0;
};