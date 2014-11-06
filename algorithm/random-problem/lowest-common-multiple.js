/**
 * Given two positive integers, find the lowest common multiple 
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

function lcm(num1, num2) {
  if (num1 == num2) return num1;

  return num1 * num2 / gcd(num1, num2);
}

function gcd(num1, num2) {
  if (num2 == 0) return num1;

  return gcd(num2, num1 % num2);
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = lcm;
