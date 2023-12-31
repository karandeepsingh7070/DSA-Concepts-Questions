// var maxArea = function(height) {
//     let li = 0
//     let ri = height.length - 1
//     let res = 0
//     while (li < ri) {
//         let left = height[li]
//         let right = height[ri]
//         let length = Math.min(left,right)
//         let area = length * (ri - li)
//         res = Math.max(res,area)
//         if (left < right) {
//             li++
//         }else {
//             ri--
//         }
//     }
//     return res
// };