
import java.util.*;

class Graph {

  // Add edge
  static void addEdge(ArrayList<ArrayList<Integer>> adj, int s, int d) {
    adj.get(s).add(d);
    adj.get(d).add(s);
  }

  public static void main(String[] args) {

    // Create the graph
    int V = 5;
    ArrayList<ArrayList<Integer>> adj = new ArrayList<ArrayList<Integer>>(V);

    for (int i = 0; i < V; i++)
      adj.add(new ArrayList<Integer>());

    // Add edges
    addEdge(adj, 0, 1);
    addEdge(adj, 0, 2);
    addEdge(adj, 0, 3);
    addEdge(adj, 1, 2);

    printGraph(adj);
  }

  // Print the graph
  static void printGraph(ArrayList<ArrayList<Integer>> adj) {
    for (int i = 0; i < adj.size(); i++) {
      System.out.println("\nVertex " + i + ":");
      for (int j = 0; j < adj.get(i).size(); j++) {
        System.out.print(" -> " + adj.get(i).get(j));
      }
      System.out.println();
    }
  }
}