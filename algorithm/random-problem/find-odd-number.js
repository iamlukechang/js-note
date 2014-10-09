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
 *   1. Find the distance of the smallest negative number and 0 // O(N)
 *   2. Loop the array and xor each element plus the distance as an offset, at
 *      the end, remove the offset of result is the answer
 *
 *      Note: the offset is used to make sure all the elements be nature numbers
 *            before xor them.
 *
 */

function search(arr) {
  var i = 0, len = arr.length;
  // step 1
  var offset = 0;
  for (i = 0; i < len; i++) {
    offset = Math.min(offset, arr[i]);
  }

  // step 2
  var rst = 0;
  for (i = 0; i < len; i++) {
    rst ^= arr[i] - offset;
  }

  return rst + offset;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = search;
