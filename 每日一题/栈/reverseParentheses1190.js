/**
 * @param {string} s
 * @return {string}
 */
// var reverseParentheses = function (s) {
//     // 简单版 堆栈 O(n^2)
//     // 相关api .reverse() 反转数组,需要把字符串转成数组然后在反转,然后再去掉分割
//     const stk = [];
//     let str = '';
//     for (const ch of s) {
//         if (ch === '(') {
//             // 推入栈,进入下一层,并保存str
//             stk.push(str);
//             str = '';
//         } else if (ch === ')') {
//             // 反转 返回上一层, str推入栈
//             str = str.split("").reverse().join("");
//             str = stk.pop() + str;
//         } else {
//             // 遍历 拼接ch -> str 
//             str += ch;
//         }
//     }
//     return str;
// };

var reverseParentheses = function (s) {
    // 预处理 先遍历括号的位置
    const Len = s.length;
    const pair = new Array(Len).fill(0);
    const stk = [];
    for (let i = 0; i < Len; i++) {
        if (s[i] === "(") {
            stk.push(i);
        } else if (s[i] === ")") {
            const j = stk.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }
    const str = [];
    let index = 0, step = 1;
    while (index < Len) {
        if (s[index] === '(' || s[index] === ')') {
            index = pair[index];
            step = -step;
        } else {
            str.push(s[index]);
        }
        index += step;
    }
    return str.join('');
};

reverseParentheses("a(bcdefghijkl(mno)p)q");