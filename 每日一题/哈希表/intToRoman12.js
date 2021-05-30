/**
 * 1000 900 500 400 100 90 50 40 10 9  5  4  1
 * M    CM  D   CD  C   XC L  XL X  IX V  IV I      
 * 
 * @param {number} num
 * @return {string}
 */


var intToRoman = function (num) {
    // 哈希表
    const Roman = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);
    var ans = [];

    for (const [key, value] of Roman) {
        while (num >= key) {
            num -= key;
            ans.push(value);
        }
        if (num === 0) {
            break;
        }
    }
    return ans.join('');
};

console.log(intToRoman(1994));