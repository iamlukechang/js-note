/**
 * Given an array of integers, find two numbers such that they add up to a
 * specific target number.
 *
 * Time
 *   O(N)
 *
 * Space
 *   O(N)
 *
 * Steps
 *   1. Loop the array, in each iteration, find the partner's position in the
 *      cache; if cannot find it, cache self to see if partner can be found
 *      later.
 *
 */

function twoSum(arr, target) {
  var possiblePartnerPosition = {};
  var partner;

  // step 1
  for (var i = 0, len = arr.length; i < len; i++) {
    partner = target - arr[i];
    if (typeof possiblePartnerPosition[partner] !== 'undefined') {
      return [possiblePartnerPosition[partner], i]
    } else {
      possiblePartnerPosition[arr[i]] = i;
    }
  }

  return [];
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = twoSum;
