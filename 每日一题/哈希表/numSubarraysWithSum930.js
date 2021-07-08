/**
 * https://leetcode-cn.com/problems/binary-subarrays-with-sum/
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let sum = 0;
    const map = new Map();
    let ans = 0;
    for (const num of nums) {
        map.set(sum, (map.get(sum) || 0) + 1);
        sum += num;
        ans += map.get(sum - goal) || 0;
    }
    return ans;
};

var nums = [0, 0, 0, 0, 0], goal = 0;
console.log(numSubarraysWithSum(nums, goal));