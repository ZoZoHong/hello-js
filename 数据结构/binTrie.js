const HIGH_BIT = 30;


class TrieNode {
    constructor() {
        // 左子树指向表示0的子节点
        this.left = null;
        // 右子树指向表示1的子节点
        this.right = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add (num) {
        let cur = this.root
        for (let k = HIGH_BIT; k >= 0; --k) {
            let bit = (num >> k) & 1;
            if (bit === 0) {
                if (cur.left === null) {
                    cur.left = new TrieNode();
                }
                cur = cur.left;
            } else {
                if (this.right === null) {
                    cur.right = new TrieNode();
                }
                cur = cur.right;
            }
        }
    }

    check (num) {
        let cur = this.root
        let x = 0;
        for (let k = HIGH_BIT; k >= 0; --k) {
            let bit = (num >> k) & 1;
            if (bit === 0) {
                if (cur.right != null) {
                    cur = cur.right;
                    x = x * 2 + 1;
                } else {
                    cur = cur.left;
                    x = x * 2;
                }
            }
        }
        return x;
    }
}

var root = new Trie()
root.root.left = new TrieNode();

let cur = root.root;
console.log(cur.left.left);

console.log(root);
