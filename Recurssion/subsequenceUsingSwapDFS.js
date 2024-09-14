//swap
const swap = (arr,i,j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
const pS = (indx,ans,arr) =>{
    if (indx == arr.length) {
        let fs = []
        for(let i = 0; i< arr.length;i++) {
        fs.push(arr[i])
        }
        ans.push(fs)
        return 
    }
    for(let i = indx; i< arr.length; i++) {
        swap(arr,indx,i)
        pS(indx + 1,ans,arr)
        swap(arr,indx,i)
    }
    
}
const findPermutationSequence = (arr) => {
    let ans = []
    // let fs = []
    // let isVisited = []
    pS(0,ans,arr)
    return ans
}
console.log(findPermutationSequence([1,2,3]))