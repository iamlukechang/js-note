/**
 * Given an array of integers, all the elements appear three or mutiple of three
 * times except only one that appears only one time. Find that one odd element.
 *
 * Time:
 *   O(N)
 *
 * Space:
 *   O(1)
 *
 * Steps
 *   1. Loop the array, in each iteration, cache two variables "one" that
 *      represents bits appeared 1, 4, 7, ... times and "two" that represents
 *      bits appeared 2, 5, 8, ... times
 *     1. Do AND of "one" and the current, we will get the "second" which
 *        represents the bits that appear at the second time; and then do OR of
 *        "second" and "two", we get "twoAndThird"
 *     2. Do XOR of "one" and the current, we get "oneAndThird"
 *     3. The common of the "oneAndThird" and "twoAndThird" represents the extra
 *        bits appear at the third time.
 *     4. Update the two cached variables by removing the "third" from
 *        "oneAndThird" and "twoAndThird"
 *
 *   Note: We actually don't need to define that many variables, this is just
 *         for easy understanding.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function run(arr) {
  var one = 0,
      two = 0;
  var oneAndThird, twoAndThird;
  var second, third;

  // step 1
  for (var i = 0, len = arr.length; i < len; i++) {
    // step 1
    second = one & arr[i];
    twoAndThird = two | second;

    // step 2
    oneAndThird = one ^ arr[i];

    // step 3
    third = oneAndThird & twoAndThird;

    // step 4
    one = oneAndThird & ~ third;
    two = twoAndThird & ~ third;
  }

  return one;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
