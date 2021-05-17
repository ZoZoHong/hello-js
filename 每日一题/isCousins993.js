/**
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 * 
 * 第一步 , 搜索节点 记录深度
 * 第二步 , 对比
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    // x的信息
    let x_parent = null, x_depth = null, x_found = false;
    // y的信息
    let y_parent = null, y_depth = null, y_found = false;
    // 深度优先搜索
    const search = (node, depth, parent) => {
        if (!node)
            return;
        if (node.val === x) {
            [x_parent, x_depth, x_found] = [parent, depth, true];
        }
        if (node.val === y) {
            [y_parent, y_depth, y_found] = [parent, depth, true];
        }
        if (x_found && y_found) {
            return;
        }
        // 遍历
        search(node.left, depth + 1, node);
        if (x_found && y_found) {
            return;
        }
        // 遍历
        search(node.right, depth + 1, node);


    };
    search(root, 0, null);
    return x_depth === y_depth && x_parent !== y_parent;
};


// 广度优先搜索

var isCousins = function (root, x, y) {
    // x的信息
    let x_parent = null, x_depth = null, x_found = false;
    // y的信息
    let y_parent = null, y_depth = null, y_found = false;

    const update = (node, parent, depth) => {
        if (node.val === x) {
            [x_parent, x_depth, x_found] = [parent, depth, true];
        } else if (node.val === y) {
            [y_parent, y_depth, y_found] = [parent, depth, true];
        }
    }

    const q = [[root, 0]];
    update(root, null, 0);

    while (q.length) {
        const [node, depth] = q.shift();

    }


    // 返回堂兄弟 
    return x_depth === y_depth && x_parent !== y_parent;
}
