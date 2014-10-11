/**
 * Given an array S of n integers, are there elements a, b, c in S such that
 * a + b + c = 0? Find all unique triplets in the array which gives the sum of
 * zero.
 *
 * Time
 *  O(NN)
 *
 * Space
 *  O(1)
 *
 * Steps
 *   1. Sort the array // O(NlogN)
 *
 *      Note: javascript native sort is comparsion sort, and comparsion cannot
 *            be faster than O(NlogN)
 *
 *   2. Loop the array and for each member
 *     1. Loop the rest of the array to see if sum of any two of them equals to
 *        the supplementary of the current member
 *
 */

function threeSum(arr) {
  var groups = [];
  var i, j, k;
  var len = arr.length;
  var supplementary;

  // step 1
  arr.sort(function (a, b) {
    return a - b;
  });

  // step 2
  for (i = 0; i < len; i++) {
    if (arr[i] >= 0) break;
    if (arr[i] == arr[i - 1]) continue;

    supplementary = -arr[i];
    j = i + 1;
    k = len;

    // step 2.1
    while (j < k) {
      if (arr[j] + arr[k] == supplementary) {
        groups.push([i, j, k]);
        j++; 
        k--;
        while (arr[j] == arr[j - 1]) j++;
        while (arr[k] == arr[k + 1]) k--;
      } else if (arr[j] + arr[k] < supplementary) {
        j++;
      } else {
        k--;
      }
    }
  }

  return groups;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = threeSum;
