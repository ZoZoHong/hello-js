/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//     const map = new Map();
//     for (const num of nums) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }
//     return (map.get(target) || 0)
// };

// 主要是考查二分查找 O(N)
// var search = function (nums, target) {
//     let left = 0, right = nums.length - 1;
//     let cnt = 0;
//     // 左边界
//     while (left < right) {
//         const mid = left + ((right - left) >> 1);
//         console.log(mid);
//         if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     while (nums[left] === target) {
//         cnt++;
//         left++;
//     }
//     return cnt
// };

// 左右边界法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    // 左边界
    while (left < right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (nums[left] !== target) return 0;
    let a = left;
    left = 0;
    right = nums.length - 1;
    // 右边界
    while (left < right) {
        const mid = left + ((right - left) >> 1) + 1;

        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    if (nums[left] !== target) return 0;
    let b = right;
    return b - a + 1;
}
const nums = [5, 7, 7, 8, 8, 10], target = 6;
console.log(search(nums, target));