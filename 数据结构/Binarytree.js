class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    getSize () {
        return this.size;
    }
    isEmpty () {
        return this.size === 0;
    }
    addNode (v) {
        this.root = this._addChild(this.root, v)
    }
    _addChild (node, v) {
        if (!node) {
            this.size++
            return new Node(v)
        }
        if (node.value > v) {
            node.left = this._addChild(node.left, v)
        } else if (node.value < v) {
            node.right = this._addChild(node.right, v)
        }
        return node
    }
}
// 二叉树 广度搜索 BFS


const searchOfBfs = (root, x){
    let q = [root];

    while (q.length) {
        const node = q.shift();
        if (!node) {
            continue
        }
        if (node.val === x) {

        }
        if (node.val < x) {
            q.push(node.right);
        }
        if (node.val > x) {
            q.push(node.left);
        }
    }
}


