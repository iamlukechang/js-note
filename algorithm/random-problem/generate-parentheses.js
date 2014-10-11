/**
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * ex: input 3, output "((()))", "(()())", "(())()", "()(())", "()()()"
 *
 * Steps:
 *   1. If left parenthesis counter is larger than 0, generate a new string
 *      with the current string plus a left parenthesis; if right parenthesis
 *      counter is larger than left parenthesis counter, do the same thing with
 *      right parenthesis.
 *
 */

function generate(num) {
  var rst = [];
  generateString(rst, '', num, num);

  return rst; 
}

function generateString(arr, str, leftCnt, rightCnt) {
  // step 1
  if (leftCnt == 0 && rightCnt == 0) {
    arr.push(str);
  } else {
    if (leftCnt > 0) generateString(arr, str + '(', leftCnt - 1, rightCnt);
    if (rightCnt > leftCnt) generateString(arr, str + ')', leftCnt, rightCnt - 1);
  }
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = generate;
