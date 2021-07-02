/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    // 排序+贪心
    costs.sort((a, b) => a - b);
    const n = costs.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (costs[i] <= coins) {
            coins -= costs[i];
            ans++;
        } else {
            break;
        }

    }
    return ans;
};

// 计数排序+贪心 出现次数进行排序

var maxIceCream = function (costs, coins) {
    // 计数排序+贪心
    const freq = new Array(10001).fill(0);
    for (const cost of costs) {
        freq[cost]++;
    }
    let count = 0;
    for (let i = 1; i < 10001; i++) {
        if (coins >= i) {
            // 当还有钱够买冰淇淋
            const curCount = Math.min(freq[i], Math.floor(coins / i));
            coins -= curCount * i;
            count += curCount;
        } else {
            break;
        }
    }
    return count;
};