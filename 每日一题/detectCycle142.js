/**
 * 快慢指针
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let [slow, fast, start] = [head, head, head];

    while (slow && fast && fast.next) {
        // 快 =  2慢
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            while (start !== slow) {
                slow = slow.next;
                start = start.next;
            }
            return start;
        }
    }
    return null;
};