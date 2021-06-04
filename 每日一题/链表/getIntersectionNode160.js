/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//     // 每次链表的值都不同,所以分别遍历并填入map表,当第二个链表遍历过程中,出现 map.has = 1 ,则返回当前val 没有的话null
//     let head = headA;
//     const set = new Set();
//     while (head !== null) {
//         set.add(head)
//         head = head.next;
//     }
//     head = headB;
//     while (head !== null) {
//         if (set.has(head)) {
//             return head;
//         }
//         head = head.next;
//     }
//     return null;
// };

var getIntersectionNode = function (headA, headB) {
    // 每次链表的值都不同,所以分别遍历并填入map表,当第二个链表遍历过程中,出现 map.has = 1 ,则返回当前val 没有的话null
    if (headB === null || headA === null) {
        return null;
    }

    let pA = headA, pB = headB;

    while (pA != pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};