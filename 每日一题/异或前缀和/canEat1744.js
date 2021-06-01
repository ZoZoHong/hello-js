/**
 * 中等题 6.1专享题
 * 
 * 前缀和
 * 
 * https://leetcode-cn.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
    let pre = 0;
    const ans = [];
    // 计算前缀和
    for (let i = 1; i < candiesCount.length; i++) {
        candiesCount[i] += candiesCount[i - 1];
    }
    console.log(candiesCount);

    for (let i = 0; i < queries.length; i++) {
        // 遍历查询 吃的数量区间  [ (queries[i][1] + 1)*1  , (queries[i][1] + 1) * queries[i][2] ] 
        const caneat = (queries[i][1] + 1) * queries[i][2];

        const query = queries[i];
        const favoriteType = query[0], favoriteDay = query[1], dailyCap = query[2];

        const x1 = favoriteDay + 1;
        const y1 = x1 * dailyCap;
        const x2 = favoriteType === 0 ? 1 : candiesCount[favoriteType - 1] + 1;
        const y2 = candiesCount[favoriteType];

        ans.push(!(x1 > y2 || y1 < x2));
    }
    return ans;
};


let candiesCount = [5, 2, 6, 4, 1], queries = [[3, 1, 2], [4, 10, 3], [3, 10, 100], [4, 100, 30], [1, 3, 1]];
console.log(canEat(candiesCount, queries));