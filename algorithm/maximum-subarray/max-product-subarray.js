/**
 * Maximum Product Subarray
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
 *     1. Find the possible maximum product across the mid element
 *       1. Loop start from the mid to the start element, and cache the largest
 *          product and the minimum negative product or zero
 *       2. Loop start from the mid to the end element, and cache the largest
 *          product and the minimum negative product or zero
 *     2. Do findMaxProduct for left part and right part
 *   3. Compare the product of the left part, the right part, and the part across
 *      the mid element(the product of the left maximum and right maximum or
 *      left negative minimum and right negative minimum), return the largest one.
 *
 *   Note: If we want to return the subarray, just cache the position of
 *         start and end elements at each comparision step and the boundary
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function findMaxProduct(arr, start, end) {
  start = start || 0;
  end = end || arr.length;
  // step 1
  if (end - start == 1) return arr[start];

  // step 2
  var mid = start + Math.floor((end - start) / 2);

  // step 2.1.1
  var leftMax = 0,
      leftMin = 0;
  var leftProduct = 1;
  for (var i = mid - 1; i >= start; i--) {
    leftProduct *= arr[i];
    if (leftProduct > leftMax) leftMax = leftProduct;
    if (leftProduct < leftMin) leftMin = leftProduct;
  }

  // step 2.1.2
  var rightMax = 0,
      rightMin = 0;
  var rightProduct = 1;
  for (var i = mid; i < end; i++) {
    rightProduct *= arr[i];
    if (rightProduct > rightMax) rightMax = rightProduct;
    if (rightProduct < rightMin) rightMin = rightProduct;
  }

  // step 2.2 and step 3
  return Math.max(findMaxProduct(arr, start, mid), leftMax * rightMax, leftMin * rightMin, findMaxProduct(arr, mid, end));
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = findMaxProduct;
