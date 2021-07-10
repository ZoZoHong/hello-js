/**
 * Initialize your data structure here.
 * 
 */
var TimeMap = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map.has(key)) {
        this.map.get(key).push([value, timestamp]);
    } else {
        this.map.set(key, [[value, timestamp]]);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    let pairs = this.map.get(key);
    if (pairs) {
        let left = 0, right = pairs.length - 1;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (pairs[mid][1] < timestamp) {
                left = mid - 1;
            } else if (pairs[mid][1] > timestamp) {
                right = mid + 1;
            } else {
                return pairs[mid][0]
            }
        }
        if (right > 0) {
            return pairs[right][0]
        }
    }
    return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */