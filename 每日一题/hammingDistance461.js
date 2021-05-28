/**
 * 简单题
 * https://leetcode-cn.com/problems/hamming-distance/
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // 转二进制

    // 不同位置的数目 -> 汉明距离
    // 异或 -> 不同的为 1 ,然后数1

    let xor = x ^ y;
    let ans = 0;
    // number转string 
    // 直接取2进制
    while (xor > 0) {
        if (xor % 2) {
            ans++;
        }
        xor >>= 1;
    }
    return ans;
};
console.log(hammingDistance(4, 14));
