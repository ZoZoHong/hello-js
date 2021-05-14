/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const Roman = new Map([
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]);
    // 按位读一个罗马数
    let ans = 0;
    // 可能有两位的罗马数
    for (let i = 0; i < s.length;) {
        if (i + 1 < s.length && Roman.get(s.substring(i, i + 2))) {
            ans += Roman.get(s.substring(i, i + 2));
            i += 2;
        } else {
            ans += Roman.get(s.substring(i, i + 1));
            i++;
        }
    }
    return ans;
};

console.log(romanToInt("LVIII"));