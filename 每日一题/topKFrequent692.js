/**
 * 
 * 条件:    
 *  1. 输出 按频率高低排序
 *  2. 同频率 按字母顺序排序
 *  3. 输出前k个
 * 
 *  一.计数 排序 哈希.键值 字符串排序
 *  二. 优先队列
 * 
 * https://leetcode-cn.com/problems/top-k-frequent-words/ 
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const cnt = new Map();
    for (const word of words) {
        cnt.set(word, (cnt.get(word) || 0 + 1));
    }
    const res = [];
    for (const key of cnt.keys()) {
        // 导出键
        res.push(key);
    }
    res.sort((a, b) => {
        // 排序键
        return cnt.get(a) === cnt.get(b) ? a.localCompare(b) : cnt.get(b) - cnt.get(a);
    })
    return res.slice(0, k);
};