/**
 * https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/
 * @param {number[]} nums
 * @return {number}
 */
// var minPairSum = function (nums) {

//     nums.sort((a, b) => a - b);
//     let l = 0, r = nums.length - 1;
//     let ans = [];
//     while (l < r) {
//         ans.push(nums[l] + nums[r]);
//         l++;
//         r--;
//     }
//     return Math.max(...ans);
// };
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let l = 0, r = nums.length - 1;
    let max = 0;
    while (l < r) {
        max = Math.max(max, nums[l] + nums[r]);
        l++;
        r--;
    }
    return max;
};
// let nums = [3, 5, 4, 2, 4, 6];
nums = [3, 5, 2, 3];
console.log(minPairSum(nums));