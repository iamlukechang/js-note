/**
 * Given an unsorted integer array, find the first missing positive integer.
 *
 * Time:
 *   O(N)
 *
 * Space:
 *   O(1)
 *
 * Steps
 *   1. Swap elements to make all the positives placed at a position same as
 *      it's value, ex: 
 *
 *      1 should be [1, ...]
 *      3 should be [elem1, elem2, 3, ...]
 *   2. Loop the array and find the first element which doesn't have a value
 *      same as it's position
 *
 */

function find(arr) {
  var i = 0, len = arr.length;

  // step 1
  while (i < len) {
    if (arr[i] > 0 && arr[i] <= len && arr[i] != i + 1) {
      swap(arr, arr[i] - 1, i);
    } else {
      i++;
    }
  }

  // step 2
  for (i = 0; i < len; i++) {
    if (arr[i] != i + 1) return i + 1;
  }
}

function swap(arr, x, y) {
  var tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
} 

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = find;
