const Cs = (i,arr,target,ans,fs) => {
    if(i == arr.length) {
        if (target == 0) {
            ans.push(fs)
        }
        return
    }
    // for accepting the element
    if (arr[i] <= target) {
        fs.push(arr[i])
        Cs(i,arr,target - arr[i],ans,fs)
        let res = fs.pop()
    }
    Cs(i + 1,arr,target,ans,fs)
}

const findCombination = () => {
    let arr = [2,3,6,7]
    let fs = []
    let ans = []
    let target = 7
    Cs(0,arr,target,ans,fs)
    return ans
}
console.log(findCombination())