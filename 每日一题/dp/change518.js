/**
 * 硬币组合数, 降维中 嵌套交换问题 ,组合数和排列数的区别
 * 解析参考 https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-iihe-pa-lou-ti-wen-ti-dao-di-yo/
 * https://leetcode-cn.com/problems/coin-change-2/
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (i >= coin) {
                dp[i] += dp[i - coin];
            } else {
                continue;
            }
        }
    }
    return dp[amount];
};

let amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins));