// var isSubsequence = function(s, t) {
//     let i = 0
//     let j = 0
//     while (j < t.length) {
//         if (i == s.length) {
//             return true
//         }else {
//             if (s.charAt(i) == t.charAt(j)) {
//                 i++
//                 j++
//             }else {
//                 j++
//             }
//         }
//     }
//     return i == s.length
// };

// var isSubsequence = function(s, t) {
//     if (s.length > t.length) return false
//   let sequence = 0
//   for (let i = 0; i < t.length; i++) {
//       if (s[sequence] == t[i]) {
//          sequence++ 
//       }
//   }
//   return sequence == s.length
// };