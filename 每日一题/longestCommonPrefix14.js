/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = '';
    if (strs.length === 0) {
        return "";
    }
    strs.sort((a, b) => a.length - b.length);
    // 纵向扫描
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) return ans;
        }
        ans += strs[0][j];
    }
    return ans;
};

strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);