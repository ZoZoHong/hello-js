/**
 * 这里定义了二叉树 当前节点 左子树 右子树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode-cn.com/problems/range-sum-of-bst/
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 深度优先 双O(n)
// var rangeSumBST = function (root, low, high) {
//     if (!root) {
//         // 跳出递归 root没有值了
//         return 0;
//     }
//     if (root.val > high) {
//         // 如果大了，则要去找左边的 左边小
//         return rangeSumBST(root.left, low, high);
//     }
//     if (root.val < low) {
//         return rangeSumBST(root.right, low, high);
//     }
//     // 
//     return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
// };

// 广度优先搜索
//
// var rangeSumBST = function (root, low, high) {
//     let sum = 0;
//     const q = [root];
//     while (q.length) {
//         const node = q.shift();
//         if (!node) {
//             continue;
//         }
//         if (node.val > high) {
//             q.push(node.left);
//         } else if (node.val < low) {
//             q.push(node.right);
//         } else {
//             sum += node.val;
//             q.push(node.left);
//             q.push(node.right);
//         }
//     }
//     return sum;
// };