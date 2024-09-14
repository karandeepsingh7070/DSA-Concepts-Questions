//non repeating
const subSets = (indx,arr,fs,ans) => {
    ans.push(fs.slice())
    for(let i = indx; i< arr.length; i++) {
        if (i !== indx && arr[i] !== arr[i-1]) continue
        fs.push(arr[i])
        subSets(indx + 1,arr,fs,ans)
        // fs.pop()
        delete fs[fs.length]
    }
    return ans
}

const findSubSets = (arr) => {
    let ans = [] //carry all sequences
    let fs = []
    subSets(0,arr,fs,ans)
    return ans
}
console.log(findSubSets([2,5,3,7]))
//ans
[
    [],
    [ 2 ],
    [ 2, 5 ],
    [ 2, 5, 3 ],
    [ 2, 5, 3, 7 ],
    [ 2, 5, 3, 7, 5 ],
    [ 2, 5, 3, 7, 5, 2 ]
  ]