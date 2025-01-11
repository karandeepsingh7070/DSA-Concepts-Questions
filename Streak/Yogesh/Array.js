// #1 Largest element
//Brute
let largest = (arr) => {
    let largest = arr?.[0]
    arr?.forEach(ele => {
        if(largest < ele) largest = ele
    })
    return largest
}