/**
 * Depth First Search, graph traversal algorithm
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
 *   1. Find an unvisited node, and put it into a stack
 *     1. While the stack is not empty, find the first node's unvisited
 *        neighbor, and put them into the stack and keep doing this step until
 *        the there is no more neightbor.
 *
 *        Note: If we use adjacency lists, it won't take an O(N) each time,
 *              but guarantee that total times will be the number of the path
 *              number P.
 *
 *        Note: We should mark the node as "visited" when we put it into the
 *              queue, not when we remove it from the queue, or we might put
 *              duplicate nodes into the queue later.
 *
 *     2. Remove the first node from the stack
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {2d array} mtx An adjacency matrix that represents a graph
 */
function dfs(mtx) {
  var stack = [];
  var len = mtx.length;
  var visited = [];

  // step 1
  for (var i = 0; i < len; i++) {
    if (!visited[i]) {
      stack.unshift(i);
      visited[i] = true;
      travel(mtx, len, stack, visited);
    }
  }
}

/**
 * Recursion to travel the path in order to find the deepest node first
 *
 * @param {2d array} mtx The target graph
 * @param {number} len The node number
 * @param {array} stack A helper stack
 * @param {array} visited An helper array tracking the visited node
 */
function travel(mtx, len, stack, visited) {
  console.log(stack);
  var current = stack[0];
  // step 1.1
  for (var i = 0; i < len; i++) {
    if (!visited[i] && mtx[current][i] > 0) {
      stack.unshift(i);
      visited[i] = true;
      travel(mtx, len, stack, visited);
    }
  }
  // step 1.2
  stack.shift();
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = dfs;
