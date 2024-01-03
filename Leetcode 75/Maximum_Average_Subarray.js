var findMaxAverage = function(nums, k) {
    si = 0
    li = k
    if (nums.length < k) {
        return nums
    }
    let max = 0
    while (li < nums.length) {
        let avg = 0
        for (let i = si; i < li; i++) {
            avg += avg + nums[i]
        }
        if ((avg/k) > max) {
            max = avg
            avg = 0
        }
    }
    return max
};