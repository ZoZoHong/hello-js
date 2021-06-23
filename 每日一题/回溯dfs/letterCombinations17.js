/**
 * 思路:
 *      每次取以一位数字,就推上对应的字母 
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // 回溯
    if (!digits) return [];
    let ans = [];
    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const dfs = (res, index) => {
        if (index === digits.length) {
            ans.push(res);
            return;
        }
        for (let i = 0; i < map[digits[index]].length; i++) {
            // res += (map[digits[index]][i]);
            // dfs(res.slice(0, 1), index + 1);
            // res = res.slice(0, res.length - 1);
            // 这里不能用push

            dfs(res + map[digits[index]][i], index + 1);

        }
    };

    dfs('', 0);
    return ans;
};


console.log(letterCombinations('23'));
