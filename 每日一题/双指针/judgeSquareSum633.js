/**
 * @param {number} c
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/sum-of-square-numbers/
// 超时 暴力法
// var judgeSquareSum = function (c) {
//     for (let a = 1; a * a <= c; a++) {
//         for (let b = 1; b * b <= c; b++) {
//             if (a * a + b * b === c) {
//                 return true;
//             }
//             if (a * a + b * b > c) {
//                 break;
//             }
//         }
//     }
//     return false;
// };

// 费马平方和定理


// 方法一 : 使用 sqrt函数
// O(√c) 时间复杂度
var judgeSquareSum = function (c) {
    for (let a = 0; a * a <= c; a++) {
        const b = Math.sqrt(c - a * a);
        if (b === parseInt(b)) {
            return true;
        }
    }
    return false;
}
// 方法二:双指针
// < 则a++
// > 则b--
var judgeSquareSum = function (c) {
    // 左右指针
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        const sum = left * left + right * right;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}