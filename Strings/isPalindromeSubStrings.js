const isPalindromeFunction = (str) => {
    let i = 0
    let j = str.length - 1
    let isPalindrome = true
    while(i <= j) {
        if (str[i] == str[j]) {
            i++
            j--
        }else {
            isPalindrome = false
            break;
        }
    }
    return isPalindrome
}

const printAllPalindromeSubStrings = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let ss = str.substring(i,j)
            if (isPalindromeFunction(ss)) {
                console.log(ss)
            }
        }
    }
}
printAllPalindromeSubStrings('abccbc')