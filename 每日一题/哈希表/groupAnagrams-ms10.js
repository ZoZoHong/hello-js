/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 字母相同,排列不同, code相同的哈希表
    const map = new Map();
    const ans = [];
    const codeAtStr = (str) => {
        return str.split('').sort().join('')
    }
    for (const str of strs) {
        const code = codeAtStr(str)
        if (map.has(code)) {
            map.set(code, map.get(code) + ',' + str);
        } else {
            map.set(code, str);
        }
    }
    for (const value of map.values()) {
        ans.push(value.split(','));
    }
    return ans;
};



// let test = ["eat", "tea", "tan", "ate", "nat", "bat"];
// 如果两个str的code相同,就区分不了, 所以直接对字母进行哈希键处理
let test = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"]
console.log(groupAnagrams(test));

