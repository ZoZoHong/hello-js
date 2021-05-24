/**
 * 困难题 
 * Tag 字典树 
 * https://leetcode-cn.com/problems/maximum-xor-with-an-element-from-array/
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
//  暴力遍历 超时
var maximizeXor = function (nums, queries) {
    const ans = [];
    var maxXor = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < queries.length; i++) {
        maxXor = -1;
        for (const num of nums) {
            if (num <= queries[i][1]) {
                maxXor = Math.max(queries[i][0] ^ num, maxXor);
            }
        }
        ans.push(maxXor);
    }
    return ans;
};

//字典树

class Trie {
    constructor() {
        const L = 30;
        this.children = new Array(2);
    }
    insert (word) {
        let node = this.children;
        for (const ch of word) {
            if (!node[ch]) {
                node[ch] = {};
            }
            node = node[ch];
        }
        node.isEnd = true;
    }
}

console.log(new Trie());