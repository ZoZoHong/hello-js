/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 遍历
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var reverseList = function (head) {
    // 递归 先到底部,再回来
    // 终止条件
    if (head === null || head.next === null) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

// 解析 p = 5 ,  这时候是 4的递归 4.next = 5 ; 5.next = 4 ; 4.next = null; 
//                              4. 5 .next = 4 => 5.next = 4   ==> 4.next =null; 5->4->null 
// 3的递归  5->4->3->null
// ... 