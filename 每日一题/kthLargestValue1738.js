/**
 * 将它们异或运算后的结果填入数组,排序 返回
 * https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
    const m = matrix.length, n = matrix[0].length;
    const xors = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    const res = [];
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            xors[i][j] = xors[i - 1][j - 1] ^ xors[i - 1][j] ^ xors[i][j - 1] ^ matrix[i - 1][j - 1];
            res.push(xors[i][j]);
        }
    } c

    res.sort((a, b) => a - b);
    return res[res.length - k];
};

let matrix = [[5, 2], [1, 6]], k = 1
console.log(kthLargestValue(matrix, k));