var frequencySort = function (s) {
//     let ans = [];
//     let res = [];
//     s = s.split('');
//     //哈希
//     const map = new Map();
//     for (let c of s) {
//         map.set(c, (map.get(c) || 0) + 1);
//     }
//     // 遍历排序
//     for (let [k, v] of map.entries()) {
//         ans.push(k);
//     }
//     ans.sort((a, b) => map.get(b) - map.get(a));
//     for (let c of ans) {
//         for (let i = 0; i < map.get(c); i++) {
//             res.push(c);
//         }
//     }
//     return res.join('');
// };

// let s = 'cccaaa';
// console.log(frequencySort(s));
