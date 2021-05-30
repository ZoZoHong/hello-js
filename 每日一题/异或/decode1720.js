/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/decode-xored-array/
var decode = function (encoded, first) {
    let ans = [];
    ans.push(first);
    for (let i = 1; i < encoded.length + 1; i++) {
        ans.push(encoded[i - 1] ^ ans[i - 1])
    }
    return ans;
};
var test = [1, 2, 3];

console.log(decode(test, 1));