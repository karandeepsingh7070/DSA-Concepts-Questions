// K Closest points to origin - leetcode 973
// BRUTE -
var kClosest = function(points, k) {
    let disCoard = []
    let ans = []

    for(let i = 0;i < points.length; i++) {
        let distance = Math.sqrt(Math.pow(points[i][0],2) +  Math.pow(points[i][1],2))
        disCoard.push([distance,points[i]])
    }
    disCoard.sort((a,b) => a[0] - b[0])
    
    for(let j = 0; j < k; j++) {
        if(disCoard[j]) {
            ans.push(disCoard[j][1])
        }
    }
    return ans
};

// Destruct Robots


class Pair {
    constructor(row, col, steps) {
         this.row = row;
         this.col = col;
         this.steps = steps;
     }
 }
 
 class CustomQueue {
     constructor() {
         this.items = []
     }
 
     enqueue(element) {
         return this.items.push(element)
     }
 
     dequeue() {
         return this.items.shift()
     }
 
     isEmpty() {
         return this.items.length === 0;
     }
     frontElm() {
         return this.items.length ? this.items[0] : null
     }
 }


 //Demolition Robot: Given a matrix with values 0 (trenches), 1 (flat), and 9 (obstacle) you have to find the minimum distance to reach 9 (obstacle). If not possible then return -1.
// The demolition robot must start at the top left corner of the matrix, which is always flat and can move on the block up, down, right, left. The demolition robot cannot enter 0 trenches and cannot leave the matrix.
// Sample Input :
// [1, 0, 0],
// [1, 0, 0],
// [1, 9, 1]]
// Sample Output :
// 3
 
 var destructRobots = function(obstacles) {
     
     let q = new CustomQueue()
     q.enqueue(new Pair(0,0,1))
     let n = obstacles.length
     let m = obstacles[0].length
 
     let isVisited = new Array(n).fill(0).map(() => new Array(m).fill(0))
 
     let dRow = [-1,0,1,0]
     let dCol = [0,1,0,-1]
     while(!q.isEmpty()) {
         let frontElm = q.frontElm()
         let row = frontElm.row
         let col = frontElm.col
         let steps = frontElm.steps
         q.dequeue()
         if(obstacles[row][col] == 9) return steps
         for(let k = 0; k< 4 ; k++) {
             let nRow = row + dRow[k]
             let nCol = col + dCol[k]
             if(nRow >= 0 && nRow < n && nCol >= 0 && nCol < m && obstacles[nRow][nCol] != 0 && !isVisited[nRow][nCol]) {
                 isVisited[nRow][nCol] = 1
                 q.enqueue(new Pair(nRow, nCol, steps + 1))
             }
         }
     }
     return -1
 }

 // Number of Islands

 class Solution {
    dfs(row,col,isVisited,grid) {
        isVisited[row][col] = 1
        
        let dRow = [-1,-1,0,1,1,1,0,-1]
        let dCol = [0,1,1,1,0,-1,-1,-1]
        
        for(let k = 0; k < 8; k++) {
            let nRow = row + dRow[k]
            let nCol = col + dCol[k]
            if(nRow >= 0 && nCol >= 0 && nRow < grid.length && nCol < grid[0].length && !isVisited[nRow][nCol] && grid[nRow][nCol] != 0) {
                this.dfs(nRow,nCol,isVisited,grid)
            }
        }
    }
    numIslands(grid) {
        let noOfIslands = 0
        let n = grid.length
        let m = grid[0].length
        let isVisited = new Array(n).fill(0).map(() => new Array(m).fill(0))
        for(let i = 0; i< n; i++) {
            for(let j = 0; j< m; j++) {
                if(!isVisited[i][j] && grid[i][j] != 0) {
                    noOfIslands++
                    this.dfs(i,j,isVisited,grid)
                }
            }
        }
        return noOfIslands
    }
}

// ultra BRUTE

var sortedSquares = function(nums) {
    let j = 1; 
    for(let k = 0; k < nums.length; k++) {
        let res = nums[k] * nums[k]
        nums[k] = res
    }
    for(let i = 0; i< nums.length; i++) {
        j = i + 1
        while(j < nums.length) {
            if(nums[i] >= nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
            j++
        }
    }
    return nums
};

// sort an array

var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0, right = n - 1;
    let index = n - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }

        index--;
    }

    return result;
};

// Move zeros

var moveZeroes = function(nums) {

    let nonZeroes = nums
    let index = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[index] = nums[i]
            index++
            }
    }

    for(let j = index; j< nums.length; j++) {
        nums[j] = 0
    }

    return nonZeroes
}

// Remove All Adjacent Duplicates in String II - 1209
class customStack {
    constructor() {
        this.items = []
    }
    
    push(element) {
       return this.items.push(element)
    }
    pop() {
       return this.items.pop();
    }
    peek() {
       return this.items.length ? this.items[this.items.length - 1] : null
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length;
    }
}
var removeDuplicates = function(s, k) {
    let stk = new customStack()
    for(let char of s) {
        if(!stk.isEmpty() && stk.peek()[0] === char) {
            stk.peek()[1]++
        }else {
            stk.push([char,1])
        }
        if(stk.peek()[1] === k) {
            stk.pop()
        }
    }

    let res = ""
    while(!stk.isEmpty()) {
        let [char,val] = stk.pop()
        res = char.repeat(val) + res
    }
    return res
}

// Longest Valid Parentheses - leetcode 32
var longestValidParentheses = function(s) {
    let lCnt = 0
    let rCnt = 0
    let maxCnt = 0
    let i = 0
    while(i < s.length) {
        if(s[i] === "(") {
            lCnt++
        }else rCnt++

        if(lCnt === rCnt) {
            maxCnt = Math.max(maxCnt, lCnt+rCnt)
        }

        if(lCnt < rCnt) {
            lCnt = 0
            rCnt = 0
        }
        i++
    }
    let j = s.length - 1
    lCnt = 0
    rCnt = 0

    while(j >= 0) {

        if(s[j] === "(") {
            lCnt++
        }else rCnt++
        
        if(lCnt === rCnt) {
            maxCnt = Math.max(maxCnt, lCnt+rCnt)
        }
        if(lCnt > rCnt) {
            lCnt = 0
            rCnt = 0
        }
        j--
    }
    return maxCnt
};

// Find peak element
var findPeakElement = function(nums) {

    let low = 0
    let high = nums.length - 1
    let ans = -1
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        
        if(mid >= 0 && mid < nums.length && nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid
        }

        if(nums[mid] > nums[mid - 1]) {
            low = mid + 1
        }else {
            high = mid -1
        }
    }
}

// Find Equilibrium
class Solution {
    findEquilibrium(arr) {
        let high = arr.length
        let leftSum = 0
        let totalSum = 0
        
        for(let j = 0; j < high; j++) {
            totalSum += arr[j]
        }
        
        for(let i = 0; i< high; i++) {
            totalSum -= arr[i] //right sum
            if(leftSum === totalSum) return i
            leftSum += arr[i]
        }
        return -1
    }
}

// leetcode 1343
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0
    let avgCnt = 0
    let j = 0
    let i = 0
    while(j < arr.length) {
        sum += arr[j]
        while(j - i + 1 === k) {
            if(Math.floor(sum/k) >= threshold) {
                avgCnt++
            }
            sum -= arr[i]
            i++
        }
        j++
    }
    return avgCnt
};

// count subarrays 
countSubarray(arr, k) {
       
    let sum = 0
    let preSumMap = new Map()
    let maxCnt = 0
    
    for(let i = 0; i< arr.length; i++) {
        sum += arr[i]
        
     //   if(sum == k) {
     //       maxCnt++
     //   }
        let rem = sum - k
        if(preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem)
            maxCnt += preSumMap.get(rem);
        }
        if(!preSumMap.has(sum)) preSumMap.set(sum,i)
    }
    return maxCnt
 }
// Max consecutive zweros with flip 
function conZeroe3(nums, k) {

    let j = 0
    let i = 0
    let maxLen = 0
    let flipCnt = 0

    while(j < nums.length) {
        if(nums[j] == 0) flipCnt++

        if(flipCnt > k) {
            if(nums[i] == 0) flipCnt--
            i++
        }
        if(flipCnt <= k) {
            maxLen = Math.max(maxLen,j - i + 1)
        }
        j++
    }
    return maxLen
}

// Maximum Units on a Truck leetcode - 1710
function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    let units = 0
    
    for(let i = 0; i< boxTypes.length; i++) {
        let boxesToTake = Math.min(boxTypes[i][0],truckSize)
        units += boxesToTake * boxTypes[i][1]
        truckSize -= boxesToTake

        if(truckSize == 0) break
    }

    return units
};
    
// Number of minimum platforms - intersection and sorting basis on time
class Solution {
    findPlatform(arr, dep) {
        arr.sort((a,b) => a - b)
        dep.sort((a,b) => a - b)
        let i = 0
        let j = 0
        let platformCnt = 0
        let cnt = 0
        
        while(i< arr.length) {
            if(arr[i] > dep[j]) { //departure
                cnt--
                j++
            }else {
                cnt++
                i++
            }
            platformCnt = Math.max(platformCnt,cnt)
        }
        return platformCnt
    }
}
// Reduced String
class CustomStack {
    constructor() {
        this.items = []
    }
    
    push(ele) {
        return this.items.push(ele)
    }
    pop() {
        return this.items.pop()
    }
    isEmpty() {
        return this.items.length === 0 
    }
    peek() {
        return this.items.length ? this.items[this.items.length - 1] : null 
    }
}

class Solution {
    Reduced_String(k,s){
        if (s.length === 0) return "";
        let stk = new CustomStack()
        let res = []
        let j = 0
        for(let char of s) {
            if(!stk.isEmpty() && stk.peek()[0] === char) {
                stk.peek()[1]++
            }else {
                stk.push([char,1])
            }
            if(stk.peek()[1] == k) {
                stk.pop()
            }
        }
        while(!stk.isEmpty()) {
            let [char, freq] = stk.pop()
            res.push(char.repeat(freq));
        }
        return res.reverse().join("")
    }
}

// Bitonic Point
class Solution {

    findMaximum(arr) {
        let maxEle = -1
        let low = 0
        let high = arr.length - 1
        
        while(low <= high) {
            let mid = Math.floor((low+high)/2)
            if(arr[mid] > arr[mid + 1]) {
                maxEle = arr[mid]
                high = mid - 1
            }else {
                low = mid+1
            }
        }
        return maxEle
    }
}

// Anagram together
class Solution {
    anagrams(arr) {
        let sortMap = {}
        let ans = []
        for(let i = 0; i< arr.length; i++) {
            let sortedChar = arr[i].split("").sort().join("")
            let charArr = sortMap[sortedChar] || []
                charArr.push(arr[i]);
                sortMap[sortedChar] = charArr
        }
        return Object.values(sortMap)
    }
}

// find max ones

class Solution {
    findMaxones(row) { //lower_bound
        let lowerBound = -1
        let low = 0
        let high = row.length - 1
        
        while(low <= high) {
            let mid = Math.floor((low+high)/2)
            if(row[mid] == 1) {
                lowerBound = mid
                high = mid - 1
            }else {
                low = mid + 1
            }
        }
        return lowerBound === -1 ? 0 : row.length - lowerBound;
    }
    rowWithMax1s(arr) {
        let maxOnes = 0
        let index = -1
        
        for(let i = 0; i < arr.length; i++) {
            let onesCnt = this. findMaxones(arr[i])
            if(onesCnt > maxOnes) {
                maxOnes = onesCnt
                index = i
            }
        }
    return index
    }
}

// isPalindrome LL
class Solution {

    reverseLL(head) {
        let prev = null
        let temp = head
        
        while(temp != null) {
            let front = temp.next
            temp.next = prev
            prev = temp
            temp = front
        }
        return prev
    }
    isPalindrome(head) {
        if(head == null || head.next == null) return true
        
        let slow = head
        let fast = head
        
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        
        // middle -> slow
        let reversedLL = this.reverseLL(slow.next)
        
        let firstHead = head
        let secondHead = reversedLL
        
        while(secondHead != null) {
        if(firstHead.data != secondHead.data) {
            this.reverseLL(reversedLL)
            return false
        }
            firstHead = firstHead.next
            secondHead = secondHead.next
        }
        return true
    }
}