/**
 * @param {number} n
 * @return {boolean}
 */
// 暴力遍历
// var isPowerOfTwo = function (n) {
//     for (let i = 0; i < 32; i++) {
//         const power = 2 ** i;
//         if (n === power) {
//             return true;
//         } else if (n < power) {
//             return false;
//         }
//     }
//     return false;
// };

// 二分遍历
// var isPowerOfTwo = function (n) {
//     // 二分查找
//     let left = 0, right = 32;
//     while (left < right) {
//         const mid = parseInt((left + right) >> 1);
//         const powerOfmid = 2 ** mid;
//         if (n === powerOfmid) {
//             return true;
//         } else if (powerOfmid > n) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return false;
// };

// 位运算
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
}






let n = 1;

console.log(isPowerOfTwo(-16));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));