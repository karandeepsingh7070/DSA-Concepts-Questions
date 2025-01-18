// #1 Largest element
function largest(arr) {
    let l = arr[0]
    for(let i = 0; i < arr.length; i++) {
        l = Math.max(l,arr[i])
    }
    return l
}

// #2 second Largest
function getSecondLargest(arr) {
    let l = arr[0]
    let sL = -1
    for(let i = 0; i< arr.length;i++) {
        if(arr[i] > l) {
            sL = l
            l = arr[i]
        }else if(arr[i] > sL && arr[i] != l) {
            sL = arr[i]
        }
    }
        return sL
}

// #3 Remove Duplicates
var removeDuplicates = function(nums) {
    let sSet = new Set()
    for(let i = 0; i< nums.length; i++) {
        sSet.add(nums[i])
    }
    let k = 0
    sSet.forEach((val) => {
        nums[k] = val
        k++
    })
    return sSet.size
};

// #4 Rotate By K Places
// BRUTE

var rotate = function(nums, k) {
    k = k % nums.length
    if(k < 0) k = k + nums.length
    let tempEle = []
    for(let i = 0; i <= k; i++) {
        tempEle[i] = nums[i]
    }
    for(let i = k + 1; i < nums.length; i++) {
        nums[i - k] = nums[i] // i = 2, d = 2 i.e it'll start from 0 index
    }
    for(let i = nums.length - k; i < nums.length;i++) {
        nums[i] = tempEle[i - (nums.length  - k)]
    }
}

// OPTIMAL
var rotate = function(nums, k) {
    k = k % nums.length
    if(k < 0) k = k + nums.length
    let l = nums.length
    reverseArr(nums,0,l - k - 1)
    reverseArr(nums,l - k,l - 1)
    reverseArr(nums,0,l - 1)
}

// #5 Move Zeroes
var moveZeroes = function(nums) {
    let i = -1 // should be on zero el
    for(let k = 0; k < nums.length; k++) {
        if(nums[k] === 0) {
            i = k
            break;
        }
    }
    for(let j = i + 1; j < nums.length; j++) { // j should be on non zero el
        if(nums[j] != 0 && nums[i] == 0) {
            //swap
            [nums[j],nums[i]] = [nums[i],nums[j]]
            i++
        }
    }
}

// #6 Find Union
class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        let unionArr = []
        let i = 0
        let j = 0
        while(i < a.length && j < b.length) {
            if(a[i] <= b[j]) {
                if(unionArr.length === 0 || unionArr[unionArr.length - 1] != a[i]) {
                unionArr.push(a[i])
                }
                i++
            }else {
                if(unionArr.length === 0 || unionArr[unionArr.length - 1] != b[j]) {
                unionArr.push(b[j])
                }
                j++
            }
        }
            while(i < a.length) {
                if(unionArr.length === 0 || unionArr[unionArr.length - 1] != a[i]) {
                unionArr.push(a[i])
                }
                i++
            }
            while(j < b.length) {
                if(unionArr.length === 0 || unionArr[unionArr.length - 1] != b[j]) {
                unionArr.push(b[j])
                }
                j++
            }
        
        return unionArr
    }
}

// #7 Missing Number
//BRUTE
var missingNumber = function(nums) {
    let totalSum = 0
    let originalSum = 0
    for(let i = 0; i <= nums.length; i++) {
        totalSum += i
        if (i < nums.length) {
        originalSum = originalSum + nums[i]
    }
    }
    return totalSum - originalSum
}
//OPTIMAL
var missingNumber = function(nums) {
    let xorVal1 = 0 // totalSum
    let xorVal2 = 0 //originalSUm

    for(let i = 0; i<= nums.length; i++) {
        xorVal1 = xorVal1^i
        if(i < nums.length){
        xorVal2 = xorVal2^nums[i]
        }
    }
    return xorVal1^xorVal2
}

// #8 Max Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] == 1) {
            cnt++
            max = Math.max(cnt,max)
        }else {
            cnt = 0
        }
    }
        return max
}

// #9 Single Element
var singleNumber = function(nums) {
    let singleEl = 0
    for(let i = 0; i< nums.length; i++) {
         singleEl = singleEl^nums[i]
    }
    return singleEl
}

// #10 Longest Subarray with Sum K
//OPTIMAL for +ve's
class Solution {
    longestSubarray(arr, k) {
        let i = 0 //left
        let j = 0 //right
        let maxCnt = 0
        let sum = 0
        while(j < arr.length) {
            while(i <= j && sum > k) {
                sum -= arr[i]
                i++
            }
            if(sum == k) {
                maxCnt = Math.max(maxCnt,j - i + 1)
            }
            sum += arr[j]
            j++
        }
        return maxCnt
    }
}