// partitioning algorithm
// put i and j on 0th index
// run a loop until i is less than array.length
// if > p i++
// if <= p swap i and JSON, i++, j++


// const partitioningArray = (arr,p) => {
//     let i = 0
//     let j = 0
//     while(i< arr.length) {
//         if(arr[i] > p) {
//             i++
//         }else {
//             swap(arr, i, j)
//             i++
//             j++
//         }
//     }
//     return arr
// }
// const swap = (arr,i,j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// } 

// console.log(partitioningArray([7,9,4,8,3,6,2,1],5))