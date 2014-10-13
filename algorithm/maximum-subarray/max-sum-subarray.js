/**
 * Maximum Sum Subarray
 *
 * Time: 
 *   O(NlogN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Set boundary: if this array has only one element, return it
 *   2. Find the mid element, and devide the array into two parts
 *     1. Find the possible maximum sum across the mid element
 *       1. Loop start from the mid to the start element, and cache the largest
 *          sum.
 *       2. Loop start from the mid to the end element, and cache the largest
 *          sum.
 *     2. Do findMaxSum for left part and right part
 *   3. Compare the sum of the left part, the right part, and the part across
 *      the mid element, return the largest one.
 *
 *   Note: If we want to return the subarray, just cache the position of
 *         start and end elements at each comparision step and the boundary
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function findMaxSum(arr, start, end) {
  start = start || 0;
  end = end || arr.length;
  // step 1
  if (end - start == 1) return arr[start];

  // step 2
  var mid = start + Math.floor((end - start) / 2);

  // step 2.1.1
  var leftMax = 0
  var leftSum = 0;
  for (var i = mid - 1; i >= start; i--) {
    leftSum += arr[i];
    if (leftSum > leftMax) leftMax = leftSum;
  }

  // step 2.1.2
  var rightMax = 0
  var rightSum = 0;
  for (var i = mid; i < end; i++) {
    rightSum += arr[i];
    if (rightSum > rightMax) rightMax = rightSum;
  }

  // step 2.2 and step 3
  return Math.max(findMaxSum(arr, start, mid), leftMax +  rightMax, findMaxSum(arr, mid, end));
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = findMaxSum;
