/**
 * Given a number N, generate a triangle array of N level looks like:
 * [
 *       [1]
 *      [1, 1]
 *     [1, 2, 1]
 *    [1, 3, 3, 1]
 *   [1, 4, 6, 4, 1]
 *   ...
 * ]
 *
 * Time:
 *   O(NN)
 *
 * Space:
 *   O(1)
 *
 * Steps
 *   1. If input is 0, easily return [[1]]
 *   2. Loop from 1 to the input number, generate the array of each level in
 *      each iteration.
 *     1. Loop from 0 to the level number(the level array's length minus one),
 *        the current element in each iteration is the sum of it's adjacent
 *        elements in the previous level.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(num) {
  var rst = [[1]];
  // step 1
  if (num == 0) return rst;

  // step 2
  for (var i = 1; i <= num; i++) {
    rst.push(generateLevel(rst[i - 1], i));
  }

  return rst;
}

function generateLevel(lastLevel, i) {
  var newLevel = [];

  // step 2.1
  for (var j = 0; j <= i; j++) {
    newLevel.push((lastLevel[j - 1] || 0) + (lastLevel[j] || 0));
  }

  return newLevel;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
