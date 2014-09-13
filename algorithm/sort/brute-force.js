/**
 * Brute Force, sorting algorithm
 *
 * Time: 
 *   best O(NR), average O(NR), worst O(NR)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Find the largest number and the smallest number in the array // O(N)
 *   2. Enumerate all the integer between the largest and smallest // O(R)
 *     1. Enumerate to see if the array has it // O(N)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function bruteForce(arr) {
  var largest = arr[0],
      smallest = arr[0];
  var rst = [];

  // step 1
  for (var i = 1, len = arr.length; i < len; i++) {
    largest = Math.max(largest, arr[i]);
    smallest = Math.min(smallest, arr[i]);
  }

  // step 2
  for (var j = smallest; j <= largest; j++) {
    // step 2.1
    for (i = 0; i < len; i++) {
      if (arr[i] == j) rst.push(j);
    }
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = bruteForce;
