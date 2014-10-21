/**
 * Clone a graph
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {2d array} graph An adjacency list that represents a graph
 */
function clone(graph) {
  var copy = []; 

  // assume we only know the first node
  travel(graph, copy, 0);
  return copy;
}

function travel(graph, copy, idx) {
  if (typeof copy[idx] !== 'undefined') return;

  var node = graph[idx];

  copy[idx] = node;

  for (var i = 0, len = node.length; i < len; i++) {
    travel(graph, copy, node[i]);
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = clone;
