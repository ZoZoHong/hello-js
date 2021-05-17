/**
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */

// 暴力法
var findMaximumXOR = function (nums) {
    let ans = 0;
    // 优化到O(n) 相同的值异或肯定是0 ,即最小,那么两个数字应是两个不同的值
    // 快慢指针 
    for (const num1 of nums) {
        for (const num2 of nums) {
            ans = Math.max(ans, num1 ^ num2);
        }
    }
    return ans;
};

// 哈希表
// 为什么他比暴力法快? 因为他相当于暴力法多了一些跳出机制
var findMaximumXOR = function (nums) {
    const HIGH_BIT = 30;
    let x = 0;
    for (let k = HIGH_BIT; k >= 0; k--) {
        const seen = new Set();
        // 将a_j 放进哈希表
        for (const num of nums) {
            seen.add(num >> k);
        }
        // 下一位x << 1 + 1
        const xNext = (x << 1) + 1;
        let found = false;
        for (const num of nums) {
            if (seen.has(xNext ^ (num >> k))) {
                found = true;
                break;
            }
        }
        if (found) {
            x = xNext;
        } else {
            // 没找到把第k位 设为0
            x = xNext - 1;
        }
    }
    // 最终结果
    return x;
}



// 字典树 前缀树


var findMaximumXOR = function (nums) {
    const root = new Trie();
    const HIGH_BIT = 30;


    class Trie {
        constructor() {
            // 左子树指向表示0的子节点
            this.left = null;
            // 右子树指向表示1的子节点
            this.right = null;
        }

        add (num) {
            let cur = this.root
            for (let k = HIGH_BIT; k >= 0; --k) {
                let bit = (num >> k) & 1;
                if (bit === 0) {
                    if (cur.left === null) {
                        cur.left = new Trie();
                    }
                    cur = cur.left;
                } else {
                    if (this.right === null) {
                        cur.right = new Trie();
                    }
                    cur = cur.right;
                }
            }
        }

        check (num) {
            let cur = this.root;
            let x = 0;
            for (let k = HIGH_BIT; k >= 0; --k) {
                let bit = (num >> k) & 1;
                if (bit === 0) {
                    if (cur.right != null) {
                        cur = cur.right;
                        x = x * 2 + 1;
                    } else {
                        cur = cur.left;
                        x = x * 2;
                    }
                }
            }
            return x;
        }
    }


    var x = 0;
    for (let i = 1; i < nums.length; i++) {
        add(nums[i - 1]);
        x = Math.max(x, check(nums[i]));
    }
    return x;
}

