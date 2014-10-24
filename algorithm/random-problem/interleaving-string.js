/**
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
 *
 * For example,
 * Given:
 * s1 = "aabcc",
 * s2 = "bbca",
 *
 * When s3 = "aabbcbcac", return true.
 * When s3 = "aabbbaccc", return false.
 *
 * Time:
 *   O(NM)
 *
 * Space:
 *   O(NM)
 *
 * Steps
 *   1. Create a (s1 length + 1) * (s2 length + 1) 2d array for dp caching
 *   2. Use dynamic programming to break s3 into substring that if
 *      s3.slice(0, i + j) can be formed by the interleaving of s1.slice(0, i)
 *      and s2.slice(0, j), and s3[i + j] is equals to either s1[i] or s2[j], 
 *      s3.slice(0, i + j + 1) can be formed by the interleaveing of
 *      s1.slice(0, i + 1) and s2.slice(0, j) or s1.slice(0, i) and s2.slice(0, j + 1)
 *     1. Set boundary
 *     2. If pointer i is smaller than s1 length + 1, check if s3[i + j]
 *        equals to s1[i]; if true, run dp function for cache[i + 1][j],
 *        otherwise, cache[i + 1][j] is false
 *     3. If cache[i + 1][j] is false and pointer j is smaller than s2 length + 1,
 *        check if s3[i + j] equals to s2[j]; if true, run dp function for
 *        cache[i][j + 1], otherwise, cache[i][j + 1] is false
 *     4. If both cache[i + 1][j] and cache[i][j + 1] are false, it means
 *        s3.slice(0, i + j + 1) cannot be formed, return false
 *
 *  Note: This dp is a top down dp with breaking question from the beginning,
 *        it's breaking the question of s3.slice(0) to s3[0] can be formed and
 *        a question of s3.slice(1), and breaking s3.slice(1) into s3[0] + s3[1]
 *        can be formed and a question of s3.slice(2), and so on...
 *
 *        For the example above, the steps looks like this:
 *
 *      ————————————————————————————————————————————————
 *
 *           j 0         1         2         3         4
 *
 *             0         b         b         c         a
 *      i
 *
 *      0 0    Q
 *
 *             |
 *             V
 *
 *      1 a    Q
 *
 *             |
 *             V
 *
 *      2 a    Q
 *
 *             |
 *             V
 *
 *      3 b    Q    —>   Q
 *
 *             |         |
 *             V         V
 *
 *      4 c    F         Q    —>   Q
 *
 *                       |         |
 *                       V         V
 *
 *      5 c              F         Q    —>   Q/F
 *
 *      ————————————————————————————————————————————————
 *
 *           j 0         1         2         3         4
 *
 *             0         b         b         c         a
 *      i
 *
 *      0 0    Q
 *
 *
 *
 *
 *      1 a    Q
 *
 *
 *
 *
 *      2 a    Q
 *
 *
 *
 *
 *      3 b    Q         Q
 *
 *
 *
 *
 *      4 c    F         Q         Q    —>   Q    —>   Q
 *
 *                                 ^         |cached   |
 *                                 |         V         V
 *
 *      5 c              F         F    <—   F         Q/T
 *
 *      ————————————————————————————————————————————————
 *
 *           j 0         1         2         3         4
 *
 *             0         b         b         c         a
 *      i
 *
 *      0 0    T
 *
 *             ^
 *             |
 *
 *      1 a    T
 *
 *             ^
 *             |
 *
 *      2 a    T
 *
 *             ^
 *             |
 *
 *      3 b    T    <—   T
 *
 *                       ^
 *                       |
 *
 *      4 c    F         T    <—   T    <—   T    <—   T
 *
 *                                                     ^
 *                                                     |
 *
 *      5 c              F         F         F         T
 *
 */

function run(s1, s2, s3) {
  var len1 = s1.length + 1,
      len2 = s2.length + 1;

  // step 1
  var cache = [];
  cache.length = len1;

  var i = 0, j = 0;
  for (i = 0; i < len1; i++) {
    cache[i] = [];
    cache[i].length = len2;
  }

  // step 2
  return dp(s1, s2, s3, cache, 0, 0);
}


function dp(s1, s2, s3, cache, i, j) {
  // step 2.1
  if (typeof cache[i][j] !== 'undefined') return cache[i][j];
  if (i + j == s3.length) return true;

  // step 2.2
  if (i < s1.length)
      if (cache[i + 1][j] = (s3[i + j] == s1[i]) ? dp(s1, s2, s3, cache, i + 1, j) : false)
          return true;

  // step 2.3
  if (j < s2.length)
      if (cache[i][j + 1] = (s3[i + j] == s2[j]) ? dp(s1, s2, s3, cache, i, j + 1) : false)
          return true;

  // step 2.4
  return false;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
