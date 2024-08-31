class Pair {
    int first;
    int second;
    int tm;
    public Pair(int first,int second,int tm) {
        this.first = first;
        this.second = second;
        this.tm = tm;
    }
}

class Solution
{
    //Function to find minimum time required to rot all oranges.
    public int orangesRotting(int[][] grid)
    {
        int n = grid.length;
        int m = grid[0].length;
        int isVisited[][] = new int[n][m];
        Queue<Pair> q = new LinkedList<>();
        int ti = 0;
        int tiFresh = 0;
        int delRow[] = {-1,0,+1,0};
        int delCol[] = {0,+1,0,-1};
        for(int i = 0;i < n;i++) {
            for(int j = 0; j < m; j++) {
                if(grid[i][j] == 2) {
                    q.add(new Pair(i,j,0));
                    isVisited[i][j] = 2;
                }else {
                    isVisited[i][j] = 0;
                }
                if (grid[i][j] == 1) tiFresh++;
            }
        }
        int tm = 0;
        while(!q.isEmpty()) {
            int row = q.peek().first;
            int col = q.peek().second;
            int t = q.peek().tm;
            tm = Math.max(ti,t);
            q.remove();
             for (int i = 0; i<4;i++) {
            int nRow = row + delRow[i];
            int nCow = col + delCol[i];
            if (nRow >= 0 && nRow >= 0 && nRow < n && nRow < m && isVisited[nRow][nRow] != 2
                && grid[nRow][nRow] == 1) {
                    isVisited[nRow][nRow] = 2;
                    q.add(new Pair(nRow,nRow,t + 1));
                    ti++;
                }
        }
        }
        if (ti != tiFresh) return -1;
        return tm;
    }
}



















//Wrong answer using DFS - will not use DFs bcz solution requires minimum time
class Solution
{
    //Function to find minimum time required to rot all oranges. 
    private void dfs(int row,int col,int ans,int[][] grid,int[] delRow,int[] delCol) {
        int n = grid.length;
        int m = grid[0].length;
        ans++;
        for(int i=0;i<4; i++) {
            if (grid[row][col] == 2) {
            int nRow = row + delRow[i];
            int nCol = col + delCol[i];
            if(nRow >= 0 && nCol >= 0 && nRow < n && nCol < m && grid[nRow][nCol] == 1) {
                  dfs(nRow,nCol,ans,grid,delRow,delCol);
              }
            }
        }
    }
    public int orangesRotting(int[][] grid)
    {
        int ans = 0;
        int[] delRow = {-1,0,+1,0};
        int[] delCol = {0,+1,0,-1};
        dfs(0,0,ans,grid,delRow,delCol);
        return ans;
    }
}