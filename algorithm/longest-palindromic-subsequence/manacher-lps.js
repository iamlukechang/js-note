/**
 * Manacher's algorithm, Longest Palindromic Subsequence
 *
 * Time: 
 *   O(N)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Create a helper array which Inserts a special character between each
 *      sequence member // O(N)
 *   2. Loop the helper, and for each one, cache the current palindrome, and
 *      cache the center and right edge of the palindrome that has the farthest
 *      right edge so far // O(N)
 *     1. Find the mirror member of the cached center for the current member
 *     2. if the current member is in the cached right edge, compare the mirror
 *        member's radius and the distance from the current member to the cached 
 *        right edge, and choose the smaller one as the radius of the current
 *        member; if the current member is outside of the cached right edge,
 *        use 0 as the radius.
 *     3. If the current member's radius can be increased, update it.
 *
 *        Note: This step needs a while loop, but notice the while loop only
 *              happens when the mirror member's radius equals to distance from
 *              the current member to the cached right edge. Image that no matter
 *              the mirror member's radius is smaller or larger than the distance,
 *              the current member's radius cannot increased anymore; and once it
 *              increase, the cached center and right edge will be updated to the
 *              current one.
 *
 *              It's guaranteed that sum of all the while loop iterations will
 *              be no more than N, it's called "amortized O(1)". 
 *
 *     4. Update cached center and right edge if the current right edge is farther
 *   3. Find the largest one in the cached palindrome array // O(N)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array | string} seq A sequence
 */
function lps(seq) {
  // step 1
  var helper = createHelper(seq);
  var result = {index:0 ,edge: 0};
  var palindromeRadius = [];

  var center = rightEdge = 0;
  var i = 0,
      len = helper.length;
  var mirror;

  // step 2
  for (i = 0; i < len; i++) {
    // step 2.1
    mirror = 2 * center - rightEdge;
    // step 2.2
    palindromeRadius[i] = (rightEdge > i) ?
        Math.min(rightEdge - i, palindromeRadius[mirror]) : 0;

    // step 2.3
    while (typeof helper[i + palindromeRadius[i] + 1] !== 'undefined' &&
        typeof helper[i - palindromeRadius[i] - 1] !== 'undefined' &&
        helper[i + palindromeRadius[i] + 1] === helper[i - palindromeRadius[i] - 1])
            palindromeRadius[i]++;

    // step 2.4
    if (i + palindromeRadius[i] > rightEdge) {
      center = i;
      rightEdge = i + palindromeRadius[i];
    }
  }

  // step 3
  var result = {center: 0, radius: 0};  
  for (i = 0; i < len; i++) {
    if (palindromeRadius[i] > result.radius) {
      result.center = i;
      result.radius = palindromeRadius[i];
    }
  }

  var start = (result.center - result.radius) / 2
  return seq.slice(start, start + result.radius);
}

/**
 * Insert a character which doesn't exist in the input sequence
 * We use a # here
 *
 * @param {array | string} seq A sequence
 * @return {array} A sequence with a # between each member
 */
function createHelper(seq) {
  var helper = ['#'];
  for (var i = 0, len = seq.length; i < len; i++) {
    helper.push(seq[i]);
    helper.push('#');
  }

  return helper;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = lps;
