/**
 * 中等题 动态规划
 * 根据条件 选择动态规划
 * https://leetcode-cn.com/problems/ones-and-zeroes/
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    // 初始化dp数组
    const l = strs.length;
    // 创建三维空数组
    const dp = new Array(l + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));
    // 边界条件 当i = 0 时,这一层数组都为0
    for (let i = 1; i <= l; i++) {
        const ZerosOnes = getZerosOnes(strs[i - 1]);
        let zeros = ZerosOnes[0], ones = ZerosOnes[1];

        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                dp[i][j][k] = dp[i - 1][j][k];
                if (j >= zeros && k >= ones) {
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);
                }
            }

        }
    }
    return dp[l][m][n];
};
// 获取字符串中 0 1 的个数
const getZerosOnes = (str) => {
    const ZerosOnes = new Array(2).fill(0);
    for (let i = 0; i < str.length; i++) {
        ZerosOnes[str[i] - '0']++;
    }
    return ZerosOnes;
}