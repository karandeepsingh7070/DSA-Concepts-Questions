// leetcode - 3

var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let i = 0
    let j = 0
    let charObj = new Map()
    while(j < s.length) {
        if(charObj.has(s[j])) {
            if(charObj.get(s[j]) >= i) {
            i = charObj.get(s[j]) + 1
            }
        }
        charObj.set(s[j], j)
        maxLen = Math.max(maxLen,(j - i + 1))
        j++
    }
    return maxLen
};

// Max Consecutive Ones III - leetcode 1004 
var longestOnes = function(nums, k) {
    let maxLen = 0
    let zCnt = 0
    let l = 0
    let r = 0

    while(r < nums.length) {
        if(nums[r] == 0) zCnt++
        while(zCnt > k) {
            if(nums[l] == 0) zCnt--
            l++
        }
        maxLen = Math.max(maxLen,r - l + 1)
        r++
    }
    return maxLen
};

// OPTIMIZED to o(N)

var longestOnes = function(nums, k) {
    let maxLen = 0
    let zCnt = 0
    let l = 0
    let r = 0

    while(r < nums.length) {
        if(nums[r] == 0) zCnt++
        if(zCnt > k) {
            if(nums[l] === 0) zCnt--
            l++
        }
        if(zCnt <= k) {
            maxLen = Math.max(maxLen, r - l + 1)
        }
        r++
    }
    return maxLen
};