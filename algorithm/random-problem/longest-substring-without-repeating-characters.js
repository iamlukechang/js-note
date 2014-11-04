/**
 * Given a string, find the length of the longest substring without repeating
 * characters. For example, the longest substring without repeating letters for
 * "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest
 * substring is "b", with the length of 1.
 *
 * Time:
 *   O(N)
 *
 * Space:
 *   O(C)
 *
 * Steps
 *   1. Open a map for all the characters that appear in the string, and give
 *      init index -1
 *   2. Loop the string and cache the current nrcs and the longest nrcs so far
 *      in each iteration
 *     1. If the current character had appeared before and in the current nrcs,
 *        update the current nrcs to substring from the next character of the
 *        previous character that is same as the current character to the
 *        current character. If the current character had not appeared before
 *        or not in the current nrcs, the current nrcs length plus one.
 *     2. Compare the longest nrcs length so far and the current one
 *     3. Update the character index in the map.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(str) {
  var charIndex = {};
  var tmpSubstringLen = 0;
  var longestSubstringLen = 0;
  var tmpSubstringStart = 0;

  var i = 0,
      len = str.length;
  // step 1
  for (i = 0; i < len; i++) {
    if (!charIndex[str[i]]) charIndex[str[i]] = -1;
  }

  // step 2
  for (i = 0; i < len; i++) {
    // step 2.1
    if (charIndex[str[i]] > -1 && tmpSubstringStart <= charIndex[str[i]]) {
      tmpSubstringLen = i - charIndex[str[i]];
      tmpSubstringStart = charIndex[str[i]] + 1;
    } else {
      tmpSubstringLen++; 
    }

    // step 2.2
    longestSubstringLen = Math.max(longestSubstringLen, tmpSubstringLen);

    // step 2.3
    charIndex[str[i]] = i
  }

  return longestSubstringLen;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
