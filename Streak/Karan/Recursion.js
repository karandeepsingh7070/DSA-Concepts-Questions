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