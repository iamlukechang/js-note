/**
 * Insertion Sort, sorting algorithm
 *
 * Time: 
 *   best O(N), average O(NN), worst O(NN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Enumerate all the element in the array // O(N)
 *     1. Insert this element to the left part(which is sorted) // O(N)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function insertionSort(arr) {

  var j;

  // step 1
  for (var i = 1, len = arr.length; i < len; i++) {

    // step 1.1
    j = i;
    while (arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }

  return arr;
}

function swap(arr, x, y) {
  var tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
} 

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = insertionSort;
