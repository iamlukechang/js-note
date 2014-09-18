/**
 * Binary Search, search algorithm
 *
 * Given a sorted set, find a number
 *
 * Time: 
 *   O(logN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Set boundary condition
 *   2. Find the middle element
 *   3. If target is larger than the middle element, do binary search in the
 *      right part; if it's smaller, do binary search in the left part; if it
 *      equals, return the middle element index.
 *
 *      Note: A set means every elements are distinct. If it's an array with
 *            possibile repeated elements, once we find a matehed element, we
 *            need to keep doing binary search for both its left part and the
 *            right part until we find the two edges.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} set A sorted set
 */
function search(set, target, start, end) {
  // initialize
  start = start || 0; 
  end = end || set.length;
  var len = end - start;

  // step 1
  if (len == 0) return null;

  // step 2
  var middle = start + Math.floor(len / 2);

  // step 3
  if (target > set[middle]) {
    return search(set, target, middle + 1, end);
  } else if (target < set[middle]) {
    return search(set, target, start, middle);
  } else {
    return middle;
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = search;
