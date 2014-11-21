/**
 * Given two strings of the same length, determine if on is a scrambled string
 * of the other one.
 *
 * Given a string, we may represent it as a binary tree by partitioning it to
 * two non-empty substrings recursively; and to scramble the string, we may
 * choose any non-leaf node and swap its two children.
 *
 * Exmaple:
 *
 * Given "abcdef"
 *
 *               abcdef
 *                  |
 *     abc---------------------def
 *      |                       |
 *  a-------bc              d-------ef
 *           |                       |
 *       b-------c               e-------f
 *
 *
 * Swap children of nodes "abcdef", "abc", "ef":
 *
 *               dfebca
 *                  |
 *     dfe---------------------bca
 *      |                       |
 *  d-------fe             bc-------a
 *           |              |
 *       f-------e      b-------c
 *
 * And we san "dfebca" is a scrambled string of "abcdef"
 *
 *
 * Time:
 *   O(NlogN)
 *
 * Space:
 *   O(1)
 *
 * Steps
 *   1. Set boundary condition
 *   2. Check where the first character of target string locate in the prototype
 *      string, and we can determine if the first level swap is occurred.
 *
 *      Ex: The "d" of "dfebca" is locate in the right part of "abcdef"
 *
 *      Note: Even we use the native javascript indexOf method, it should still
 *            counts as an O(N). If we know the prototype string is a sorted
 *            sequence in an order, we can use binary search here to make it
 *            an O(logN)
 *
 *      2.1 If the target string is a scrambled string of the prototype string,
 *          each separated part must be a scrambled string as well, so let's
 *          recurse the step to each part
 *
 * The example above:
 *                                  
 *                                 (abc  +  def  dfe  +  bca)
 *                                   /       \   /         \
 *                                  /         \ /           \
 *                                 /           X             \
 *                                /           / \             \
 *                               /           /   \             \
 *                              /           /     \             \
 *                             /           /       \             \
 *                            /           /         \             \
 *                           /           /           \             \
 *                          /           /             \             \
 *                         /           /               \             \
 *                        /           /                 \             \
 *                       /           /                   \             \
 *                      /           /                     \             \
 *                     /           /                       \             \
 *                    /           /                         \             \
 *                   /           /                           \             \
 *                  /           /                             \             \
 *             (d  +  ef    d  +  fe)                      (a  +  bc     bc  +  a)
 *             /       \   /       \                         \   /       /       \
 *            /         \ /         \                         \ /       /         \
 *           /           X           \                         X       /           \
 *          /           / \           \                       / \     /             \
 *         /           /   \           \                     /   \   /               \
 *        /           /     \           \                   /     \ /                 \
 *       /           /       \           \                 /       X                   \
 *      /           /         \           \               /       / \                   \
 *     /           /           \           \             /       /   \                   \
 *   (d           d)        (e  +  f     f  +  e)      (bc     bc)   (a                   a)
 *                          /       \     \   /
 *                         /         \     \ /
 *                        /           \     X
 *                       /             \   / \
 *                      /               \ /   \
 *                     /                 X     \
 *                    /                 / \     \
 *                   /                 /   \     \
 *                  /                 /     \     \
 *                (e                 e)     (f     f)
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Given two strings of the sam length
 *
 * @param {string} proto
 * @param {string} str
 */
function run(proto, str) {
  var protoLen = proto.length,
      strLen = str.length;

  // Step 1
  if (proto == str) return true;

  var protoMid = Math.floor(protoLen / 2);
  var leftProto = proto.slice(0, protoMid),
      rightProto = proto.slice(protoMid);

  // step 2
  var strStart= proto.indexOf(str[0]); // O(N)
  if (strStart == -1) {
    return false;
  } else if (strStart < protoMid) {
    var strMid = leftProto.length;
    var leftStr = str.slice(0, strMid),
        rightStr = str.slice(strMid);

    // step 2.1
    return run(leftProto, leftStr) && run(rightProto, rightStr);
  } else {
    var strMid = rightProto.length;
    var leftStr = str.slice(0, strMid);
        rightStr = str.slice(strMid);

    // step 2.1
    return run(rightProto, leftStr) && run(leftProto, rightStr);
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
