/** 
 * https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * 
 * 第一步,先判断花的数量够不够
 * 第二步,做m束花 要有 m*k朵花 在 n朵花里面找 等待时间最少的
 * 第三步,理清思路 哈希表 遍历一遍全部放进去, 从小到大 如果够了,那就返回最后一个的key 即等到最后的天数为
 * 难点,他每束花里面的k朵是要相邻的,woc,所以哈希表不能用
 * 
 * 二分查找
 * 第一步,先判断花的数量够不够
 * 第二步,设置二分边界
 * 第三步,当前等待天数是否能做成m束花 相邻k朵
 * 
 * 
 * 
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 * 
 * 
 */

var minDays = function (bloomDay, m, k) {
    // 判断数量
    const len = bloomDay.length;
    if (len < m * k) {
        return -1;
    }
    // 二分查找,先定好边界 最短天数,最长天数
    let left = 1, right = Math.max(...bloomDay);
    while (left < right) {
        const mid = parseInt(left + ((right - left) >> 1));
        if (canMake(mid, m, k, bloomDay)) {
            // 可以找到 可以小点
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

const canMake = (days, m, k, bloomDay) => {
    // 可以做成 一束花里面 k朵是相邻的
    let bouquets = 0, flowers = 0;
    for (let i = 0; i < bloomDay.length && bouquets < m; i++) {
        if (bloomDay[i] <= days) {
            flowers++;
            if (flowers == k) {
                bouquets++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    return bouquets >= m;
}
// 哈希表不适合这道题,无法解决相邻问题
// var minDays = function (bloomDay, m, k) {
//     var map = new Map();
//     var sum = 0;
//     if (bloomDay.length < m * k) return -1;
//     // 排序
//     bloomDay.sort((a, b) => a - b);
//     for (let num of bloomDay) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }
//     for (let [day, c] of map.entries()) {
//         sum += c;
//         if (sum >= m * k) return day;
//     }
//     return -1;
// }
// bloomDay = [1,10,3,10,2], m = 3, k = 1  => 3
// bloomDay = [1,10,3,10,2], m = 3, k = 2  => -1
// bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3  => 12
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));