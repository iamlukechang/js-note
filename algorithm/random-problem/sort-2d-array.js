/**
 * Given a two-dimension array, sort "column" by the sum of it. Ex:
 * 
 * [                [
 *  [2, 0, 7],       [0, 7, 2],
 *  [3, 3, 1],  =>   [3, 1, 3],
 *  [9, 5, 1]        [5, 1, 9]
 * ]                ]
 *
 * Steps:
 *   1. Go through the whole table and cache the sum and the index of each
 *      column in an extra array. // O(NM)
 *
 *   2. Sort the cached array
 *
 *      Note: now we can treat this as one dimension sorting problem, we can use
 *            any proper sort algorithm. Here we just use the native javascript
 *            sort api.
 *
 *   3. Build a new table according to the cached array's index
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {2d array} table
 */
function sort(table) {
  var rowLen = table.length,
      colLen = table[0].length;
  var i, j;

  var sumArr = [];

  // step 1
  for (i = 0; i < rowLen; i++) {
    for (j = 0; j < colLen; j++) {
      if (typeof sumArr[j] === 'undefined') sumArr[j] = {idx: j, val: 0};
      sumArr[j].val += table[i][j];
    }
  }

  // step 2
  sumArr.sort(function (a, b) {
    return a.val - b.val;
  });

  // step 3
  var rst = [];
  for (i = 0; i < rowLen; i++) {
    if (typeof rst[i] === 'undefined') rst[i] = [];

    for (j = 0; j < colLen; j++) {
      rst[i][j] = table[i][sumArr[j].idx]
    }
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = sort;
