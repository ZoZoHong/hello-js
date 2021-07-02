/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) {
        return 'X';
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
    // 序列化 对null进行标记
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // 遇到X 确定root节点 dfs前序遍历
    const list = data.split(',');
    const buildTree = (list) => {
        const rootVal = list.shift();
        if (rootVal === 'X') {
            return null;
        }
        const root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    }
    return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */