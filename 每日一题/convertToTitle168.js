/**
 * https://leetcode-cn.com/problems/excel-sheet-column-title/
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let ans = [];
    while (columnNumber !== 0) {
        columnNumber--;
        let son = (columnNumber) % 26;
        ans.unshift(String.fromCharCode(son + 'A'.charCodeAt()));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return ans.join('');
};

// var convertToTitle = function(columnNumber) {
//     let ans = [];
//     while(columnNumber!==0){
//         columnNumber--;
//         let son = (columnNumber) %26;
//         ans.push(String.fromCharCode(son + 'A'.charCodeAt()));
//         columnNumber = Math.floor(columnNumber/26);
//     }
//     return ans.reverse().join('');
// };