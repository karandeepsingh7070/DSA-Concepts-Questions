const pS = (ans,isVisited,fs,arr) =>{
    if (fs.length == arr.length) {
        ans.push(fs.slice())
        return
    }
    for(let i = 0; i< arr.length; i++) {
        if (!isVisited[i]) {
            isVisited[i] = true
            fs.push(arr[i])
            pS(ans,isVisited,fs,arr)
            isVisited[i] = false
            fs.pop()
        }
    }
    
}
const findPermutationSequence = (arr) => {
    let ans = []
    let fs = []
    let isVisited = []
    pS(ans,isVisited,fs,arr)
    return ans
}
console.log(findPermutationSequence([1,2,3]))

// time comeplexity n! and deep copy of every data structure will take another n -> n! * n
// ans
[
    [ 1, 2, 3 ],
    [ 1, 3, 2 ],
    [ 2, 1, 3 ],
    [ 2, 3, 1 ],
    [ 3, 1, 2 ],
    [ 3, 2, 1 ]
  ]