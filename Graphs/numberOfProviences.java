// using dfs

class provencesDfs {
    public static void dfs(int node,ArrayList<ArrayList<Integer> adj,boolean isVisited ) {
        isVisited[node] = true;
        for(int it : adj.get(node)) {
            if (isVisited[it] == false) {
                dfs(it, adj, isVisited)
        }

    }
    public int noOfPrviences(int v, ArrayList<ArrayList<Integer> adj) {
        boolean isVisited = new boolean[v];
        int provincesCount = 0
        for (int i = 0; i< v; i++) {
            if (isVisited[i] == false) {
                provincesCount++
                dfs(i, adj, isVisited)
            }
        }
        return provincesCount
    }
}
}

// using bfs
// class provencesBfs {

//    public int noOfPrviences(int v, ArrayList<ArrayList<Integer> adj) {
//     boolean isVisited = new boolean[v];
//     int provincesCount = 0
//     Queue<Integer q = new LinkedList<>();
//      q.add(0);

//      while(!q.isEmpty) {
//         int node = q.poll();
//         provincesCount++
//         for (int it : adj.get(node)) {
//         if (isVisited[it] == false) {
//             isVisited[it] = true;
//         }}
//         }
// }