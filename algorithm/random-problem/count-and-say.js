/**
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n, generate the nth sequence.
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

function run(num) {
  var rstStr = '1';

  for (var i = 0; i < num; i++) {
    rstStr = generateCASStr(rstStr);
  }

  return rstStr;
}

function generateCASStr(str) {
  var cnt = '';
  var currentChar = '';
  var rst = '';

  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] !== currentChar) {
      rst += cnt + currentChar;
      currentChar = str[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  rst += cnt + currentChar;

  return rst;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
