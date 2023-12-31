// var moveZeroes = function(nums) {
//     let arr = nums
//     let p = 0
//     partition(arr,p)
//     return arr
// };

// const partition = (arr, p) => {
//     let i = 0
//     let j = 0
//     while (i < arr.length) {
//         if (arr[i] == p) {
//            i++
//         }else {
//             swap(arr,i,j)
//             i++
//             j++
//         }
//     }
// }
// const swap = (arr,i,j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }