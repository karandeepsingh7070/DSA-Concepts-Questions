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