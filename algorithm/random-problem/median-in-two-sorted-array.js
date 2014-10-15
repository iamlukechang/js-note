/**
 * Given two sorted array with different sizes. Find the median of the two
 * sorted arrays
 *
 * Time
 *   O(log(N+M))
 *
 * Space
 *   O(1)
 *
 * Steps
 *   1. Find the left distance and the right distance of the median
 *   2. Recursively prune half of each array away and cache the number of removed
 *      elements smaller than the median as a left counter and the number of
 *      removed elements larger than the median as a right counter until the left
 *      distance or the right distance is reached
 *     1. In each turn, find the median of each array
 *     2. Check if the two medians are the same, just return it. 
 *     3. If they are different, check if the target median is in any of their
 *        half parts that is planned to be pruned away
 *     4. If not, prune the left half of the array that has a smaller median,
 *        and the right half of the array that has a larger median away, update
 *        the left counter and the right counter, then do the recursion again.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function findMedian(arr1, arr2) {
  var len = arr1.length + arr2.length;
  // step 1
  var leftNum = Math.floor(len / 2),
      rightNum = len - 1- leftNum;

  // step 2
  return pruneApproach(arr1, arr2, leftNum, 0, rightNum, 0);
}

function pruneApproach(arr1, arr2, leftNum, leftCnt, rightNum, rightCnt) {
  if (leftCnt == leftNum)
      return Math.min(arr1[0], arr2[0]);
  if (leftCnt == leftNum - 1)
      return Math.max(arr1[0], arr2[0]);
  if (rightCnt == rightNum)
      return Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);
  if (rightNum == rightNum - 1)
      return Math.min(arr1[arr1.length - 1], arr2[arr2.length - 1]);
  
  // step 2.1
  var mid1 = Math.floor(arr1.length / 2),
      mid2 = Math.floor(arr2.length / 2);

  // step 2.2
  if (arr1[mid1] == arr2[mid2]) return arr1[mid1];

  // make the variable arr1 to be the one that has the smaller median
  if (arr1[mid1] > arr2[mid2]) { 
    var tmpArr = arr2,
        tmpMid = mid2;

    arr2 = arr1;
    mid2 = mid1;
    arr1 = tmpArr;
    mid1 = tmpMid;
  }

  // step 2.3
  if (leftCnt + mid1 >= leftNum)
      return arr1[leftNum - leftCnt];
  if (rightCnt + arr2.length - 1 - mid2 >= rightNum)
      return arr2[arr2.length + rightCnt - rightNum - 1];

  // step 2.4
  return pruneApproach(
    arr1.slice(mid1),
    arr2.slice(0, mid2 + 1),
    leftNum, leftCnt + mid1,
    rightNum,
    rightCnt + arr2.length - 1 - mid2
  );
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = findMedian;
