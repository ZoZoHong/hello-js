/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    // strs.sort((a, b) => a.length - b.length);
    // 纵向扫描
    for (let j = 0; j < strs[0].length; j++) {
        const c = strs[0][j];
        for (let i = 0; i < strs.length; i++) {
            if (i === strs[0].length || strs[i][j] !== c) {
                return strs[0].substring(0, j);
            }
        }
    }
    return strs[0];
};

strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);