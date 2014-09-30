/**
 * Given an object and some propertiy names, iterate searching if property k 
 * exist in property k - 1. Ex:
 *
 * var obj = {
 *   a: {
 *     b: {
 *      c: {
 *       d: 1
 *      }
 *     }
 *   }
 * }; 
 *
 * search(obj, 'a', 'b', 'c', 'd'); // 1
 * search(obj, 'a', 'c'); // undefined
 *
 * Steps:
 *   1. loop the arguments start from 1(because argument 0 is the object)
 *     1. if the current object is undefined, return undefined to break the
 *        loop.
 *     2. If the current property exist in the current object, replace the
 *        current object with it, otherwise replace with undefined.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function search(obj) {
  // step 1
  for (var i = 1, len = arguments.length; i < len; i++) {
    // step 1.1
    if (typeof obj === 'undefined') return;

    // step 1.2
    obj = (typeof obj[arguments[i]] !== 'undefined') ?
      obj[arguments[i]] :
      undefined;
  }

  return obj;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = search;
