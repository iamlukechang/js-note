/**
 * Bubble Sort, sorting algorithm
 *
 * Time: 
 *   best O(N), average O(NN), worst O(NN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Enumerate all the element in the array from the end // O(N)
 *     1. Start from the beginning, compare every adjacent pair, move // O(N)
 *        the larger to the right, until this element. If no swap
 *        happen in this round, then it won't happen in next round,
 *        and this array is sorted.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function bubbleSort(arr) {
  var sorted = false;

  // step 1
  for (var len = arr.length, i = len - 1; i > 0; i--) {

    // step 1.1
    sorted = true;

    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        sorted = false;
      }
    }

    if (sorted) break;
  }

  return arr;
}

function swap(arr, x, y) {
  var tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
} 

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = bubbleSort;
