/**
 * Given two positive integers, find the greatest common divisor
 *
 * Time:
 *   TODO
 *
 * Space:
 *   TODO
 *
 * Steps
 *   TODO
 *
 */

function gcd(num1, num2) {
  if (num1 == num2) return num1;

  return euclidean(Math.max(num1, num2), Math.min(num1, num2));
}

function euclidean(largerNum, smallerNum) {
  var remainder = largerNum % smallerNum;

  if (remainder == 0) return smallerNum;

  return euclidean(smallerNum, remainder);
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = gcd;
