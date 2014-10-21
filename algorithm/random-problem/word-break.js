/**
 * Given a string and a dictionary of words, determine if the string can be
 * segmented into a space-separated sequence of one or more dictionary words.
 * For example, given "helloworld", ["hello", "world"], return true because
 * "helloworld" can be segmented as "hello world".
 *
 * Time:
 *   O(NM)
 *
 * Space:
 *   O(N)
 *
 * Steps
 *   1. Init the cache array with length one more than the string length,
 *      because it's caching the result of the "previous part"; cache of string
 *      k + 1 is the result of string from 0 to k
 *   2. Loop the string, and cache the result for the current position
 *     1. If the cached result is true, it means the previous part of the string
 *        can be segmented by the dictionary, loop the dictionary to find if any
 *        word can match the string start from the current position
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {string} str
 * @param {array} dct
 */
function breakWord(str, dct) {
  var cache = [true];
  var strLen = str.length,
      dctLen = dct.length;
  var wordLen;

  // step 1
  cache[strLen] = false;

  // step 2
  for (var i = 0; i < strLen; i++) {
    if (!cache[i]) continue;

    // step 2.1
    for (var j = 0; j < dctLen; j++) {
      wordLen = dct[j].length;
      if (str.substr(i, wordLen) === dct[j]) cache[i + wordLen] = true;
    }
  }

  return cache[strLen];
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = breakWord;
