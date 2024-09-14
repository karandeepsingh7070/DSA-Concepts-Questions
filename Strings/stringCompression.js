const stringCompression1 = (str) => {
    let cStr = ""
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            cStr += str[i]
        }
}
return cStr
}
console.log(stringCompression1('aaabbcccef'))

const stringCompression2 = (str) => {
    let cStr = ""
    let counter = 1
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            if (counter != 1) {
            cStr = cStr + str[i] + counter
            counter = 1
            }else {
                cStr += str[i]
            }
        }else {
            counter++
        }
}
return cStr
}
console.log(stringCompression2('aaabbccceffff'))