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