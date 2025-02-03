// #1 Count Good Numbers - leetcode 1922
// BRUTE
class Solution {
    public int countGoodNumbers(long n) {
    long even = 5;
    long prime = 4;
     long tEven = 1;
     long tOdd=1;
    for(int i = 0; i < n; i++) {
       
        if(i % 2 == 0) {
          tEven= (tEven*even)% 1000000007;
        }
        else{
           tOdd= (tOdd*prime)% 1000000007;
        }
    }
       return (int) ((tEven * tOdd) % 1000000007);
    }
}

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

class GfG {
    
    public static void sortStack(Stack<Integer> s) {
        if (s.isEmpty()) return;
        int top = s.pop();
        sortStack(s);
        insertSortedElm(s,top);
    }
    public static void insertSortedElm(Stack<Integer> stack, int value) {
        if(stack.isEmpty() ||  stack.peek() <= value) {
            stack.push(value);
            return;
        }
        int top = stack.pop();
        insertSortedElm(stack,value);
        stack.push(top);
    }
    public Stack<Integer> sort(Stack<Integer> s) { //main
        sortStack(s);
        return s;
    }
}