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

// Fruit Into Baskets || Find length of the longest subarray containing atmost two distinct integers
class Solution {
    // Function to find the sum of minimum elements of all possible subarrays of fruits.
    totalElements(arr) {
        let maxLen = 0
        let l = 0
        let r = 0
        let fruitMap = {}
        
        while(r < arr.length) {
            fruitMap[arr[r]] = (fruitMap[arr[r]] || 0) + 1
            while (Object.keys(fruitMap).length > 2) {
                fruitMap[arr[l]] -= 1;
                if (fruitMap[arr[l]] === 0) {
                    delete fruitMap[arr[l]];
                }
                l++;
            }
            // if(Object.keys(fruitMap).length <= 2) {
                maxLen = Math.max(maxLen, r - l + 1)
                r++;
            // }
        }
        return maxLen
    }
}

// OPTIMIZE
class Solution {
    // Function to find the sum of minimum elements of all possible subarrays of fruits.
    totalElements(arr) {
        let maxLen = 0
        let l = 0
        let r = 0
        let fruitMap = {}
        
        while(r < arr.length) {
            fruitMap[arr[r]] = (fruitMap[arr[r]] || 0) + 1
            if(Object.keys(fruitMap).length > 2) {
                fruitMap[arr[l]] -= 1;
                if (fruitMap[arr[l]] === 0) {
                    delete fruitMap[arr[l]];
                }
                l++;
            }
            if(Object.keys(fruitMap).length <= 2) {
                maxLen = Math.max(maxLen, r - l + 1)
            }
            r++;
        }
        return maxLen
    }
}