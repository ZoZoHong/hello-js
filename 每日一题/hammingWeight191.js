/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * @param {number} n - a positive integer
 * @return {number}
 */

// 逐位统计
var hammingWeight = function (n) {
    const N = 32;
    let ans = 0;
    for (let i = 0; i < N; i++) {
        if (n % 2) {
            ans++;
        }
        n >>= 1;
    }
    return ans;
};


// 
var hammingWeight = function (n) {
    const N = 32;
    let ans = 0;
    for (let i = 0; i < N; i++) {
        if ((n & (1 << i)) !== 0) {
            ans++;
        }
    }
    return ans;
};

var hammingWeight = function (n) {
    let ans = 0;
    while (n) {
        n &= n - 1;
        ans++;
    }
    return ans;
};
