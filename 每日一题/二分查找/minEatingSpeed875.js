/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// https://leetcode-cn.com/problems/koko-eating-bananas/

// 自写
var minEatingSpeed = function (piles, h) {
    // 喜欢慢慢吃
    let left = 1,
        right = Math.max(...piles);
    const n = piles.length;
    if (n === h) {
        return right;
    }
    while (left < right) {
        // 二分查找
        const mid = parseInt(left + ((right - left) >> 1));
        // 需要几个小时 need 
        // cur 当前吃了多少
        let need = 0, cur = 0, i = 0;
        // canEat
        while (i < n) {
            // 吃不完怎么办 , 下个小时接着吃 ,所以遍历有手动前进
            need += Math.ceil(piles[i] / mid);
            i++;
        }
        if (need <= h) {
            // 吃快了
            right = mid;
        } else {
            // 吃慢了
            left = mid + 1;
        }
    }
    return right;
};

// 参考 最慢进食速度
var minEatingSpeed = function (piles, h) {
    let left = 1,
        right = Math.max(...piles);
    const canEat = (piles, speed, h) => {
        let need = 0;
        for (let pile of piles) {
            need += Math.ceil(pile / speed);
        }
        return need <= h;
    }
    while (left < right) {
        const mid = parseInt(left + ((right - left) >> 1));
        if (canEat(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}