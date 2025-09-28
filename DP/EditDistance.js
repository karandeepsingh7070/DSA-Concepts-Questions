var compare = function(w1,w2,i,j,memo) {

    if(i < 0) return j + 1
    if(j < 0) return i + 1
    if (memo[i][j] !== null) return memo[i][j];
    if(w1[i] === w2[j]) {
        return memo[i][j] = compare(w1, w2, i - 1, j - 1,memo)
    }else {
        return memo[i][j] = 1 + Math.min(compare(w1, w2, i, j - 1,memo), compare(w1, w2, i - 1, j,memo), compare(w1, w2, i - 1, j - 1,memo))
    }
}
var minDistance = function(word1, word2) {
    const memo = Array.from({ length: word1.length }, 
   () => new Array(word2.length).fill(null)
);
    let steps = compare(word1, word2, word1.length - 1, word2.length - 1,memo)
    return steps
};