/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    const map = new Map();
    for (const adjacentPair of adjacentPairs) {
        map.get(adjacentPair[0]) ? map.get(adjacentPair[0]).push(adjacentPair[1]) : map.set(adjacentPair[0], [adjacentPair[1]]);
    }
};