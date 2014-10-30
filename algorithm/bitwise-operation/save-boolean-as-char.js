/**
 * Given an array of 8 booleans, represent it as a character, the character 
 * should be able to be reversed to the array
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

function run(arr) {
  var bits = 0;

  for (var i = 0; i < 8; i++) {
    bits = bits * 10  + +arr[i];
  }

  return String.fromCharCode(parseInt(bits, 2));
}

function reverse(char) {
  var bits = char.charCodeAt(0).toString(2);;
  var arr = [];

  for (var i = 0; i < 8; i++) {
    arr[i] = !!parseInt(bits[i]);
  } 

  return arr;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  exports.run = run;
  exports.reverse = reverse;
}
