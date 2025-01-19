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