/**
 * Given an unsorted array, find the maximum difference between the successive
 * elements in its sorted form. Try to solve it in linear time/space. Return 0
 * if the array contains less than 2 elements. You may assume all elements in
 * the array are non-negative integers and fit in the 32-bit signed integer 
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
  var buckets = [];
  var max = -Infinity,
      min = Infinity;

  var len = arr.length;

  for (var i = 0; i < len; i++) {
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);

    buckets.push({min: Infinity, max: -Infinity});
  }

  var delta = (max - min) / (len - 1);

  for (var i = 0; i < len; i++) {
    var bucket = buckets[Math.floor((arr[i] - min) / delta)];

    bucket.max = Math.max(arr[i], bucket.max);
    bucket.min = Math.min(arr[i], bucket.min);
  }

  var maxGap = 0;
  var cacheMin = Infinity;

  for (var i = 0; i < len; i++) {
    var bucket = buckets[i];
    if (bucket.min == Infinity) continue;

    maxGap = Math.max(maxGap, bucket.max - bucket.min, bucket.min - cacheMin);

    cacheMin = bucket.max;
  }

  return maxGap;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
