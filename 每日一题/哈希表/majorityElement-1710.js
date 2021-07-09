/**
 * https://leetcode-cn.com/problems/find-majority-element-lcci/
 * 面试题 17.10. 主要元素  
 * 众数
 * @param {number[]} nums
 * @return {number}
 */

// O(n) O(n)
var majorityElement = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > (nums.length >> 1)) {
            return num;
        }
    }
    return -1;
};

// 摩尔投票

var majorityElement = function (nums) {
    let cnt = 0, x = -1;

    for (const num of nums) {
        if (cnt === 0) {
            x = num;
            cnt = 1;
        } else {
            cnt += x === num ? 1 : -1;
        }
    }
    cnt = 0;
    for (const num of nums) {
        if (x === num) cnt++;
    }
    return cnt > (nums.length >> 1) ? x : -1;
}


var nums = [3, 2]
console.log(majorityElement(nums));