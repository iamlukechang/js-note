/**
 * Brute Force, Longest Palindromic Subsequence
 *
 * Time: 
 *   O(NN)
 *
 * Space:
 *   O(1)
 *
 * Steps: 
 *   1. Enumerate all the element in the sequence // O(N)
 *     1. Check how many in the left side equal to the right side(doesn't
 *        include itselft) // O(N)
 *     2. Check how many in the left side equal to the right side(include
 *        itself) // O(N)
 *     3. Compare the larger one and the cached result
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array | string} seq A sequence
 */
function lps(seq) {
  var j, k;
  var result = {start: 0, size: 0};
  var start, size;

  // step 1
  for (var i = 0, len = seq.length; i < len; i++) {
    j = 0;
    k = 0;

    // step 1.1
    while (seq[i - j - 1] && seq[i + j + 1] && seq[i - j - 1] == seq[i + j + 1]) j++;
    // step 1.2
    while (seq[i - k - 1] && seq[i + k] && seq[i - k - 1] == seq[i + k]) k++;

    if (j >= k) {
      start = i - j;
      size = 2 * j + 1;
    } else {
      start = i - k;
      size = 2 * k;
    }

    // step 1.3
    if (result.size < size) {
      result.start = start;
      result.size = size;
    }
  }

  return seq.slice(result.start, result.start + result.size);
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = lps;
