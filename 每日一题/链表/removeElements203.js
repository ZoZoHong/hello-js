/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 简单基础题 链表
 * 
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 删除链表中所有满足 Node.val == val 的节点
    if (!head) {
        return head;
    }
    // 最简单的遍历,创建哑节点 \textit{dummyHead}dummyHead
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return dummyHead.next;
};

