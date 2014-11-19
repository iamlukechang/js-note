/**
 * Given a set of valued coins, we have infinite supply of each of them. Check
 * if we can use these coins to make a change for a specific value.
 *
 * For example:
 * Given a set [10, 5, 3] and a value 17, return true because
 * 17 = 3 + 3 + 3 + 3 + 5
 *
 * Time:
 *   O(NV)
 *
 * Space:
 *   O(V)
 *
 * Steps
 *   1. Set boundary condition
 *   2. Select one kind of coins from the set and we have two choices now:
 *     1. Use one of this kind of coin: do the dp for value minus this currunt
 *        coin value again
 *     2. Don't use anymore of this kind of coin: do the dp for the same value,
 *        but select the next kind of coins
 *
 *   Note: This is pretty similar to unbounded knapsack problem, the only
 *         different is knapsack problem always need to compare all the possible
 *         combination to find the maxmum value, the money change only need to
 *         get one "true"!
 *
 *
 *   So the example above looks like this:
 *
 *                                   17-10
 *                                     |
 *             ------------------------------------------------
 *             |                                              |
 *            7-10                                          17-5
 *             |                                              |
 *    -------------------                               -------
 *    |                 |                               |
 *  -3-10              7-5                            12-5
 *                      |                               |
 *          -------------------------             -------------
 *          |                       |             |           |
 *         2-5                     7-3           7-5        12-3
 *          |                       |          cached!      true!
 *    -------------           -------
 *    |           |           |
 *  -3-5         2-3         4-3
 *                |           |
 *          -------     -------
 *          |           |
 *        -1-3         1-3       
 *                      |
 *                 ------
 *                 |
 *               =2-3
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(set, val) {
  return dp(set, val, 0, {}).bool;
}

function dp(set, val, i, cache) {
  var currentNum = set[i];

  // step 1
  if (typeof currentNum === 'undefined' || val < 0) return {bool: false};
  if (val % currentNum == 0) return {bool: true};


  // step 2
  if (typeof cache[val] === 'undefined' || i < cache[val].i) {
    cache[val] = {
      // step 2.1 & step 2.2
      bool: dp(set, val - currentNum, i, cache).bool || dp(set, val, i + 1, cache).bool,
      i: i
    };
  }

  return cache[val];
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
