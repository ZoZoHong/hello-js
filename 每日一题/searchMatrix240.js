
/**
 * 二分查找 坐标查找
 * 
 * row-- col++ 
 * 
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = matrix.length - 1, col = 0;
    while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] === target) {
            return true;
        }
        if (matrix[row][col] > target) {
            row--;
        }
        if (matrix[row][col] < target) {
            col++;
        }
    }
    return false;
};













