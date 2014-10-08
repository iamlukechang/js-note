/**
 * Dynamic Programming, Longest Increasing Subsequence
 *
 * Time: 
 *   O(NN)
 *
 * Space:
 *   O(N)
 *
 * Steps: 
 *   1. Prepare an array to cache the dynamic programming result
 *      (lis length and following) // O(N)
 *   2. Loop the sequence // O(N)
 *     1. Cache the member that has the longest lis so far
 *     2. Loop the rest members from the next one to the end, if it can follow
 *        the current member, which means it's larger the current member and its
 *        lis length can be increased, update it's cache result. // O(N)
 *   3. Recursively find the members in the longest lis and put it into the
 *      result array
 *
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} seq Sequence
 */
function lis(seq) {
  var cache = [];

  var i = 0;
  var len = seq.length;

  // step 1
  for (i = 0; i < len; i++) {
    cache[i] = {
      lisLen: 0,
      follow: -1
    };
  }

  var j;
  var indexCnt = 0;
  // step 2
  for (i = 0; i < len; i++) {
    // step 2.1
    if (cache[i].lisLen > cache[indexCnt].lisLen) indexCnt = i;

    // step 2.2
    for (j = i + 1; j < len; j++) {
      if (seq[j] > seq[i] && cache[i].lisLen + 1 > cache[j].lisLen) {
        cache[j].lisLen++;
        cache[j].follow = i;
      }
    }
  }

  // step 3
  var rst = [];
  while (typeof seq[indexCnt] !== 'undefined') {
    rst.unshift(seq[indexCnt]);
    indexCnt = cache[indexCnt].follow;
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = lis;
