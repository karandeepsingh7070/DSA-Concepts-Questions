//merge sort using recurssion
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let rightArr = arr.splice(mid)
    let leftArr = arr.splice(0,mid)
    // console.log(leftArr, rightArr)
    let leftSortedArr = mergeSort(leftArr)
    let rightSortedArr = mergeSort(rightArr)
    return merge(leftSortedArr,rightSortedArr)
}

function merge(lA,rA) {
    let sortedArr = []
    while(lA.length && rA.length){
        if (lA[0] <= rA[0]) {
            sortedArr.push(lA.shift())
        }else {
               sortedArr.push(rA.shift())
        }
    }
    sortedArr = [...sortedArr, ...lA,...rA]
    return sortedArr
}



let arr = [4,3,6,8,5,2,7,9]
console.log(mergeSort(arr))