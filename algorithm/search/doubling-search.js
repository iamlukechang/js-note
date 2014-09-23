/**
 * Doubling Search, search algorithm
 *
 * From 1 to infinity, find a specific integer
 *
 * Time: 
 *   O(logN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Using power series of 2 to find a range // O(logN)
 *   2. If the target is 2^k, return it, if it's smaller than 2^k, using binary
 *      search to find the target between 2^(k - 1) and 2^k // O(logN)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {number} num Any integer from 1 to infinity
 */
function search(num) {
  var guess = 1;
  console.log('guess ' + guess);

  // step 1
  while (guess < num) {
    guess *= 2;
    console.log('guess ' + guess);
  }

  // step 2
  return (guess == num) ? guess : binarySearch(num, guess / 2, guess);
}

/**
 * @param {number} target The target we want to find 
 * @param {number} start The lower bound 
 * @param {number} end The upper bound
 */
function binarySearch(target, start, end) {
  // no boundary condition needed
  // it's guaranteed we will find the target in the range
  console.log('Looking for ' + target + ' between ' + start + ' and ' + end);

  var middle = Math.floor(start + end) / 2

  if (target > middle) {
    return binarySearch(target, middle, end);
  } else if (target < middle){
    return binarySearch(target, start, middle);
  } else {
    return middle;
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = search;
