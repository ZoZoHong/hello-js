/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    // 枚举时分
    let ans = [];

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (i.toString(2).split('0').join('').length + j.toString(2).split('0').join('').length === turnedOn) {
                ans.push(i + ':' + (j < 10 ? '0' + j : j));
            }
        }
    }
    return ans;
};