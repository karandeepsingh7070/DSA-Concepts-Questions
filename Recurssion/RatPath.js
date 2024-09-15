let maze = [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]];

const path = (i,j,maze,ans,isVisited,n,move,dirI,dirJ) => {
    if (i == n - 1 && j == n - 1) {
        ans.push(move)
        return
    }
    let dir = "DLRU"
    for (let k = 0; k < 4; k++) {
        let adjI = i + dirI[k]
        let adjJ = j + dirJ[k]
        if (i >= 0 && j >= 0 && i < n && j < n &&
            adjI >= 0 && adjJ >= 0 && adjI < n && adjJ < n &&
            isVisited[adjI][adjJ] == 0 && maze[adjI][adjJ] == 1) {
                isVisited[adjI][adjJ] = 1
                path(adjI,adjJ,maze,ans,isVisited,n,move + dir[k],dirI,dirJ)
                isVisited[adjI][adjJ] = 0
            }
    }
}
const findRatPath = (maze,n) => {
    let ans = []
    let move = ''
    let isVisited = []
    for (let i = 0; i< maze.length; i++) {
        isVisited[i] = []
        for (let j = 0; j < maze.length; j++) {
            isVisited[i][j] = 0
        }
    }
    let dirI = [+1,0,0,-1]
    let dirJ = [0,-1,+1,0]
    if (maze[0][0] == 1){
    path(0,0,maze,ans,isVisited,n,move,dirI,dirJ)
    }
    return ans
}
console.log(findRatPath(maze,4))

// ans 
[ 'DDRDRR', 'DRDDRR' ]