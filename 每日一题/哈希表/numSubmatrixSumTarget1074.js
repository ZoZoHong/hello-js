/**
 * 困难题
 * 
 * 560是找连续的子数组,而这里是找出所有不同的子矩阵,不需要连续 
 * 二维 
 * 
 * https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
    let ans = 0;
    const m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        const sum = new Array(n).fill(0);
        for (let j = i; j < m; j++) {
            for (let k = 0; k < n; k++) {
                sum[k] += matrix[j][k];
            }
            ans += subarraySum(sum, target);
        }
    }
    return ans;
}









const subarraySum = (nums, k) => {
    const map = new Map();
    map.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (map.has(pre - k)) {
            count += map.get(pre - k);
        }
        map.set(pre, (map.get(pre) || 0) + 1);
    }
    return count;
}