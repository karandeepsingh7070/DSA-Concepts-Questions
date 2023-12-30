// var gcdOfStrings = function(str1, str2) {
//     let haveGCD = str1 + str2 == str2 + str1
//     if (haveGCD) {
//         let gcd = findGCD(str1.length,str2.length)
//         let ans = str1.substring(0,gcd)
//         return ans
//     }else {
//         return ""
//     }
// };

// function findGCD(a,b) {
//     while(a % b != 0) {
//         let remainder = a % b
//         a = b
//         b = remainder
//     }
//     return b
// }