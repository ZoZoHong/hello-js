/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b);
    const N = citations.length;
    let i = N - 1, h = 0;
    while (i >= 0 && citations[i] > h) {
        h++;
        i--;
    }
    return h
};