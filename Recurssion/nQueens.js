const placeQueens = (col,n,ans,board,leftRow,upperDiagonal,lowerDiagonal) => {
    if (col == n) {
        // ans.push([...board]) 
        console.log(board)
        return
    }
    
    for (let row = 0; row < n; row++) {
        if (leftRow[row] == 0 && upperDiagonal[(n - 1) + (col - row)] == 0 && lowerDiagonal[row + col] == 0) {
            board[row][col] = 'Q'
            leftRow[row] = 1
            upperDiagonal[(n - 1) + (col - row)] = 1
            lowerDiagonal[row + col] = 1
            placeQueens(col + 1,n,ans,board,leftRow,upperDiagonal,lowerDiagonal)
            board[row][col] = '.'
            leftRow[row] = 0
            upperDiagonal[(n - 1) + (col - row)] = 0
            lowerDiagonal[row + col] = 0
        }
    }
}


const nQueens = (n) => {
    let board = []
    let leftRow = []
    let upperDiagonal = []
    let lowerDiagonal = []
    let ans = []
    for (let i = 0; i < n; i++) {
        leftRow[i] = 0
        board[i] = []
        for(let j = 0; j < n; j++) {
            board[i][j] = '.'
        }
    }
    for(let k = 0; k < 2 * n - 1; k++) {
        upperDiagonal[k] = 0
        lowerDiagonal[k] = 0
    }
    placeQueens(0,n,ans,board,leftRow,upperDiagonal,lowerDiagonal)
    return ans
}
nQueens(4)

//ans
[
    [ '.', '.', 'Q', '.' ],
    [ 'Q', '.', '.', '.' ],
    [ '.', '.', '.', 'Q' ],
    [ '.', 'Q', '.', '.' ]
  ]
  [
    [ '.', 'Q', '.', '.' ],
    [ '.', '.', '.', 'Q' ],
    [ 'Q', '.', '.', '.' ],
    [ '.', '.', 'Q', '.' ]
  ]