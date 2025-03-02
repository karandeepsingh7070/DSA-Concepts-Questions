// #1 Count Good Numbers - leetcode 1922
// BRUTE
// class Solution {
//     public int countGoodNumbers(long n) {
//     long even = 5;
//     long prime = 4;
//      long tEven = 1;
//      long tOdd=1;
//     for(int i = 0; i < n; i++) {
       
//         if(i % 2 == 0) {
//           tEven= (tEven*even)% 1000000007;
//         }
//         else{
//            tOdd= (tOdd*prime)% 1000000007;
//         }
//     }
//        return (int) ((tEven * tOdd) % 1000000007);
//     }
// }

// #2

class Solution {
    countFac(n,f,i,result) {
        if(f > n) return result
        result.push(f)
        f = f * (i+1)
        this.countFac(n,f,i + 1,result)
        return result
        
        }
    factorialNumbers(n) {
        let result = this.countFac(n,1,1,[])
        return result
    }
}

// #3

class Solution {
    // Function to reverse the array.
    rArr(arr,i,j) {
        if(i >= j) return
        [arr[i],arr[j]] = [arr[j],arr[i]]
        this.rArr(arr,i + 1, j - 1)  
    }
    reverseArray(arr) {
        this.rArr(arr,0,arr.length - 1)
        return arr
    }
}

// #4 
var checkPalindrome = function(s,i) {
    if(i >= Math.floor(s.length/2)) return true
    if(s[i] != s[s.length - i - 1]) return false
    return checkPalindrome(s,i + 1)
}
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return checkPalindrome(s,0)
};

// #5
var findFibVal = function(n) {
    if(n <= 1) return n
    return findFibVal(n - 1) + findFibVal(n - 2)
}
var fib = function(n) {
    return findFibVal(n)
};

// #6 recursion ATOI

var findAtoi = function(sT,i,ans) {
    if(i >= sT.length || sT[i] < "0" || sT[i] > "9") return ans
    ans = ans*10 + parseInt(sT[i])
    return findAtoi(sT,i+1,ans)
}
var myAtoi = function(s) {
    s = s.trim(); // Remove leading and trailing whitespaces
    if (s.length === 0) return 0; // Edge case: empty string

    let sign = 1, i = 0;
    if (s[i] === "-" || s[i] === "+") {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    let ans = findAtoi(s, i, 0) * sign;

    // Clamp within 32-bit signed integer range
    if (ans > 2147483647) return 2147483647;
    if (ans < -2147483648) return -2147483648;
    
    return ans;
};

// #7 sort a stack

// class GfG {
    
//     public static void sortStack(Stack<Integer> s) {
//         if (s.isEmpty()) return;
//         int top = s.pop();
//         sortStack(s);
//         insertSortedElm(s,top);
//     }
//     public static void insertSortedElm(Stack<Integer> stack, int value) {
//         if(stack.isEmpty() ||  stack.peek() <= value) {
//             stack.push(value);
//             return;
//         }
//         int top = stack.pop();
//         insertSortedElm(stack,value);
//         stack.push(top);
//     }
//     public Stack<Integer> sort(Stack<Integer> s) { //main
//         sortStack(s);
//         return s;
//     }
// }

// #8 reverse a stack 

class Solution {
    //Function to reverse a string.
    insertAtBottom(stack,value) {
        if(stack.length === 0) {
            stack.push(value)
            return
        }
        let top = stack.pop()
        this.insertAtBottom(stack,value)
        stack.push(top)
    }
    reverseStack(s) {
        if(s.length === 0) return
        let top = s.pop();
        this.reverseStack(s)
        this.insertAtBottom(s,top)
    }
    reverse(St) {
        this.reverseStack(St)
        return St
    }
}

// Practice Ques - 
var printTargetSeq = function(ind,ds,arr,s,target,ansList) {
    if(ind >= arr.length) { // base case
        if(s <= target) {
            ansList.push(s)
        }
        return
    }
    // Pick
    s += arr[ind]
    ds.push(arr[ind])
    printTargetSeq(ind + 1,ds,arr,s,target,ansList)
    // Not Pick
    s -= arr[ind]
    ds.pop()
    printTargetSeq(ind + 1,ds,arr,s,target,ansList)
}
var numSubseq = function(nums, target) {
    if(!nums.length) return nums
    let ansList = [] // to return the ans
    printTargetSeq(0,[],nums,0,target,ansList)
    return ansList
};

//#9 Generate all Binary except consecutive 1's

// "" 
// ├── "0"
// │   ├── "00"
// │   │   ├── "000"
// │   │   ├── "001"
// │   ├── "01"
// │       ├── "010"
// │       ├── "011" ❌ (Not allowed)
// ├── "1"
//     ├── "10"
//         ├── "100"
//         ├── "101"
//     ├── "11" ❌ (Not allowed)

class Solution {
    //Function to generate all binary strings of n bits.
 printBinary(i, n, ds, ans) {
        if (i === n) {
            ans.push(ds);
            return;
        }

        // Always add "0"
        this.printBinary(i + 1, n, ds + "0", ans);

        // Add "1" only if the previous character is not "1"
        if (ds.length === 0 || ds.charAt(ds.length - 1) !== "1") {
            this.printBinary(i + 1, n, ds + "1", ans);
        }
    }
    generateBinaryStrings(n)
    {
        let ans = [];
        this.printBinary(0, n, "", ans); // Start with an empty string
        return ans;
    }
}

// #10 print all valid paranthese

var printValidParantheses = function(open,close,n,ds,ans) {
    if(open == n && close == n) {
        ans.push(ds)
        return
    }
    if(open < n) {
    printValidParantheses(open+1,close,n,ds + "(",ans)
    }
    if(close < open){
    printValidParantheses(open,close + 1,n,ds + ")",ans)
    }

}
var generateParenthesis = function(n) {
    let ans = []
    printValidParantheses(0,0,n,"",ans)
    return ans
};

// #11 Generate all sequences

var printS = function(i,ds,ans,nums){
    if(i == nums.length) {
        ans.push([...ds])
        return
    }
    ds.push(nums[i])
    printS(i + 1,ds,ans,nums)
    ds.pop()
    printS(i + 1,ds,ans,nums)
}
var subsets = function(nums) {
    let ans = []
    printS(0,[],ans,nums)
    return ans
};

// #12 Perfect Sum Problem
class Solution {
    calculateTarget(i,arr,target,sum) {
        if(i === arr.length) {
            return sum == target ? 1 : 0
        }
        sum += arr[i]
        let l = this.calculateTarget(i+1,arr,target,sum)
        sum -= arr[i]
        let r = this.calculateTarget(i+1,arr,target,sum)
        return l + r
    }
    perfectSum(arr, target) {
        return this.calculateTarget(0,arr,target,0)
    }
}

// #13 combination sum 1
var findTarget = function(arr,i,target,ds,ans) {
    if(i == arr.length) {
        if(target == 0) {
            ans.push([...ds])
        }
        return
    }
    if(arr[i] <= target) {
    ds.push(arr[i])
    findTarget(arr,i,target - arr[i],ds,ans)
    ds.pop()
    }
    findTarget(arr,i + 1,target,ds,ans)
}
var combinationSum = function(candidates, target) {
    let ans = []
    findTarget(candidates,0,target,[],ans)
    return ans
};

// combination sum 2 leetcode - 40

var findTarget = function(arr,ind,target,ds,ans) {
    if(target == 0) {
        ans.push([...ds])
        return
    }

    for(let i = ind; i < arr.length; i++) {
        if(i > ind && arr[i] == arr[i-1]) continue

        if(arr[i] > target) break;

        ds.push(arr[i])
        findTarget(arr,i + 1,target - arr[i],ds,ans)
        ds.pop()
    }
    
}
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b)
    let ans = []
    findTarget(candidates,0,target,[],ans)
    return ans
};

// subset 1 
class Solution {
    findSebSets(ind,sum,arr,ans) {
        if(ind == arr.length) {
            ans.push(sum)
            return
        }
        this.findSebSets(ind + 1,sum + arr[ind],arr,ans)
        this.findSebSets(ind + 1,sum,arr,ans)
    }
    subsetSums(arr) {
        let ans = []
        this.findSebSets(0,0,arr,ans)
        return ans
    }
}

// find all unique subsets Subsets II - leetcode 90

var findUniqueSubsets = function(nums,ind,list,ans) {
    ans.push([...list])
    for(let i = ind; i < nums.length; i++) {
        if(i > ind && nums[i] == nums[i - 1]) continue
        list.push(nums[i])
        findUniqueSubsets(nums,i + 1,list,ans)
        list.pop()
    }
}
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
    let ans = []
    findUniqueSubsets(nums,0,[],ans)
    return ans
};

// Combination 3 leetcode 216
var findCombination = function(ind,target,ds,ans,k) {
    if(ds.length == k) {
        if(target == 0) {
            ans.push([...ds])
        }
        return
    }

    for(let i = ind; i <=9; i++) {
        ds.push(i)
        findCombination(i + 1,target - i,ds,ans,k)
        ds.pop()
    }

}
var combinationSum3 = function(k, n) {
    let ans = []
    findCombination(1,n,[],ans,k)
    return ans
};

// Letter Combinations of a Phone Number - leetcode 17

var findCombination = function(ind,digits,str,ans,digMap) {
    if(ind >= digits.length) {
        ans.push(str)
        return
    }
    let chs = digMap[digits[ind]]

    for(let i = 0; i < chs.length; i++) {
        let ch = chs[i]
        findCombination(ind + 1,digits,str + ch,ans,digMap)
    }

}
var letterCombinations = function(digits) {
    if(!digits.length) return []
    let digMap = {
        2 : ['a','b','c'],
        3 : ['d','e','f'],
        4 : ['g','h','i'],
        5 : ['j','k','l'],
        6 : ['m','n','o'],
        7 : ['p','q','r','s'],
        8 : ['t','u','v'],
        9 : ['w','x','y','z'],
    }
    let ans = []
    findCombination(0,digits,"",ans,digMap)
    return ans
};

// Palindrome Partitioning leetcode - 131

var isPalindrome = function(str) {
    let i = 0
    let j = str.length - 1
    while(j > i) {
        if(str[i] != str[j]) return false
        i++
        j--
    }
    return true
}
var findPalindromes = function(ind,s,list,ans) {
    if(ind == s.length) {
        ans.push([...list])
        return
    }
    for(let i = ind; i < s.length; i++){
        if(isPalindrome(s.substring(ind,i + 1))) {
            list.push(s.substring(ind,i + 1))
            findPalindromes(i + 1,s,list,ans)
            list.pop()
        }
    }
}
var partition = function(s) {
    let ans = []
    findPalindromes(0,s,[],ans)
    return ans
};