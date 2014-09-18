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
 *     2. Merge the two sorted parts. // O(N)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function mergeSort(arr, start, end) {
  start = start || 0; 
  end = end || arr.length;
  var len = end - start;
  // step 1
  if (len == 1) return arr.slice(start, end);

  var middle = start + Math.floor(len / 2);

  // step 1.1 & step 1.2
  return merge(mergeSort(arr, start, middle), mergeSort(arr, middle, end));
}

function merge(arr1, arr2) {
  // The space complexity O(N) is used here(and the arr.slice(0, 1) at step 1),
  // if we don't use an extra array to save the result, but just do merge
  // two parts in the same array, it will become a sorted array insert problem,
  // which cost an O(N) time complexity
  var rst = []
  var cnt1 = cnt2 = 0;
  var len1 = arr1.length,
      len2 = arr2.length;
  while (cnt1 < len1 || cnt2 < len2) {
    if (arr1[cnt1] < arr2[cnt2] || cnt2 == len2) {
      rst.push(arr1[cnt1++]);
    } else if (arr2[cnt2] <= arr1[cnt1] || cnt1 == len1) {
      rst.push(arr2[cnt2++]);
    }
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = mergeSort;
