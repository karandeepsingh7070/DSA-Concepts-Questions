var compare = function(t1,t2,i,j,memo) {
    if(i < 0 || j < 0) return 0
    if (memo[i][j] !== null) return memo[i][j];
    if(t1[i] === t2[j]) {
        return memo[i][j] = 1 + compare(t1,t2,i - 1,j - 1,memo)
    }else  {
        return memo[i][j] = Math.max(compare(t1,t2,i,j - 1,memo), compare(t1,t2,i - 1, j,memo))
    }
}
var longestCommonSubsequence = function(text1, text2) {
    let memo = Array.from({length: text1.length}, () => new Array(text2.length).fill(null))
    let steps = compare(text1,text2,text1.length - 1,text2.length - 1,memo)
    return steps
};