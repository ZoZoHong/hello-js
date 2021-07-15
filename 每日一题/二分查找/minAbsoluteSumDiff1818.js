/**
 * https://leetcode-cn.com/problems/minimum-absolute-sum-difference/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 贪心 On 但解决不了有能为0的项
// var minAbsoluteSumDiff = function (nums1, nums2) {
//     const diff = [];
//     const MOD = 10 ** 9 + 7;
//     let maxdiff = 0, maxIndex = 0;
//     for (let i = 0; i < nums1.length; i++) {

//         diff.push(Math.abs(nums1[i] - nums2[i]));
//     }
//     maxdiff = Math.max(...diff);
//     maxIndex = diff.findIndex((v) => {
//         return v === maxdiff
//     });
//     let mindiff = maxdiff;
//     for (let i = 0; i < nums1.length; i++) {
//         //找最小
//         mindiff = Math.min(mindiff, Math.abs(nums1[i] - nums2[maxIndex]))
//     }
//     diff[maxIndex] = mindiff;
//     return diff.reduce((a, b) => a + b) % MOD
// };

// [1, 28, 21]
// [9, 21, 20]


var minAbsoluteSumDiff = function (nums1, nums2) {
    // 二分查找
    const MOD = 1e9 + 7;
    const N = nums1.length;
    let sum = 0, max = 0;

    const temp = nums1.slice().sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 0; i < N; i++) {
        const a = nums1[i], b = nums2[i];
        if (a === b) continue;
        const x = Math.abs(a - b);
        sum += x;
        let left = 0, right = N - 1;
        while (left < right) {
            // 找与b最接近的数
            const mid = left + ((right - left) >> 1) + 1;
            if (temp[mid] <= b) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        let nd = Math.abs(temp[left] - b);
        if (right + 1 < N) nd = Math.min(nd, Math.abs(temp[right + 1] - b));
        if (nd < x) max = Math.max(max, x - nd);
    }
    return (sum - max) % MOD;
}

// const nums1 = [1, 7, 5], nums2 = [2, 3, 5];
const nums1 = [1, 28, 21], nums2 = [9, 21, 20]
// const nums1 = [1, 10, 4, 4, 2, 7], nums2 = [9, 3, 5, 1, 7, 4]
// const nums1 = [2, 4, 6, 8, 10], nums2 = [2, 4, 6, 8, 10];

console.log(minAbsoluteSumDiff(nums1, nums2));