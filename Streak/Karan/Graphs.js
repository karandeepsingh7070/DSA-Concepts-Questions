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