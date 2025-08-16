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

class CustomQueue {
    constructor() {
        this.items = []
    }
    enqueue(item) {
        return this.items.push(item)
    }
    dequeue() {
        // Array.shift is O(n) instead using Array.splice is preferable
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
}

// Topological Sort using Kahn's Algorithm
class Solution {
    convertToAdjList(n, list) {
       let adjList = new Array(n).fill().map(() => []);
       for (const [u, v] of list) {
           adjList[u].push(v); 
       }
       return adjList
   }
    
    topoSort(V, edges) {
        // create all inDegree nodes
        let inDegree = new Array(V).fill(0)
        let adjList = this.convertToAdjList(V,edges)
        for(let i = 0; i < V; i++) {
            for(const elm of adjList[i]) {
                inDegree[elm]++
            }
        }
        let q = new CustomQueue()
        // add all zero indegree elements to queue
        for(let i = 0;  i < V; i++) {
            if(inDegree[i] === 0) q.enqueue(i)
        }
        let top = []
        while(!q.isEmpty()) {
            let front = q.dequeue()
            top.push(front)
            
            for(const elm of adjList[front]) {
                inDegree[elm]--
                if(inDegree[elm] == 0) {
                    q.enqueue(elm)
                }
            }
        }
        return top
        
    }
}