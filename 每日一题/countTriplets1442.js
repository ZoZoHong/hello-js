/**
 * 
 * a === b => a^b = 0 , 在一个 全部异或等于0中,就含有一个这样的
 * 
 *  https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * @param {number[]} arr
 * @return {number}
 */

// 三重循环
// 暴力遍历


// 二重循环
var countTriplets = function (arr) {
    let sum = 0;
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        for (let k = i; k < arr.length; k++) {
            sum ^= arr[k];
            if (sum === 0 && k > i) {
                ans += k - i;
            }
        }
    }
    return ans;
};

// O(n)
var countTriplets = function (arr) {
    // ans = mk - (i1 + i2...+im)
    const cnt = new Map(), total = new Map();
    let ans = 0, s = 0;

    for (const [k, val] of arr.entries()) {
        let t = s ^ val;

        if (cnt.has(t)) {
            ans += cnt.get(t) * k - total.get(t);
        }
        cnt.set(s, ((cnt.get(s) || 0) + 1));
        total.set(s, ((total.get(s) || 0) + k));

        s = t;
    }
    return ans;
}
