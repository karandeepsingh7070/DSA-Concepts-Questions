// Type: Subarray [continious part of subarray]
// - Find all subarray
let arr = [1,13,4,8,1]
for(let i= 0; i<arr.length; i++){
    let subarr = []
    for(let j=i; j<arr.length; j++){
        subarr.push(arr[j])
        console.log(subarr)
        // console.log(`[${arr[i]},${arr[j]}]`)
    }
}
// - Find all subarray whose sum is equal to k
const k = 13
arr = [1,13,4,8,1]
let count = 0
for(let i= 0; i<arr.length; i++){
    let subarr = []
    let sum = 0
    for(let j=i; j<arr.length; j++){
        subarr.push(arr[j])
        sum = sum + arr[j]
        if(sum === k){
            count++
            console.log(subarr)
        }
        // console.log(`[${arr[i]},${arr[j]}]`)
    }
}
console.log("count: ", count)