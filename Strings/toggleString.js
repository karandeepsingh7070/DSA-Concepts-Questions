const toggleCases = (str) => {
    // formula -> Lowercase = 'a' + upperCase - 'A'
    // formula -> uppercase = 'A' + lowerCase - 'a'
    
    for (let i = 0; i< str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            let upCase = 'A' + str[i] - 'a'
            // let subtr = str.substring(i,i + 1) 
            str[i] = upCase
        }else {
            let loCase = 'a' + str[i] - 'A'
            str[i] = loCase
        }
    }
    console.log(str)
}

toggleCases('kArAn')