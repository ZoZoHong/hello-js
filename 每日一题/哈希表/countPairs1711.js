/**
 * https://leetcode-cn.com/problems/count-good-meals/
 * twoSum 升级版 
 * 哈希表去重
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {

    // (2^n - 1 ) & 2^n = 0 
    const MOD = 10 ** 9 + 7;
    const MAX = 1 << 22;
    const map = new Map();
    let pairs = 0;
    for (const x of deliciousness) {
        for (let sum = 1; sum <= MAX; sum <<= 1) {
            const count = map.get(sum - x) || 0;
            pairs = (pairs + count) % MOD;
        }
        map.set(x, (map.get(x) || 0) + 1);
    }
    return pairs;
};


var deliciousness =
    [2160, 1936, 3, 29, 27, 5, 2503, 1593, 2, 0, 16, 0, 3860, 28908, 6, 2, 15, 49, 6246, 1946, 23, 105, 7996, 196, 0, 2, 55, 457, 5, 3, 924, 7268, 16, 48, 4, 0, 12, 116, 2628, 1468];
console.log(countPairs(deliciousness));