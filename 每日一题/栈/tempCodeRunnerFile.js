var reverseParentheses = function (s) {
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