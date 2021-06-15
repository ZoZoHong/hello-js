/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    const n = arr.length;
    let left = 0, right = n - 1;
    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

var peakIndexInMountainArray = function (arr) {
    const n = arr.length;
    let left = 1, right = n - 1;
    while (left < right) {
        const mid = left + ((right - left) >> 1);
        if (arr[mid - 1] > arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right - 1;
};

