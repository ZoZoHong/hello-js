/**
 * @param {string} s
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/valid-parenthesis-string/

/**
 * 规则:
 * (,),*
 * 
 * 思路
 * 左括号 * push
 * 遇到右括号 先判断有没有最近的左括号 没有就找 * 
 * 剩下 *剩多少都是true
 */

var checkValidString = function (s) {
    // 压栈
    let left = [], star = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') left.push(i);
        if (s[i] === '*') star.push(i);
        if (s[i] === ')') {
            // 先解决右括号的匹配,循环结束再去解决左括号和*
            // 先找left
            if (left.length === 0) {
                if (star.length === 0) return false;
                star.pop();
            } else {
                left.pop();
            }
        }
    }
    if (left.length > star.length) return false;
    while (left.length && star.length) {
        // 这里指,left的位置比star大 *要在(的右边
        if (left.pop() > star.pop()) return false;
    }
    return true;
};

var arr1 = new Array(3)
arr1[0] = "("
arr1[1] = ")"
arr1[2] = "*"

var arr2 = new Array(3)
arr2[0] = "("
arr2[1] = ")"
arr2[2] = "*"

arr1.pop()
console.log(arr1.pop() > arr2.pop());

