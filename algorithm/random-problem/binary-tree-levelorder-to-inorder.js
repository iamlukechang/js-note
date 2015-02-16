/**
 * Binary Tree Levelorder to Inorder
 *
 * Time:
 *  TODO
 *
 * Space:
 *  TODO
 *
 * Steps
 *  TODO
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} arr Levelorder binary tree
 * @param {number} idx The index of current node
 */
function run(arr, idx) {
  idx = idx || 0;
  if (idx >= arr.length) return [];

  return run(arr, getLeftChild(idx)).concat(arr[idx]).concat(run(arr, getRightChild(idx)));
}

function getLeftChild(num) {
  return 2 * num + 1;
}

function getRightChild(num) {
  return 2 * num + 2;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
