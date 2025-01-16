// #1 Largest element
// Brute: Sort >> arr[n-1] | O(NlogN)
// Optimal | O(N)
let largest = (arr) => {
    let largest = arr[0]
    arr.forEach(ele => {
        if(largest < ele) largest = ele
    })
    return largest
}

// #2 Second Largest without sorting
// Brute: Sort >> loop from arr[n-2] till arr[i] != largest | O(NlogN + N) 
// Better: Loop for largest >> Loop for Secondlargest till arr[i] > secondLargest && arr[i] != largest | O(2N)
// Optimal | O(N)
function getSecondLargest(arr) {
    let largest = arr[0]
    let slargest = -1
    for(let i=1; i<=arr.length-1; i++){
        if(arr[i] > largest){
            slargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > slargest){
            slargest = arr[i]  
        }
    }
    return slargest
}

// #3 Check if the array is sorted | O(N)
function isSorted(n, a) {
    let isSorted = 1
    for (let i = 0; i < n - 1; i++){
        if (a[i] > a[i + 1]) {
            isSorted = 0 
        }
    }
    return isSorted
}

// #4 Remove duplicates from Sorted array
var removeDuplicates = function(arr) {
    let i = 0
	for (let j=1; j<=arr.length; j++){
		if(arr[i] != arr[j]) {
            arr[i+1] = arr[j]
            i++
        }
	}
    return i+1
};

// #5 Left Rotate an array by one place | O(N)
function rotate(nums) {
    let temp = nums[0]
    for(let i=1; i<=nums.length-1; i++){
        nums[i-1] = nums[i]
    }
    nums[nums.length-1] = temp
};


// #6 Left rotate an array by D places
var rotate = function(nums, k) {
    const len = nums.length-1
    // decide rotation
    const rotation = k % len
    // save in temp
    const temp = []
    for(let i=1; i<=k-1; i++){
        temp[i] = nums[i]
    }
    // shifting
    for(i=k; i<=len; i++){
        nums[i-k] = nums[k]
    }
    // put back temp
    for(i=len-k; i<=len; i++){
        nums[i] = temp[i-(len-k)]
    }
};