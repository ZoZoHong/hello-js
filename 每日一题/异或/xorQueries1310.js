/**
 * 查询 i 对应的 异或值 
 * https://leetcode-cn.com/problems/xor-queries-of-a-subarray/
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
// O(nm)
// var xorQueries = function (arr, queries) {
//     const res = [];
//     for (let i = 0; i < queries.length; i++) {
//         // 遍历
//         let left = queries[i][0], right = queries[i][1];
//         while (left <= right) {
//             res[i] ^= arr[left++];
//         }
//     }
//     return res;
// };

// O(n+m)
// 原理 简单来说 你可以认为 全部异或运算之后,里面的数据都整合成一个数了,你只需再进行一次异或就可以查询到你所表达的东西
// 先把全部异或进xors中,然后查询是 xors[left] ^ xors[right] 即可获得left到right的异或值 相同的为 0 = x^x
var xorQueries = function (arr, queries) {
    const n = arr.length;
    const xors = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        xors[i + 1] = xors[i] ^ arr[i];
    }
    const m = queries.length;
    const res = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        res[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1];
    }
    return res;
}

console.log(xorQueries([4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]));