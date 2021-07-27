/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    let ans = -1;

    const dfs = (node) => {
        if (!node) {
            return;
        }

        if (node.val > root.val) {
            ans = (ans === -1) ? node.val : Math.min(ans, node.val)
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root);
    return ans;
};

