// 字典树

// 以搜索英文字母树为例 类继承

// 原型继承

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.children = [];
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.children;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */

Trie.prototype.searchPrefix = function (prefix) {
    let node = this.children;
    for (const ch of prefix) {
        if (!node[ch]) {
            // 收不到字母
            return false;
        }
        // 到下一个节点
        node = node[ch];
    }
    return node;
}
Trie.prototype.search = function (word) {
    const node = this.searchPrefix(word);
    return node !== undefined && node.isEnd !== undefined;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.searchPrefix(prefix);
};

var trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
