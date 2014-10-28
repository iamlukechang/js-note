/**
 * Check prime
 *
 * Time:
 *  TODO
 *
 * Space:
 *  TODO
 *
 * Steps
 *  TODO
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(num) {
  var factor = 2,
      upperBound = Math.sqrt(num);

  while (factor <= upperBound) {
    if (num % factor == 0) {
      return false;
    } else {
      factor++;
    }
  }

  return true;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
