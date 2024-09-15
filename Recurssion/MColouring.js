let N = 4
let M = 3
let E = 5
let graph = [
  [ false, true, true, true ],
  [ true, false, true, false ],
  [ true, true, false, true ],
  [ true, false, true, false ]
]
const isSafe = (node,G,char,color) => {
    for(let i = 0 ; i < G.length; i++) {
        if (i !== node && G[i][node] && color[i] == char) {
            // if current node is not equals to i, G[i][node] adjecnts nodes are true and for that i color is equal to the character i.e the 1 colour out of M
            return false
        }
    }
    return true
}
const solve = (node,n,G,M,color) => {
    if (node == n) {
        return true
    }
    for(let i = 1; i <= M; i++) {
        if (isSafe(node,G,i,color)) {
            color[node] = M
            if (solve(node + 1,n,G,M,color)) return true
             color[node] = 0
        }
    }
    return false
}
const graphColouring = (G,M) => {
    let n = G.length
    let color = []
    if (solve(0,n,G,M,color)) return true
    return false
}
console.log(graphColouring(graph,M))
