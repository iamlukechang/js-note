/**
 * Given a nested array, extend all its elements
 *
 * Example:
 *   Input: [1, [2, 3], 0, [3, [7, 5]], 9]
 *   Output: [1, 2, 3, 0, 3, 7, 5, 9]
 *
 * Time:
 *   TODO
 *
 * Space:
 *   TODO
 *
 * Steps
 *   TODO
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(arr) {
  var rst = [];
  recurse(arr, rst);

  return rst;
}

function recurse(arr, rst) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      recurse(arr[i], rst);
    } else {
      rst.push(arr[i]);
    }
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
