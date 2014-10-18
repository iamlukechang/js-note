/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below. For example, given the
 & following triangle
 *
 * [
 *      [2],
 *     [3, 4],
 *    [6, 5, 7],
 *   [4, 1, 8, 5]
 * ]
 *
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Time:
 *   O(N)
 *
 * Space:
 *   O(H)
 *
 * Steps
 *   1. Set boundary
 *   2. Use recursion to find the result of each element for prev level // H = H - 1
 *   3. Loop the current level and for each element, plus the smaller adjacent
 *      member from the prev level result O(H)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} triangle
 */
function run(triangle, height) {
  height = height || triangle.length;
  // step 1
  if (height == 1) return {min: triangle[0][0], rst: triangle[0]};

  var current = triangle[height - 1];
  // step 2
  var lastRst = run(triangle, height - 1).rst;

  var min = Infinity;
  var rst = [];
  // step 3
  for (var i = 0; i < height; i++) {
    rst[i] = current[i] + Math.min(lastRst[i - 1] || Infinity, lastRst[i] || Infinity);
    min = Math.min(rst[i], min);
  }

  return {min: min, rst: rst};
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
