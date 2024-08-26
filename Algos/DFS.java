// Depyh First Search
// Notes -: 

// code :
class dfsSolution {
    public static void dfs(int node, boolean isVisited[],ArrayList<ArrayList<Integer>> adj, ArrayList<Integer> solutionList ) {
        solutionList.add(node);
        isVisited[node] = true

        for(int it: adj.get(node)) {
            if (isVisited[node] == false) {
                dfs(it,isVisited,adj,solutionList);
            }
        }
    }
    public ArrayList<Integer> dfsGraph(int v, ArrayList<ArrayList<Integer>> adj) {
        boolean isVisited = new boolean[v];
        ArrayList<Integer> solutionList = new ArrayList<Integer>();
        isVisited[0]= true;
        dfs(0,isVisited,adj,solutionList);
        return solutionList
    }
}