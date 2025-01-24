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

// #4 Minimum Number of Days to Make m Bouquets - leetcode 1482
var possibleNoOfBouqe = function(bloomDay,day,m,k) {
    let bouqeCnt = 0
    let cnt = 0
    for(let i = 0; i < bloomDay.length; i++) {
        if(bloomDay[i] <= day) { // check if on given day that perticular flower is bloomed or not.
            cnt++
        }else {
            let possibleBouqes = Math.floor(cnt/k)
            bouqeCnt += possibleBouqes
            cnt = 0
        }
    }
        bouqeCnt += Math.floor(cnt/k)
        return bouqeCnt
} 
var calMiniAndMaxi = function(bloomDay) {
    let data = {mini : bloomDay[0], maxi : -1}
    for(let i = 0; i< bloomDay.length; i++) {
        data.maxi = Math.max(bloomDay[i],data.maxi)
        data.mini = Math.min(bloomDay[i],data.mini)
    }
    return data
}
var minDays = function(bloomDay, m, k) { // m = no. of bouqe, k = no. of flowers in a bouqe
    let totalFlowers = bloomDay.length
    if(totalFlowers < m*k) return -1 // incase flowers are nor enough to complete all bouqe
    let low = calMiniAndMaxi(bloomDay).mini
    let high = calMiniAndMaxi(bloomDay).maxi
    let ans = high
    while(low <= high) {//range to check in
    let mid = Math.floor((low+high)/2)
    let bouqeCnt = possibleNoOfBouqe(bloomDay,mid,m,k)
    if(bouqeCnt >= m) {
        ans = mid
        high = mid - 1
    }else {
        low = mid + 1
    }
    }
    return ans
};

// #5 Find the Smallest Divisor Given a Threshold - leetcode 1283
var possibleDivisorCnt = function(nums,divisor) {
    let divisorCnt = 0
    for(let i = 0; i < nums.length; i++) {
        divisorCnt += Math.ceil(nums[i]/divisor)
    }
    return divisorCnt
}
var largestNum = function(nums) {
    let largest = -1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largest) {
            largest = nums[i]
        }
    }
    return largest
}
var smallestDivisor = function(nums, threshold) {
    if(!nums.length) return -1
    let low = 1 // or either can be the lowest in arr
    let high = largestNum(nums)
    let ans = high
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        let divisorCnt = possibleDivisorCnt(nums,mid)
        if(divisorCnt <= threshold) {
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
};

// #6 Capacity To Ship Packages Within D Days - leetcode 1011
var findTotalCapacity = function(nums) {
    let sum = 0
    for(let i = 0; i< nums.length;i++) {
        sum+=nums[i]
    }
    return sum
}
var calDaysCnt = function(weights,loadingCapacity) {
    let days = 1
    let load = 0
    let capacity = loadingCapacity
    for(let i = 0; i< weights.length; i++) {
        if(load + weights[i] > capacity) {
            days = days + 1
            load = weights[i]
        }else {
            load += weights[i]
        }
    }
    return days
}
var findMinCapacity = function(weights) {
    let maxi = weights[0]
    for(let i = 0; i < weights.length; i++) {
        maxi = Math.max(maxi,weights[i])
    }
    return maxi
}
var shipWithinDays = function(weights, days) {
    let high = findTotalCapacity(weights)
    let low = findMinCapacity(weights)
    let ans = high
    while(low<=high) {
        let mid = Math.floor((low+high)/2)
        let daysCnt = calDaysCnt(weights,mid)
        if(daysCnt <= days) {
            ans = mid
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return ans
};

// #7  Kth Missing Positive Number - leetcode 1539
var findKthPositive = function(arr, k) {
    let low = 0
    let high = arr.length - 1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        let missing = Math.floor(arr[mid] - (mid+1))
        if (missing < k) low = mid + 1
        else high = mid - 1
    }
    return low + k // high + 1 + k
};

// #8 Aggressive cows
class Solution {
    // Function to solve the problem.
    isCowsPLacementPossible = function(stalls,cowsDistane,cows) {
        let isPossible = true
        let cowCnt = cows - 1
        let previousCowCoardinate = stalls[0]
        for(let i = 1;i< stalls?.length;i++) {
            if(cowCnt && (stalls[i] - previousCowCoardinate >= cowsDistane)) {
                cowCnt--
                previousCowCoardinate = stalls[i]
            }
        }
        if (cowCnt > 0) return false
        return isPossible
    }
    aggressiveCows(stalls, k) {
        stalls.sort((a,b) => a - b)
        let n = stalls?.length - 1
        let low = 1
        let high = stalls[n]
        let ans = 0
        while(low <= high) {
            let mid = Math.floor((low+high)/2)
            if(this.isCowsPLacementPossible(stalls,mid,k)) {
                ans = mid
                low = mid + 1
            }else {
                high = mid - 1
            }
        }
        return ans
    }
}
// #9 