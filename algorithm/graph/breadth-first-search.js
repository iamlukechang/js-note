/**
 * Breadth First Search, graph traversal algorithm
 *
 * Given a graph, visit all the nodes 
 *
 * Time: 
 *   Adjancency Matrix O(NN), Adjancy Lists O(N+P)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Find an unvisited node, and put it into a queue
 *     1. While the queue is not empty, get one node from the queue
 *
 *        Note: It's guaranteed the total times of step 1.1 will be N
 *
 *       1. Find all it's unvisited neighbor, and put them into queue // O(N)
 *
 *          Note: If we use adjacency lists, it won't take an O(N) each time,
 *                but guarantee that total times will be the number of the path
 *                number P.
 *
 *          Note: We should mark the node as "visited" when we put it into the
 *                queue, not when we remove it from the queue, or we might put
 *                duplicate nodes into the queue later.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {2d array} mtx An adjacency matrix that represents a graph
 */
function bfs(mtx) {
  var queue = [];
  var len = mtx.length;
  var visited = [];

  var current;
  // step 1
  for (var i = 0; i < len; i++) {
    if (!visited[i]) {
      visited[i] = true;
      queue.push(i);
      // step 1.1
      while (queue.length != 0) {
        console.log(queue);

        current = queue.shift();
        // step 1.1.1
        for (var j = 0; j < len; j++) {
          if (!visited[j] && mtx[current][j] > 0) {
            visited[j] = true;
            queue.push(j);
          }
        }
      }
    }
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = bfs;
