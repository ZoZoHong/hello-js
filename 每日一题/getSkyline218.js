/**
 * https://leetcode-cn.com/problems/the-skyline-problem/ 困难题
 * @param {number[][]} buildings
 * @return {number[][]}
 */

var getSkyline = function (buildings) {
    if (buildings.length === 0) return [];
    return merge(buildings, 0, buildings.length - 1);
}

const merge = (buildings, start, end) => {
    const res = []
    if (start === end) {
        res.push([buildings[start][0], buildings[start][2]]);
        res.push([buildings[start][1], 0]);
        return res;
    }
    let mid = start + ((end - start) >> 1);
    const skyline1 = merge(buildings, start, mid);
    const skyline2 = merge(buildings, mid + 1, end);
    let h1 = 0, h2 = 0, i = 0, j = 0;
    while (i < skyline1.length || j < skyline2.length) {
        let x1 = (i < skyline1.length) ? skyline1[i][0] : Number.MAX_SAFE_INTEGER;
        let x2 = (j < skyline2.length) ? skyline2[j][0] : Number.MAX_SAFE_INTEGER;
        let x = 0;
        if (x1 < x2) {
            h1 = skyline1[i][1];
            x = x1;
            i++;
        }
        else if (x1 > x2) {
            h2 = skyline2[j][1];
            x = x2;
            j++;
        } else {
            h1 = skyline1[i][1];
            h2 = skyline2[j][1];
            x = x1;
            i++;
            j++;
        }
        let height = Math.max(h1, h2);
        if (res.length === 0 || height !== res[res.length - 1][1]) {
            res.push([x, height])
        }
    }
    return res;
}