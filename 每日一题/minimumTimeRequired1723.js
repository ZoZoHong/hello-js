/**
 * 困难题
 * https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
    jobs.sort((a, b) => a - b);
    let left = jobs[0], right = jobs.reduce((a, b) => a + b);
    let workloads = new Array(k);
    while (left < right) {
        const mid = Math.floor((left + right) >> 1);
        if (check(jobs, workloads, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

/**
 * 
 * @param {*} jobs 
 * @param {*} workloads 
 * @param {*} k 
 * @param {*} limit 
 * @returns 
 */

function check (jobs, workloads, k, limit) {
    workloads.fill(0);
    return backtrack(jobs, workloads, 0, limit);
}

function backtrack (jobs, workloads, i, limit) {
    if (i >= jobs.length) return true;
    let time = jobs[i];
    for (let j = 0; j < workloads, length; j++) {
        if (workloads[j] + time <= limit) {
            workloads[j] += time;
            if (backtrack(jobs, workloads, i + 1, limit)) {
                return true;
            }
            workloads[j] -= time;
        }
        if (workloads[j] === 0 || workloads[j] + time === limit) {
            break
        }
    }
    return false;
}