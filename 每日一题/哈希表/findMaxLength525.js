/**
 * 中等
 * 哈希表 前缀和 ,也可以用堆栈做, 类似数合法括号个数再 x 2
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const n = nums.length;

    const map = new Map();
    map.set(0, -1);
    let pre = 0, max = 0;
    let one = 0, zero = 0;
    for (let i = 0; i < n; i++) {
        pre += nums[i];
        // 1 : pre,  0: i + 1 - pre
        one = pre;
        zero = i + 1 - pre;
        // 如果存在哈希表则进行计算,否则加入
        if (map.has(one - zero)) {
            max = Math.max(max, i - map.get(one - zero));
        } else {
            map.set(one - zero, i);
        }


    }

    return max;
    // 思路: 键 为 1 的前缀和,值为  1 和 0 的个数相减, 当键和值相等,计算最大
    //  0 个数不需要记录i + 1 - pre 

    // 哈希表维护 因为这是个二进制数组,所以 当前长度 - 当前前缀和  =  0 的个数

};

const nums = [0, 1, 1, 0];
console.log(findMaxLength(nums));
