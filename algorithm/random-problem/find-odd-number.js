/**
 * Given an array of integers, all the elements appear two or mupital of two
 * times except only one. Find that one odd element.
 *
 * Time:
 *   O(N)
 *
 * Space:
 *   O(1)
 *
 * Steps
 *   1. Loop the array and xor each element
 *
 */

function search(arr) {
  var rst = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    rst ^= arr[i];
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = search;
