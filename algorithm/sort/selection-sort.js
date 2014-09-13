/**
 * Selection Sort, sorting algorithm
 *
 * Time: 
 *   O(NN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Enumerate all the element in the array // O(N)
 *     1. Enumerate all the element after this one, if find an element // O(N)
 *        smaller, switch position with it
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function selectionSort(arr) {
  var smallest = arr[0];

  // step 1
  for (var i = 0, len = arr.length; i < len; i++) {
    // step 1.1
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) swap(arr, i, j);
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
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = selectionSort;
