class Pair {
    int first;
    int second;
    public Pair(int first,int second) {
        this.first = first;
        this.second = second;
    }
}
class Solution {
    // Function to find the number of islands.
    private void bfs(int r, int c,int[][] isVisited, char[][] grid) {
        isVisited[r][c] = 1;
        Queue<Pair> q = new LinkedList<Pair>();
        q.add(new Pair(r,c));
        int n = grid.length;
        int m = grid[0].length;
        while(!q.isEmpty()) {
            int row = q.peek().first;
            int col = q.peek().second; 
            q.remove();
            
            for(int delRow = -1; delRow <=1; delRow++) {
                 for(int delCol = -1; delCol <=1; delCol++) {
                int nbRow = row + delRow;
                int nbCol = col + delCol;
                if (nbRow >= 0 && nbCol >= 0 && nbRow < n && nbCol < m &&
                isVisited[nbRow][nbCol] == 0 && grid[nbRow][nbCol] == '1') {
                    isVisited[nbRow][nbCol] = 1;
                    q.add(new Pair(nbRow,nbCol));
                }
            }
            }
        }
    }
    public int numIslands(char[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int isVisited[][] = new int[n][m];
        int cnt = 0;
        
        for (int i= 0; i< n; i++) {
            for(int j = 0; j < m; j++) {
                if(isVisited[i][j] == 0 && grid[i][j] == '1') {
                    cnt++;
                    bfs(i,j,isVisited,grid);
                }
            }
        }
        return cnt;
    }
}