// 字典树
class Trie {
    constructor() {
        this.children = [];
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

    searchPrefix (prefix) {
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
    search (word) {
        const node = this.searchPrefix(word);
        return node !== undefined && node.isEnd !== undefined;
    }

    startsWith (prefix) {
        return this.searchPrefix(prefix);
    }
}

var trie = new Trie();

trie.insert("apple")

console.log(trie.search("apple"));