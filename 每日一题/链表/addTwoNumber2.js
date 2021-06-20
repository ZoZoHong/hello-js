/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode(0);
    let temp = dummy;
    var t = 0;
    while (l1 != null || l2 != null) {
        let a = l1 != null ? l1.val : 0;
        let b = l2 != null ? l2.val : 0;
        t = a + b + t;
        temp.next = new ListNode(t % 10);
        t = Math.floor(t / 10);

        temp = temp.next;
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    if (t > 0) temp.next = new ListNode(t);
    return dummy.next;
};