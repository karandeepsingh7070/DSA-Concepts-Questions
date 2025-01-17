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