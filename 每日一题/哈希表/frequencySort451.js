/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
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


// 参考昨天的计数排序 => 桶排序
var frequencySort = function (s) {
    const map = new Map();
    let maxfreq = 0;

    for (const ch of s) {
        const frequency = (map.get(ch) || 0) + 1;
        map.set(ch, frequency);
        maxfreq = Math.max(maxfreq, frequency);
    }
    const buckets = new Array(maxfreq + 1).fill(0).map(() => new Array());
    for (const [ch, num] of map.entries()) {
        buckets[num].push(ch);
    }
    const ans = [];
    for (let i = maxfreq; i > 0; i--) {
        const bucket = buckets[i];
        for (const ch of bucket) {
            for (k = 0; k < i; k++) {
                ans.push(ch);
            }
        }
    }
    return ans.join('');
}

let s = 'cccaaa';
console.log(frequencySort(s));

// 利用api最快的方法

const frequencySort = s => {
    let res = '';
    const map = new Map();
    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    const mapSort = new Map([...map].sort((a, b) => b[1] - a[1]));
    mapSort.forEach((value, key) => {
        res += key.repeat(value);
    })
    return res;
}