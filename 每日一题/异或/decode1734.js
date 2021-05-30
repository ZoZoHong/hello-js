/**
 * 解码异或
 * encoded[i] = perm[i] XOR perm[i + 1] 
 * https://leetcode-cn.com/problems/decode-xored-permutation/
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
    const n = encoded.length + 1;
    let total = 0;
    let odd = 0;
    // 首先要得到第一位是什么
    // 长度 encoded.length + 1
    for (let i = 1; i <= n; i++) {
        total ^= i;
    }
    for (let i = 1; i < n - 1; i += 2) {
        // 取encoded中奇数部分
        odd ^= encoded[i];
    }
    // 第一位出现
    let perm = new Array(n).fill(0);
    perm[0] = total ^ odd;
    for (let i = 1; i < n; i++) {
        perm[i] = perm[i - 1] ^ encoded[i - 1];
    }
    return perm;
};

console.log(decode([6, 5, 4, 6]));