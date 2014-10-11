/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 * Ex: 1, 11, 121, 12321...
 *
 * Time:
 *   O(N)
 *
 * Space:
 *   O(1)
 *
 * Steps:
 *   1. Return false if the number is negative
 *   2. Use two pointers from the beginning and the end, if the digits are the
 *      same, move the pointers for one step. At the end, if the two pointers
 *      cannot meet each other, return false, otherwise return true;
 *
 */

/**
 * @param {number} num
 */
function isPalindrome(num) {
  // step 1
  if (num < 0) return false;

  // step 2
  var i = 0,
      j = num.toString().length - 1;
  while (i < j &&  getNthDigit(num, i) == getNthDigit(num, j)) {
    i++;
    j--;
  } 

  return i >= j;
}

/**
 * Get nth digit
 *
 * @param {number} number
 * @param {number} n
 * @return {number} The nth digit of number
 */
function getNthDigit(num, n) {
  return Math.floor(num / Math.pow(10, n)) % 10;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = isPalindrome;
