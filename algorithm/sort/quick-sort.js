/**
 * Quick Sort, sorting algorithm
 *
 * Time: 
 *   best O(NlogN), average O(NlogN), worst O(NlogN)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Check ths size of the array O(N), if the length is smaller or equal
 *      to 1, return the array, if the length is larger than 1, do following 
 *      1. Select an element as a pivot of the array // O(1)
 *      2. All the elements with value less than the pivot come before it, while
 *         all the elements with value larger than the pivot come after it // O(N)
 *      3. Do quick sort to the left and the right, and concat them. // N <= N
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function quickSort(arr) {
  var len = arr.length;
  if (len <= 1) return arr;

  var pivot = getPivotIndex(arr);
  var left = [],
      middle = [],
      right = [];

  for (var i = 0; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] == pivot) {
      middle.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(middle.concat(quickSort(right)));
}

function getPivotIndex(arr) {
  // there are many ways to get a pivot, to avoid the worst case, we use
  // the median of three here
  var len = arr.length;
  var idxs = [0, Math.floor(len / 2), len - 1],
      nums = [arr[0], arr[idxs[1]], arr[idxs[2]]];

  // this is actually a bubble sort with three manually iteration
  if (nums[1] < nums[0]) {
    swap(nums, 0, 1);
    swap(idxs, 0, 1);
  }

  if (nums[2] < nums[1]) {
    swap(nums, 1, 2);
    swap(idxs, 1, 2);
  }

  if (nums[1] < nums[0]) {
    swap(nums, 0, 1);
    swap(idxs, 0, 1);
  }

  // with the idxs array we can get the index, but here we only need to return
  // the value
  return nums[1];
}

function swap(arr, x, y) {
  var tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
} 

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = quickSort;
