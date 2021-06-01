/**
 * @param {number} n
 * @return {boolean}
 */

// var isPowerOfFour = function (n) {
//     // 先暴力法
//     for (let i = 0; i < 17; i++) {
//         if (n === 4 ** i) {
//             return true;
//         }
//     }
//     return false;
// }

// var isPowerOfFour = function (n) {
//     // 二分查找
//     let left = 0, right = 17;
//     while (left < right) {
//         const mid = parseInt((left + right) >> 1);
//         const powerOfmid = 4 ** mid;
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


var isPowerOfFour = function (n) {
    // 1 一定在奇数位上 如何校验
    // return n % 3 === 1 && n > 0 && (n & (n - 1)) === 0;
    // 偶校验
    // return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
    // 奇校验
    return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) > 0;
};


let n = 1;

console.log(isPowerOfFour(64));
console.log(isPowerOfFour(32));
console.log(isPowerOfFour(17));
console.log(isPowerOfFour(2));
console.log(isPowerOfFour(1));