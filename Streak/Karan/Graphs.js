let list = [[0,1],[1,2],[2,3],[0,3],[3,4],[4,5],[5,6],[4,5]]
function convertToAdjList(n,m,list) {
   let adjList = new Array(n).fill().map(() => []);
    for (const [u, v] of list) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    console.log(adjList)
}

convertToAdjList(7,8,list)

// DFS 
class Solution {
    // Function to return a list containing the DFS traversal of the graph.
     dfs(node,adj,ls,vis) {
        vis[node] = 1
        ls.push(node)
        for(const elm of adj[node]) {
            if(!vis[elm]) {
                this.dfs(elm,adj,ls,vis)
            }
        }
    }
    dfsOfGraph(adj) {
        let v = adj.length
        let ls = []
        let vis = []
        this.dfs(0,adj,ls,vis)
        return ls
    }
}

// DFS Number of Provinces - leetcode 547

var makeAdjList = function(isConnected) {
    let v = isConnected.length
    let adjList = Array.from({ length: v }, () => []);
    for(let i = 0;i < isConnected.length; i++) {
        for(let j = 0;j< isConnected[0].length; j++) {
            if(i != j && isConnected[i][j] == 1 ) {
                adjList[i].push(j)
                // adjList[j].push(i)
                  
            }
        }
  
    }
    return adjList
}
var dfs = function(i,adjList,isVis) {
    isVis[i] == 1
    for(const nbr of adjList[i]) {
        if(!isVis[nbr]) {
            dfs(nbr,adjList,isVis)
        }
    }
}
var findCircleNum = function(isConnected) {
    let v = isConnected.length
    let isVis = new Array(v)
    let noOfProvinces = 0
    let adjList = makeAdjList(isConnected)
    for(let i = 0; i < isVis.length; i++) {
        if(!isVis[i]) {
            noOfProvinces = noOfProvinces + 1
            dfs(0,adjList,isVis)
        }
    }
    return noOfProvinces
};

// Rotton Oranges 
class Pair {
    constructor(row, col, tm) {
        this.row = row;
        this.col = col;
        this.tm = tm;
    }
}

class CustomQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // Adds element at the end
  }

  dequeue() {
    return this.items.shift(); // Removes element from the front
  }

  front() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
var orangesRotting = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let visited = new Array(n).fill(0).map(() => new Array(m).fill(0));
    
    let queue = new CustomQueue();
    let tFresh = 0
    let rT = 0
    for(let i = 0; i< n; i++) {
        for(let j = 0; j < m;j++) {
            if(grid[i][j] == 2) {
                let rottonPair = new Pair(i,j,0)
                queue.enqueue(rottonPair)
                visited[i][j] = 2
            }
            if(grid[i][j] == 1) {
                tFresh++
            }
        }
    }

    let dRow = [-1,0,1,0]
    let dCol = [0,1,0,-1]

    let tMax = 0
    while(!queue.isEmpty()) {
        let frontElm = queue.front()
        let row = frontElm.row
        let col = frontElm.col
        let tm = frontElm.tm
        tMax = Math.max(tMax,tm)
        queue.dequeue()
        for(let k = 0; k < 4; k++) { // check for nbrs
            let nRow = row - dRow[k]
            let nCol = col - dCol[k]
            if(nRow >= 0 && nRow < n && nCol >= 0 && nCol < m && visited[nRow][nCol] != 2 && grid[nRow][nCol] == 1) {
                visited[nRow][nCol] = 2
                queue.enqueue(new Pair(nRow, nCol, tm + 1))
                rT++
            }
        }
    }

    if(rT != tFresh) return -1
    return tMax
};

// flood fill

var dfs = function(image, sr, sc, color,ans,initialColor) {
    ans[sr][sc] = color // instead of 1 will check for color as a indicator of not visited
    // we can make a adj list and call the dfs on nbr as we do or try th four direction method
     let n = image.length
    let m = image[0].length
    let dRow = [-1,0,1,0]
    let dCol = [0,1,0,-1]
    for(let i = 0; i < 4; i++) {
        let nRow = sr + dRow[i]
        let nCol = sc + dCol[i]
        if(nRow >= 0 && nCol >= 0 && nRow < n && nCol < m && ans[nRow][nCol] != color && image[nRow][nCol] == initialColor) {
            dfs(image, nRow, nCol, color,ans,initialColor)
        }
    }
    
}
var floodFill = function(image, sr, sc, color) {
    let n = image.length
    let m = image[0].length
    let ans = image.map(row => [...row]); //act like isVisited
    let initialColor = image[sr][sc]
    dfs(image, sr, sc, color,ans,initialColor)
    return ans
};

// Detect cycle using BFS
  class Solution {
      // Function to detect cycle in an undirected graph.
      detectCycle(node,isVisited,adj) {
          isVisited[node] = true
          let q = new CustomQueue()
          q.enqueue({node,parent: -1})
          
          while(!q.isEmpty()) {
              let frontNode = q.front()
              let srcNode = frontNode.node
              let parent = frontNode.parent
              q.dequeue()
              
              for(const nbrNode of adj[srcNode]) {
                  if(!isVisited[nbrNode]) {
                      isVisited[nbrNode] = true
                      q.enqueue({node : nbrNode, parent : srcNode})
                  }else {
                      if(nbrNode != parent) {
                          return true
                      }
                  }
              }
          }
          return false
      }
      
      isCycle(adj) {
          let isVisited = new Array(adj.length).fill(false)
          for(let i = 0; i< isVisited.length; i++) {
              if(!isVisited[i]) {
                  if (this.detectCycle(i,isVisited,adj)) return true
              }
          }
          
          return false
      }
  }

  // using DFS

  class Solution {
    // Function to detect cycle in an undirected graph.
    detectCycle(node,parentNode,isVisited,adj) {
        isVisited[node] = true
        for(const nbr of adj[node]) {
            if(!isVisited[nbr]) {
               if (this.detectCycle(nbr, node, isVisited, adj)) {
                    return true;
                }
            }else {
                if(nbr != parentNode) {
                    return true
                }
            }
        }
        return false
    }
    
    isCycle(adj) {
        let isVisited = new Array(adj.length).fill(false)
        let parentNode = -1
        for(let i = 0; i< isVisited.length; i++) {
            if(!isVisited[i]) {
                if (this.detectCycle(i,parentNode,isVisited,adj)) return true
            }
        }
        
        return false
    }
}

//  01 Matrix leetcode - 542

class Pair {
    constructor(row,col,steps) {
        this.row = row
        this.col = col
        this.steps = steps
    }
}
var updateMatrix = function(mat) {
    let n = mat.length
    let m = mat[0].length
    let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let dis = new Array(n).fill(0).map(() => new Array(m).fill(0))

    let q = new CustomQueue()
    //adding all that are 0's same as adding all the rotton oranges
    for(let i = 0; i < n; i++) {
        for(let j = 0;j < m; j++) {
            if(mat[i][j] == 0) {
            q.enqueue(new Pair(i,j,0))
            visited[i][j] = 1
            }
        }
    }

    let dRow = [-1,0,1,0]
    let dCol = [0,1,0,-1]

    while(!q.isEmpty()) {
        let fronElm = q.front()
        let fRow = fronElm.row
        let fCol = fronElm.col
        let steps = fronElm.steps
        dis[fRow][fCol] = steps
        q.dequeue()
    for(let i = 0; i < 4; i++) {
        let nRow = fRow + dRow[i]
        let nCol = fCol + dCol[i]
        if(nRow >= 0 && nCol >=0 && nRow < n && nCol < m && !visited[nRow][nCol]) {
            visited[nRow][nCol] = 1
            q.enqueue(new Pair(nRow,nCol,steps + 1))
        }
    }
    }
    return dis
};

// surrounded Regions 

var dfs = function(row,col,visited, board) {
    let n = board.length
    let m = board[0].length
    visited[row][col] = 1

    let dRow = [-1,0,1,0]
    let dCol = [0,1,0,-1]
    
    for(let k = 0; k < 4; k++) {
        let nRow = row + dRow[k]
        let nCol = col + dCol[k]
        if(nRow >= 0 && nCol >= 0 && nRow < n && nCol < m && !visited[nRow][nCol] && board[nRow][nCol] == "O") {
            dfs(nRow,nCol,visited, board)
        }
    }
}
var solve = function(board) {
    let n = board.length
    let m = board[0].length
    let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))
    // let mat = board.map(row => [...row])
    // traversing Top Row & Bottom Row
    for(let j = 0; j < m; j++) {
        // Top Row
        if(!visited[0][j] && board[0][j] == "O") {
            dfs(0,j,visited, board)
        }
        // Bottom Row
        if(!visited[n-1][j] && board[n-1][j] == "O") {
            dfs(n-1,j,visited, board)
        }
    }

    // traversing Left Col & Right Col
    for(let i = 0; i < n; i++) {
        if(!visited[i][0] && board[i][0] == "O") {
            dfs(i,0,visited, board)
        }
        if(!visited[i][m-1] && board[i][m-1] == "O") {
            dfs(i,m-1,visited, board)
        }
    }

    // to formulate the answer
    for(let i = 0; i < n; i++) {
        for(let j = 0;j < m; j++) {
            if(!visited[i][j] && board[i][j] == "O") {
                board[i][j] = "X"
            }
        }
    }
    return board
};

// Number of Enclaves leetcode - 1020

var numEnclaves = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let q = new CustomQueue()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0 || j == 0 || i == n - 1 || j == m - 1) {
                if (!visited[i][j] && grid[i][j] == 1) {
                    q.enqueue(new Pair(i, j));
                    visited[i][j] = 1;
                }
            }
        }
    }

    let dRow = [-1, 0, 1, 0];
    let dCol = [0, 1, 0, -1];

    while(!q.isEmpty()) {
        let frontElm = q.front()
        let row = frontElm.row
        let col = frontElm.col
        q.dequeue()
        for(let k = 0; k < 4; k++) {
            let nRow = row + dRow[k];
            let nCol = col + dCol[k];
            if(nRow >= 0 && nCol >= 0 && nRow < n && nCol < m && !visited[nRow][nCol] && grid[nRow][nCol] == 1) {
                q.enqueue(new Pair(nRow,nCol))
                visited[nRow][nCol] = 1
            }
        }
    }

    // to return ans
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && grid[i][j] == 1) {
                cnt++;
            }
        }
    }
    return cnt;
};

// Word Length - // Brute Force

var ladderLength = function(beginWord, endWord, wordList) {
    let seqList = new Set(wordList)
    let q = new CustomQueue()
    q.enqueue({word : beginWord, seq : 1})
    seqList.delete(beginWord)

    while(!q.isEmpty()) {
        let frontElm = q.front()
        let word = frontElm.word
        let seq = frontElm.seq
        q.dequeue()
        if(word == endWord) return seq
        for(let j = 0; j < word.length; j++) {
            let originalCh = word[j]
            let wordArray = word.split("");
            for(let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) {
                wordArray[j] = String.fromCharCode(ch); // Modify the letter
                let newWord = wordArray.join("");
                if(seqList.has(newWord)) {
                    seqList.delete(newWord)
                    q.enqueue({word : newWord, seq : seq + 1})
                }
            }
        }
    }
    return 0

};


// Number of Distinct Islands

class Solution {
    dfs(row,col,baseRow,baseCol,visited,grid,shape) {
        let n = grid.length
        let m = grid[0].length
        visited[row][col] = 1
        shape.push(`${row - baseRow},${col - baseCol}`);
        
        let dRow = [-1,0,1,0]
        let dCol = [0,1,0,-1]
        
        for(let i = 0; i < 4; i++) {
            let nRow = row + dRow[i]
            let nCol = col + dCol[i]
            if(nRow >= 0 && nCol >= 0 && nRow < n && nCol < m && !visited[nRow][nCol] && grid[nRow][nCol]) {
                this.dfs(nRow,nCol,baseRow,baseCol,visited,grid,shape)
            }
        }
    }
    countDistinctIslands(grid)
    {
        let n = grid.length
        let m = grid[0].length
        let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))
        // let noOfIslands = 0
        let uniqueIslands = new Set();
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(!visited[i][j] && grid[i][j] == 1) {
                    let shape = [];
                    this.dfs(i,j,i,j,visited,grid,shape)
                    uniqueIslands.add(shape.join("|"));
                }
            }
        }
        return uniqueIslands.size
    }
}

// is Graph Barpatite

var dfs = function(node,graph,colorList,color) {
    colorList[node] = color
    for(const nbreNode of graph[node]) {
        if(colorList[nbreNode] == -1) {
           if(!dfs(nbreNode,graph, colorList, 1 - color)) {
            return false
           }
        }else {
            if(colorList[nbreNode] == colorList[node]) {
                return false
            }
        }
    }
    return true
}
var isBipartite = function(graph) {
    let n = graph.length
    let colorList = new Array(n).fill(-1)
    // colors can be 0|1
   for (let i = 0; i < n; i++) { // Ensure all nodes are visited
        if (colorList[i] == -1) {
            if (!dfs(i, graph, colorList, 0)) {
                return false;
            }
        }
    }
    return true
};

// Cycle in a Directed Graph
class Solution {
    dfs(node,visited,pathVis,adj) {
        visited[node] = true
        pathVis[node] = 1
        
        for(const nbr of adj[node]) {
            if(!visited[nbr]) {
                if(this.dfs(nbr,visited,pathVis,adj)) {
                    return true
                }
            }else if(pathVis[nbr]) {
                return true
            }
        }
        pathVis[node] = 0
        return false
    }
    isCyclic(adj) {
        let visited = new Array(adj.length).fill(0)
        let pathVis = new Array(adj.length).fill(0)
        
        for(let i = 0; i< adj.length; i++) {
            if(!visited[i]) {
                if(this.dfs(i,visited,pathVis,adj)) {
                    return true
                }
            }
        }
        return false
    }
}
