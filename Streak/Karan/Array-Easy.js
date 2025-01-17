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