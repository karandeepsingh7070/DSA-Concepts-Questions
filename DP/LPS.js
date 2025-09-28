var compare = function(s,r,i,j,memo) {
    if(i < 0 || j < 0) return 0
    if(memo[i][j] !== null) return memo[i][j]
    if(s[i] == r[j]) return memo[i][j] = 1 + compare(s,r,i - 1, j - 1,memo)
    else {
    return memo[i][j] = Math.max(compare(s,r,i, j - 1,memo), compare(s,r,i - 1, j,memo))
    }
}
var longestPalindromeSubseq = function(s) {
    const revS = s.split('').reverse().join('');
    const memo = Array.from({ length: s.length }, () =>
  new Array(s.length).fill(null)
);
    let length = compare(s,revS,s.length - 1, revS.length - 1,memo)
    return length
};