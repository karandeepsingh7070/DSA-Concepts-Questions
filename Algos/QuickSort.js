// function quickSort(arr,l,h) {
//     if (l < h) {
//         let j = partitionAlgorithm(arr,l,h)
//         quickSort(arr,l,j)
//         quickSort(arr,j + 1,h)
//     }
//     return arr
// }

// function partitionAlgorithm(arr,l,h) {
//     let pivot = arr[l]
//     let i = l
//     let j = h
//     while (i < j) {

//     do {
//         i++
//     }while(arr[i] <= pivot) //termination condition
     
//      do {
//         j--
//     }while(arr[j] > pivot)
    
//     if (i < j) {
//     let temp = arr[j]
//     arr[j] = arr[i]
//     arr[i] = temp
//     }
//     } 
//     let temp = arr[l]
//     arr[l] = arr[j]
//     arr[j] = temp
//     return j //point where the pivot is replaced with and will be used to divide the array in two halfs
// }



// let arr = [10,16,8,12,15,6,3,9,5]
// console.log(quickSort(arr,0,arr.length))

const qs = (arr,low,high) => {
    if (low < high) {
        let pP = partition(arr,low,high)
        let lArr = qs(arr,low, pP - 1)
        let rArr = qs(arr,pP + 1,high)
    }
    return arr
}

const partition = (arr,low,high) => {
    let i = low
    let j = high
    let pivot = arr[low]
    
    while (i < j) {
        while(arr[i] <= pivot && i <= high - 1) {
            i++
        }
        while(arr[j] > pivot && j >= low + 1) {
            j--
        }
        if (i < j) {
            swap(arr,i,j)
        }
    }
        swap(arr,j,low)
        return j
}
const swap = (arr,i1,i2) => {
    let temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
} 
let arr = [4,6,2,5,7,9,1,3]
console.log("solution",qs(arr,0,arr.length-1))