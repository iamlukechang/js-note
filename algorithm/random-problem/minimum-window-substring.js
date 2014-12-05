/**
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 *
 * For example,
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * Minimum window is "BANC".
 *
 * Time:
 *   O(N) + O(CoN)
 *
 * Space:
 *   O(CoN) + O(C)
 * 
 *   Note:
 *     O(CoN): How many characters of t string can be found in the s string,
 *     which is actually an O(N) because 0 =< CoN <= N. We use O(CoN) just for
 *     easy understanding.
 *
 *     Please see the Note in the steps for why to open an O(CoN) helper array
 *     for this problem
 *
 *     O(C): How many characters can be found in t string
 *
 * Steps
 *
 *   Note:
 *     We use two pointers for this problem; one is start index of the window,
 *     the other one is end index of the window. Normally, we use two pointers
 *     like this:
 *
 *
 *     start                end
 *       |   moving~         |   moving~
 *       V----------->       V----------->
 *     x x x x x x x x x x x x x x x x x x x x ...
 *
 *
 *     However, in this case, we will get which character is our target while
 *     the end pointer is moving, so we cache their index for the start pointer
 *     to "jump" to the next target character:
 *
 *
 *     start
 *       |   moving~
 *       V----------->
 *     x x x x ...
 *       |  \
 *       |   \
 *       |    \             end
 *       |     \             |   moving~
 *       |      \            V----------->
 *     x x x x x x x x x x x x x x x x x x x x ...
 *
 *
 *     THIS IS REALLY A MINOR OPTIMIZATION which might only be helpful if we
 *     already know N will be much larger than CoN; For normal cases, we can
 *     just skip this method.
 *
 *
 *   1. Loop the t string and save information for each character
 *     1.1 Open an object which includes:
 *         number: how many of this character found in t string
 *         found: how many of this character found in the current window
 *                substring between the two pointers
 *   2. Loop the s string and find target characters (move the end pointer)
 *     2.1 Update the found property and push index into the helper array.
 *     2.2 Check if the current window has more target characters than t string
 *       2.2.1 Move the start pointer and update the found property because the
 *             start character is removed from the current window
 *       2.2.2 Check if the current window length is smaller than the cached
 *             one, than update it.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(s, t) {
  var sLen = s.length,
      tLen = t.length;
  
  // cache the current minimum window substring found
  var minWinSubStrStart = 0,
      minWinSubStrEnd = Infinity;

  var charInfo = {}; // O(2C) => O(C)
  var charIndexByOrder = []; // O(CoN)
  var startCharOrder = 0;

  // step 1
  for (var i = 0; i < tLen; i++) {
    // step 1.1
    if (!charInfo[t[i]]) {
      charInfo[t[i]] = {number: 1, found: 0};
    } else {
      charInfo[t[i]].number++;
    }
  }

  // step 2
  for (var i = 0; i < sLen; i++) {
    var currentCharInfo = charInfo[s[i]];

    if (currentCharInfo) {
      // step 2.1
      currentCharInfo.found++;
      charIndexByOrder.push(i);
      
      // step 2.2
      if (charIndexByOrder.length - startCharOrder > tLen) {
        // step 2.2.1
        var startCharInfo = charInfo[s[charIndexByOrder[startCharOrder]]];
        while (startCharInfo.found > startCharInfo.number) {
          startCharInfo.found--;
          startCharInfo = charInfo[s[charIndexByOrder[++startCharOrder]]];
        }

        // step 2.2.2
        if (i - charIndexByOrder[startCharOrder] < minWinSubStrEnd - minWinSubStrStart) {
          minWinSubStrStart = charIndexByOrder[startCharOrder];
          minWinSubStrEnd = i;
        }
      }
    }
  }

  return s.slice(minWinSubStrStart, minWinSubStrEnd + 1);
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
