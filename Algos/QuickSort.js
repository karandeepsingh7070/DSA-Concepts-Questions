function quickSort(arr,l,h) {
    if (l < h) {
        let j = partitionAlgorithm(arr,l,h)
        quickSort(arr,l,j)
        quickSort(arr,j + 1,h)
    }
    return arr
}

function partitionAlgorithm(arr,l,h) {
    let pivot = arr[l]
    let i = l
    let j = h
    while (i < j) {

    do {
        i++
    }while(arr[i] <= pivot) //termination condition
     
     do {
        j--
    }while(arr[j] > pivot)
    
    if (i < j) {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    }
    } 
    let temp = arr[l]
    arr[l] = arr[j]
    arr[j] = temp
    return j //point where the pivot is replaced with and will be used to divide the array in two halfs
}



let arr = [10,16,8,12,15,6,3,9,5]
console.log(quickSort(arr,0,arr.length))