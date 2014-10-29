/**
 * Find the first non repeating char in a string
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

function run(str) {
  var map = {};

  var char;

  var i = 0;
  var len = str.length;

  for (i = 0; i < len; i++) {
    char = str[i];

    if (typeof map[char] === 'undefined') {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  for (i = 0; i < len; i++) {
    char = str[i];

    if (map[char] == 1) return char;
  }

  return null;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
