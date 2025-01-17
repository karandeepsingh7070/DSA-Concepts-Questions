// #1 Square Root

class Solution {

    floorSqrt(n) {
        let low = 1
        let high = n
        let ans = 1
        while(low <= high) {
            let mid = Math.floor((low+high)/2)
            if(mid * mid <= n) {
                ans = mid
                low = low + 1
            }else {
                high = mid - 1
            }
        }
        return ans
        
        
        // let ans = 1
        // for(let i = 1; i * i <= n; i++) {
        //     ans = i
        // }
        // return ans
    }
}

// #2 Find nth root of m
//BRUTE
class Solution {
    findNthRoot(i,n) {
        // n how many times it needs to reiterate
        let ans = 1
        while(n > 0) {
            if(n % 2 == 1) { //odd
                ans = ans * i
                n = n  - 1
            }else {
                i = i * i
                n = n/2
            }
        }
        return ans
    }
    nthRoot(n, m) {
        let iterator = m
        while( iterator > 0) {
            let rootVal = this.findNthRoot(iterator,n)
            if(rootVal == m) {
                return iterator
            }
            iterator--
        }
        return -1
    }
}

// optimal
class Solution {
    findNthRoot(i,n) {
        // n how many times it needs to reiterate
        let ans = 1
        while(n > 0) {
            if(n % 2 == 1) { //odd
                ans = ans * i
                n = n  - 1
            }else {
                i = i * i
                n = n/2
            }
        }
        return ans
    }
    nthRoot(n, m) {
        let low = 1
        let high = m
        let ans = 1
        while(low <= high) {
            let mid = Math.floor((low+high)/2)
            let rootVal = this.findNthRoot(mid,n)
            if(rootVal == m) {
               return mid
            }else if(rootVal < m) {
                low = mid + 1
            }else high = mid - 1
        }
        return -1
    }
}

// #3 Koko Eating Bananas
// BRUTE
var findLargest = function(arr) {
    let l = arr[0]
    for(let i = 1; i < arr.length; i++) {
        l = Math.max(arr[i],l)
    }
    return l
}
var minEatingSpeed = function(piles, h) {
    let largestPile = findLargest(piles)
    let ans = 1
    for(let i = 1; i <= largestPile; i++) { // i = number of banana's eating
        let reqTime = 0
        for(let j = 0; j < piles.length; j++) {
            reqTime += Math.ceil(piles[j]/i) // bananas/hr's
        }
    if(reqTime <= h) {
        ans = i
        break
    }
    }
    return ans
};

// OPTIMAL
var findLargest = function(arr) {
    let l = arr[0]
    for(let i = 1; i < arr.length; i++) {
        l = Math.max(arr[i],l)
    }
    return l
}
var calRequiredTime = function(piles,perEatingBanana) {
    let requiredTime = 0
    for(let i = 0; i < piles.length; i++) {
        requiredTime += Math.ceil(piles[i]/perEatingBanana)
    }
    return requiredTime
}
var minEatingSpeed = function(piles, h) {
    let largestPile = findLargest(piles)
    let low = 1
    let high = largestPile
    let ans = largestPile
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        let requiredTime = calRequiredTime(piles,mid)
        if(requiredTime <= h) {
            ans = mid
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return ans
};