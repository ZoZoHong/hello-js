/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// 原题
// https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/solution/zai-d-tian-nei-song-da-bao-guo-de-neng-l-ntml/
// 问题：保证D天内 能全部运送完的最低运载能力 x
var shipWithinDays = function (weights, D) {
    // 确定二分查找左右边界
    // 为什么用二分查找，为了最优化的找出最低运载能力，运载能力一定在这个范围内，通过二分法，最大化的提高搜索效率
    // 确定左右边界，判断运载能力在什么范围内
    let left = Math.max(...weights),
        right = weights.reduce((a, b) => a + b);
    while (left < right) {
        // const mid = Math.floor((left + right) / 2);
        const mid = parseInt(left + ((right - left) >> 1));
        // need 需要运送的天数
        //  cur 当前这天已经运送的包裹重量之和
        let need = 1, cur = 0;
        // 进入当天的添加包裹
        for (const weight of weights) {
            if (cur + weight > mid) {
                need++;
                cur = 0;
            }
            cur += weight;
        }
        if (need <= D) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};