let board = [        ['9', '5', '7', '.', '1', '3', '.', '8', '4'],
                    ['4', '8', '3', '.', '5', '7', '1', '.', '6'],
                    ['.', '1', '2', '.', '4', '9', '5', '3', '7'],
                    ['1', '7', '.', '3', '.', '4', '9', '.', '2'],
                    ['5', '.', '4', '9', '7', '.', '3', '6', '.'],
                    ['3', '.', '9', '5', '.', '8', '7', '.', '1'],
                    ['8', '4', '5', '7', '9', '.', '6', '1', '3'],
                    ['.', '9', '1', '.', '3', '6', '.', '7', '5'],
                    ['7', '.', '6', '1', '8', '5', '4', '.', '9']
            ];
            
const isValid = (board,row,col,char) => {
  for(let k = 1; k < 9;k++) {
      if (board[row][k] == char) {
          return false
      }
       if (board[k][col] == char) {
          return false
      }
      if (board[3 * (row / 3) + k / 3][3 * (col / 3) + k % 3] == char) {
        return false;
    }
    return true
  }
}
const sudoko = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == ".") {
                for(let k = '1'; k <= '9';k++) {
                    if (isValid(board,i,j,k)) {
                        board[i][j] == k
                        if (sudoko(board)) {
                            return true
                        }else {
                            false
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}
console.log(sudoko(board))