/**
 * 
 * 深度优先搜索
 * 找出所有可能
 * 由于ip地址的特性 0~255.0~255.0~255.0~255
 * 分为四步,4块,块内分为3步,3位 再判断大小 0<x<255 ,不能0开头
 * 执行完一步,push然后过滤掉已经执行过的部分 
 * 
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = [];
    // 剪枝
    if (s.length < 4 || s.length > 12) {
        return res;
    }

    const dfs = (s, sub, index) => {
        if (s.length === 0 && index === 4) res.push(sub.slice(1));
        if (s.length === 0 || index === 4) return;
        // 这里的回溯 分三层 一位的 两位的 三位的 
        dfs(s.slice(1), `${sub}.${s.slice(0, 1)}`, index + 1);
        if (s[0] !== '0' && s.length > 1) {
            dfs(s.slice(2), `${sub}.${s.slice(0, 2)}`, index + 1);
            if (s.length > 2 && parseInt(s.slice(0, 3)) <= 255) {
                dfs(s.slice(3), `${sub}.${s.slice(0, 3)}`, index + 1);
            }
        }
    }
    dfs(s, '', 0);
    return res;
};


var restoreIpAddresses = function (s) {
    const res = [];
    if (s.length < 4 || s.length > 12) {
        return res;
    }
    // dfs
    const dfs = (subRes, start) => {
        if (subRes.length === 4 && start === s.length) {
            res.push(subRes.join('.'));
            return;
        }
        if (subRes.length === 4 && start < s.length) return;
        for (let len = 1; len <= 3; len++) {
            // 这里指推入的长度
            // if (start + len - 1 >= s.length) return; 不会超的
            // 去掉0开头的
            if (len != 1 && s[start] === '0') return;
            const str = s.substring(start, start + len);
            if (len === 3 && str > 255) return;

            subRes.push(str);
            dfs(subRes, start + len);
            subRes.pop();
        }
    };

    // 入口
    dfs([], 0);
    return res;
}