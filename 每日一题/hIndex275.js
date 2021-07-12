/**
 * @param {number[]} citations
 * @return {number}
 */


var hIndex = function (citations) {
    const N = citations.length
    let left = 0, right = N - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (citations[mid] >= N - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return N - left;
};

var test = [0, 1, 3, 5, 6]
console.log(hIndex(test));