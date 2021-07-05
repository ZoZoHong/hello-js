/**
 * https://leetcode-cn.com/problems/number-of-atoms/
 * 原子的数量
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    // 有括号 经典利用 栈 解决
    // '(' 推入栈 ')' 弹出栈顶
    // 连续的数字= 字母之间 连续的字母= 大写+小写
    let i = 0;
    const n = formula.length;
    const stack = [new Map()];
    while (i < n) {
        const ch = formula[i];
        // 解析原子
        const parseAtom = () => {
            const sb = [];
            sb.push(formula[i++]); //扫描首字母
            while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
                sb.push(formula[i++]);
            }
            return sb.join(''); //转字符串
        }
        const parseNum = () => {
            if (i === n || isNaN(Number(formula[i]))) {
                return 1;
                // 不是数字
            }
            let num = 0;
            while (i < n && !isNaN(Number(formula[i]))) {
                num = num * 10 + formula[i++].charCodeAt() - '0'.charCodeAt();
            }
            return num;
        }

        if (ch === '(') {
            i++;
            stack.unshift(new Map());
            // 准备统计括号内的原子数量
            // 用shift 是最快的取到栈顶的方法
        } else if (ch === ')') {
            i++;
            const num = parseNum();
            const popMap = stack.shift();
            const topMap = stack[0];
            for (const [atom, v] of popMap.entries()) {
                topMap.set(atom, (topMap.get(atom) || 0) + v * num);
            }
        } else {
            const atom = parseAtom();
            const num = parseNum();
            const topMap = stack[0];
            topMap.set(atom, (topMap.get(atom) || 0) + num);
        }
    }
    let map = stack.pop();
    map = Array.from(map);
    map.sort();
    const sb = [];
    for (const [atom, count] of map) {
        sb.push(atom);
        if (count > 1) {
            sb.push(count);
        }
    }
    return sb.push('');
};