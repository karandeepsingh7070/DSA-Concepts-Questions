// Topological Sort using DFS
class CustomStack {
    // LIFO
    constructor() {
        this.items = []
    }
    
    push(item) {
        return this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    getStack() {
        return this.items.reverse()
    }
}
class Solution {
    convertToAdjList(n, list) {
       let adjList = new Array(n).fill().map(() => []);
       for (const [u, v] of list) {
           adjList[u].push(v); 
       }
       return adjList
   }
    dfs(node, vis, st, adjList) {
       vis[node] = 1
       for (let elm of adjList[node]) {
           if (!vis[elm]) {
               this.dfs(elm, vis, st, adjList)
           }
       }
       st.push(node)
   }
    
    topoSort(V, edges) {
        let vis = new Array(V).fill(0)
       let st = new CustomStack()
       let adjList = this.convertToAdjList(V, edges)

       for (let i = 0; i < V; i++) {
           if (!vis[i]) {
               this.dfs(i, vis, st, adjList)
           }
       }
       
      return st.getStack()
    }
}