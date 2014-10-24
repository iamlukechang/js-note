/**
 * Given a set of distinct integers, return all possible subsets.
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
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} set A set
 */
function run(set) {
  var rst = [[]];

  var tmp;
  for (var i = 0, setLen = set.length; i < setLen; i++) {
    for (var j = 0, rstLen = rst.length; j < rstLen; j++) {
      tmp = rst[j].slice();
      tmp.push(set[i]);
      rst.push(tmp);
    }
  }

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
