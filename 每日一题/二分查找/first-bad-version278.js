/**
 * https://leetcode-cn.com/problems/first-bad-version/
 * 
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        // 二分查找
        let left = 1, right = n;
        while (left < right) {
            // 最快的mid
            const mid = left + ((right - left) >> 1);
            // left +right 可能溢出
            if (isBadVersion(mid)) {
                // true 
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

// 先来个暴力的,超时
for (let i = 1; i <= n; i++) {
    if (isBadVersion(i) === true) {
        return i;
    }
}


// 1705930310
// 1508243771