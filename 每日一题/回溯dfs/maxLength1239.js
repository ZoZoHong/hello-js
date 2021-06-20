/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let ans = 0;
    const masks = [];
    for (const s of arr) {
        let mask = 0;
        for (let i = 0; i < s.length; ++i) {
            const ch = s[i].charCodeAt() - 'a'.charCodeAt();
            if (((mask >> ch) & 1) !== 0) {
                mask = 0;
                break;
            }
            mask |= 1 << ch;
        }
        if (mask > 0) {
            masks.push(mask);
        }
    }

    const backtrack = (masks, pos, mask) => {
        if (pos === masks.length) {
            ans = Math.max(ans, mask.toString(2).split('0').join('').length);
            return;
        }
        if ((mask & masks[pos]) === 0) {
            backtrack(masks, pos + 1, mask | masks[pos]);
        }
        backtrack(masks, pos + 1, mask);

    }
    backtrack(masks, 0, 0);
    return ans;

};

console.log(maxLength(["un", "iq", "ue"]));