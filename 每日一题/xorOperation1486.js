/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
// var xorOperation = function (n, start) {
//     let nums = new Array(n).fill(0);
//     for (let i = 0; i < n; i++) {
//         nums[i] = start + 2 * i;
//     }
//     return nums.reduce((a, b) => (a ^ b));

// };

var xorOperation = function (n, start) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(start + 2 * i);
    }
    return nums.reduce((a, b) => (a ^ b));

};

console.log(xorOperation(5, 0));
