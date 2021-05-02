class Queue {
    constructor() {
        this.queue = [];
    }
    enQueue(item) {
        this.queue.push(item);
    }
    deQueue() {
        return this.queue.shift();
        // 先进先出 shift 弹出最低的
    }
    getHeader() {
        return this.queue[0];
    }
    getLength() {
        return this.queue.length;
    }
    isEmpty() {
        return this.getLength() === 0;
    }
}

