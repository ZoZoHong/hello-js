/**
 * @param {number[][]} wall
 * @return {number}
 */
// https://leetcode-cn.com/problems/brick-wall/
// 难在思路
var leastBricks = function (wall) {
    // 创建哈希表
    const map = new Map();
    // 遍历wall 导入哈希表
    for (let width of wall) {
        let sum = 0;
        const n = width.length;
        for (let i = 0; i < n - 1; i++) {
            // 距离左侧的长度
            sum += width[i];
            // 去掉左右两侧
            map.set(sum, (map.get(sum) || 0) + 1);
            // map.set(sum,(0||map.get(sum))+1); 会输出Nan
        }
    }
    var max_cnt = 0;
    for (const [i, c] of map.entries()) {
        max_cnt = Math.max(max_cnt, c);
    }
    // 返回穿过最少 =  高度- 最多缝隙
    return wall.length - max_cnt;
};