var sortMe = new Array(6);
for (let i = 0; i < sortMe.length; i++) {
    sortMe[i] = (Math.random() * 2).toFixed(2);
}
// console.log(sortMe.sort((x, y) => x - y) + 'apisort');

function swap(arr, left, right) {
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
}

// 插入排序
function insertion(array) {
    if (!Array.isArray(array)) return 0;
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
            swap(array, j, j + 1);
        }
    }
    return array;
}
// console.log(insertion(sortMe) + 'insertion');
// 归并排序
function mergeSort(array) {
    if (!Array.isArray(array)) return 0;
    merge(array, 0, array.length - 1);
    return array;
}

function merge(array, left, right) {
    // 左右索引相同说明已经只有一个数
    if (left === right) return;
    let mid = parseInt(left + ((right - left) >> 1));
    merge(array, left, mid);
    merge(array, mid + 1, right);

    let help = [];
    let i = 0;
    let p1 = left;
    let p2 = mid + 1;
    while (p1 <= mid && p2 <= right) {
        help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
    }
    while (p1 <= mid) {
        help[i++] = array[p1++];
    }
    while (p2 <= right) {
        help[i++] = array[p2++];
    }
    for (let i = 0; i < help.length; i++) {
        array[left + i] = help[i];
    }
    return array;
}

console.log(mergeSort(sortMe) + '归并');


// 桶排序

function radixSort(arr, arrDomain, gropSize) {
    let data = [];
    for (let i = 0; i < arr.length; i++){
        data.push([]);
    }
    console.log(data);
    for (let i = 0; i < arr.length; i++) {
        data[Math.floor(parseInt(arr[i] / gropSize)) + 1].push(arr[i]);
    }
    for (let i = 0; i < data.length; i++){
        
    }

}
