class Node {
    // 节点
    constructor(v, next) {
        this.value = v;
        this.next = next;
    }
}
// 链表
class LinkList {
    constructor() {
        // 数据
        this.size = 0;
        this.dummyNode = new Node(null, null);
    }
    // 方法
    find(header, index, curIndex) {
        if (index === curIndex) return header;
        return this.find(header.next, index, curIndex + 1);
    }
    addNode(v, index) {
        this.checkIndex(index);
        // 插入哪
        let prev = this.find(this.dummyNode, index, 0);
        this.size++;
        return prev.next;
    }
    insertNode(v) {
        return this.addNode(v, index);
    }
    addToFrist(v) {
        return this.addNode(v, 0);
    }
    addToLast(v) {
        return this.addNode(v, this.size);
    }
    checkIndex(index) {
        if (index < 0 || index > this.size) throw Error('Index error');
    }
    removeNode(index, isLast) {
        this.checkIndex(index);
        index = isLast ? index - 1 : index;
        let prev = this.find(this.dummyNode, index, 0);
        let node = prev.next;
        prev.next = node.next;
        node.next = null;
        this.size--;
        return node;
    }
    removeFristNode() {
        return this.removeNode(0);
    }
    removeLastNode() {
        return this.removeNode(this.size, true);
    }
    getNode(index) {
        this.checkIndex(index);
        if (this.isEmpty()) return;
        return this.find(this.dummyNode, index, 0).next;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
}
