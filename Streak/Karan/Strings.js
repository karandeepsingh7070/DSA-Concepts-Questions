// #1 Remove Outermost Parentheses - leetcode 1021
var removeOuterParentheses = function(s) {
    let pCnt = 0
    let ans = ""
    for(let i = 0; i< s.length; i++){
        if(s[i] == "(") {
             if(pCnt != 0) {
                ans += s[i]
            }
            pCnt++
        }else {
            pCnt--
            if(pCnt != 0) {
                ans += s[i]
            }
        }
    }
    return ans
};

// #2 Reverse Words in a String - leetcode 151
// var reverseStr = function(str) {
// strings are immutable, so doing this will not work, individual value cannot be updated
//     let i = 0
//     let j = str.length
//     while(i < j) {
//         let temp = str[i]
//         str[i] = str[j]
//         str[j] = temp
//         i++
//         j--
//     }
//     return str
// }
var reverseStr = function(str) {
    let revesedStr = ""
    for(let i = str.length - 1; i >= 0; i--) {
        revesedStr+= str[i]
    }
    return revesedStr
}
var reverseWords = function(s) {
    let rStr = reverseStr(s)
    let ans = ""
    // figure out each word
    for(let i = 0; i < rStr.length; i++) {
    let word = ""
    while(i < rStr.length && rStr[i] != " ") {
            word += rStr[i]
            i++
    }
    let rWord = reverseStr(word)
    if(word.length > 0) {
        ans = ans + " " + rWord
    }
    }
    return ans.substr(1)
};

// #3 Largest Odd Number in String - leetcode 1903
var largestOddNumber = function(num) {
    let oddNum = num
    for(let i = num.length - 1;i >=0; i--) {
        let oncePlace = parseInt(num[i],10)
        if(oncePlace % 2 !=0) return oddNum
        oddNum = oddNum.substring(0,i)
    }
    return ""
};

// #4 
// BRUTE

var longestCommonPrefix = function(strs) {
    let res = ""
    for(let i = 0; i < strs[0].length; i++) {
        for(const str of strs) {
            if(str.length == i || str[i] !== strs[0][i]) return res
        }
        res += strs[0][i]
    }
    return res
};

// OPTIMAL
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ""
    strs.sort()
    let first = strs[0]
    let last = strs[strs.length - 1]
    let res = ""
    for(let i = 0; i < strs[0].length;i++) {
        if(first[i] == last[i]) {
            res += first[i]
        }else break
    }
    return res
};