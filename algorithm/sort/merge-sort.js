/**
 * Merge Sort, sorting algorithm
 *
 * Time: 
 *   O(NlogN)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Set boundary
 *   2. Divide the arr into two parts
 *     1. Do merge sort to each part // N = N/2
 *
 *      Note: The space complexity O(N) is used here (arr.slice), if we don't
 *            use an extra array to save the result, but just do merge two
 *            parts in the same array, it will become a sorted array insert
 *            problem, which cost an O(N) time complexity. Using linked list
 *            can avoid the extra space here.
 *
 *     2. Merge the two sorted parts into a sorted one. // O(N)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function mergeSort(arr) {
  var len = arr.length;
  // step 1
  if (len == 1) return arr;

  var mid = Math.floor(len / 2);

  // step 1.1
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, len)));
}

function merge(arr1, arr2) {
  var rst = []
  var len = arr1.length + arr2.length;

  // step 1.2
  while (rst.length < len) {
    if (arr1[0] <= arr2[0] || arr2.length == 0) {
      rst.push(arr1.shift());
    } else if (arr2[0] < arr1[0] || arr1.length == 0) {
      rst.push(arr2.shift());
    }
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = mergeSort;
