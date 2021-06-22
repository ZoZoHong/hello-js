/**
 * 字符串的全排列
 * 1 <= s 的长度 <= 8
 * https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const ans = [];
    const set = new Set();
    let vis = new Array(10);
    const dfs = (s, index, cur) => {
        if (index === s.length) {
            set.add(cur);
            return;
        }
        // 遍历
        for (let i = 0; i < s.length; i++) {
            if (!vis[i]) {
                vis[i] = true;
                dfs(s, index + 1, cur + s[i]);
                vis[i] = false;
            }
        }
    }
    dfs(s, 0, '');
    // 不能返回set
    for (let value of set.values()) {
        ans.push(value);
    }
    return ans;
};