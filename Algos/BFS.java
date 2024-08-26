// Breadth First Search
// Notes -: 

// code :
class bfsSolution {
    public ArrayList<Integer> bfs_implementation(int v,ArrayList<ArrayList<Integer>> adj) {
        ArrayList<Integer> bfs = new ArrayList<>();
        boolean isVisited = new boolean[v];
        Queue <Integer> q = new LinkedList<>();
        q.add(0);
        isVisited[0] = true;
        
        while(!q.isEmpty) {
            Integer node = q.poll();
            bfs.add(node);
            
            for (Integer it: adj.get(node)) {
                if (isVisited[it] === false) {
                isVisited[it] = true;
                q.add(it);
            }
        }
    }
    return bfs
}