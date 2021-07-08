/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        const other = target - nums[i];
        if (map.get(other) !== undefined) return [map.get(other), i];
        map.set(nums[i], i);
    }
}

var nums = [2, 7, 11, 15]
var target = 9

console.log(twoSum(nums, target));
