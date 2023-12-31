// const partitioningArray = (arr,p,lo,hi) => {
//     let i = lo
//     let j = hi
//     while(i <= hi) {
//         if(arr[i] > p) {
//             i++
//         }else {
//             swap(arr, i, j)
//             i++
//             j++
//         }
//     }
//     return j - 1 //pivot index
// }

// const getQuickSortedArray = (arr,lo,hi) => {
//     if (lo > hi) return
//     let p = arr[hi]
//     let pIndex = partitioningArray(arr,arr[p],lo,hi)
//     getQuickSortedArray(arr,lo,pIndex - 1)
//     getQuickSortedArray(arr,pIndex + 1,hi)
// }
// const swap = (arr,i,j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// } 

// let arr = [7,9,4,8,3,6,2,1]

// console.log(getQuickSortedArray(arr,0, arr.length - 1))