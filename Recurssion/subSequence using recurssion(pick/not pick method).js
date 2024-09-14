// pick not pick recureesion pattern subsets1

const sS = (arr,i,sum,ans) => {
    if (i == arr.length) {
        ans.push(sum.slice())
        return 
    }
    sS(arr,i + 1,sum + arr[i],ans)
    sS(arr,i + 1,sum,ans)
}

const findSubSequences = (arr,sum=0) => {
    let ans = []
    sS(arr,0,sum,ans)
    return ans
}
console.log(findSubSequences([3,2,1],0))