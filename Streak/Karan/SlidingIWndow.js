// leetcode - 3

var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let i = 0
    let j = 0
    let charObj = new Map()
    while(j < s.length) {
        if(charObj.has(s[j])) {
            if(charObj.get(s[j]) >= i) {
            i = charObj.get(s[j]) + 1
            }
        }
        charObj.set(s[j], j)
        maxLen = Math.max(maxLen,(j - i + 1))
        j++
    }
    return maxLen
};