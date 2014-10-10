/**
 * Robinson Schensted Knuth Algorithm, Longest Increasing Subsequence
 *
 * Time: 
 *   O(NlogL)
 *
 * Space:
 *   O(N+L)
 *
 * Steps: 
 *   1. Loop the sequence and cache the most possible lis members in a helper
 *      array, and cache the most possible position for each sequence member
 *      in potentialPosition array. // O(N)
 *     1. Use binary search to find the a helper member which equals to the
 *        current sequence member or just right after it, replace the helper
 *        member with the current sequence member; if all the helper members
 *        are larger smaller than it, push it in the helper as the last member. 
 *        Also, cache the position in the potentialPosition array. // O(logL)
 *   2. Loop the potiontialPosition array from the end to the beginning, find
 *      the last one of each position, and the related members in the original
 *      sequence is the answer.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * @param {array} seq Sequence
 */
function lis(seq) {
  var helper = [seq[0]];
  var potentialPosition = [0];
  var current;
  var i, len = seq.length;

  // step 1
  for (var i = 1; i < len; i++) {
    // step 1.1
    current = binarySearchCeil(helper, seq[i], 0, helper.length);
    if (current != null) {
      potentialPosition[i] = current;
      helper[current] = seq[i];
    } else {
      potentialPosition[i] = helper.length;
      helper.push(seq[i]);
    }
  }

  var rst = [];
  var cnt = helper.length - 1;
  // step 2
  for (i = len - 1; i >= 0; i--) { 
    if (potentialPosition[i] == cnt) {
      rst[cnt] = seq[i];
      cnt--;
    }
  }

  return rst;
}

function binarySearchCeil(set, target, start, end) {
  var len = end - start;
  var middle = start + Math.floor(len / 2);

  if (typeof set[start] === 'undefined') return null;
  if (len == 0) return (set[start] > target) ? start : start + 1;

  if (target > set[middle]) return binarySearchCeil(set, target, middle + 1, end);
  if (target < set[middle]) return binarySearchCeil(set, target, start, middle);
  
  return middle;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = lis;
