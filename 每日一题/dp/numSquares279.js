/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        var minn = Infinity;
        for (let j = 1; j * j <= i; j++) {
            minn = Math.min(minn, dp[i - j * j]);
            // minn 一直为0
        }
        dp[i] = 1 + minn;
        console.log(dp);
    }
    return dp[n];
};

var numSquares = function (n) {
    if (isPerfectSquare(n)) {
        return 1;
    }
    if (checkAnswer4(n)) {
        return 4;
    }
    for (let i = 1; i * i <= n; i++) {
        let j = n - i * i;
        if (isPerfectSquare(j)) {
            return 2;
        }
    }
    return 3;
}


const isPerfectSquare = (x) => {
    const y = Math.floor(Math.sqrt(x));
    return y * y === x;
}

const checkAnswer4 = (x) => {
    while (x % 4 === 0) {
        x /= 4;
    }
    return x % 8 === 7;
}

let n = 12;
console.log(numSquares(n));
