/**
 * Continuously Longest Increasing Subsequence
 *
 * Time: 
 *   O(N)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Loop the sequence and cache the lis and tail of the sequence from 0 to
 *      the current member // O(N)
 *     1. If the current member can follow the previous member's tail, the
 *        current member's tail is the previous one plus the current member,
 *        otherwise, it's just the member itself
 *     2. If the previous member's lis is larger the the current member's tail,
 *        the current lis is the previous one, otherwise, it's the current tail
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} seq Sequence
 */
function lis(seq) {
  var cache = [
    {
      lisStart: 0,
      lisLen: 1,
      tailLen: 1
    }
  ];

  var len = seq.length;
  // step 1
  for (var i = 1; i < len; i++) {
    cache[i] = {};

    // step 1.1
    cache[i].tailLen = (seq[i] >= seq[i - 1]) ? cache[i - 1].tailLen + 1 : 1;

    // step 1.2
    if (cache[i - 1].lisLen > cache[i].tailLen) {
        cache[i].lisLen = cache[i - 1].lisLen;
        cache[i].lisStart = cache[i - 1].lisStart;
    } else {
        cache[i].lisLen = cache[i].tailLen;
        cache[i].lisStart = i + 1 - cache[i].tailLen;
    }
  }

  return seq.slice(cache[len - 1].lisStart, cache[len - 1].lisStart + cache[len - 1].lisLen);
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = lis;
