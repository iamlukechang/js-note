/**
 * Recover Extended Trees
 * There are trees(forest) that have been extended into a one-dimension array
 * using dfs, recover the array to the original forest.
 *
 * Example:
 *
 * There are trees a and b looks like:
 *
 *       a        b
 *      / \      /
 *     1   2    1
 *    / \
 *   x   y
 *
 * The given extended array looks like:
 *
 * [
 *   {name: 'a', type: 'node'},
 *   {name: 'a/1', type: 'node'},
 *   {name: 'a/1/x', type: 'leaf'},
 *   {name: 'a/1/y', type: 'leaf'},
 *   {name: 'a/2', type: 'leaf'},
 *   {name: 'b', type: 'node'},
 *   {name: 'b/1', type: 'leaf'}
 * ]
 *
 * We want the original tree structure like:
 *
 * [
 *   {
 *     name: 'a',
 *     type: 'node',
 *     children: [
 *       {
 *         name: 'a/1',
 *         type: 'node',
 *         children: [
 *           {
 *             name: 'a/1/x',
 *             type: 'leaf',
 *           },
 *           {
 *             name: 'a/1/y',
 *             type: 'leaf',
 *           }
 *         ]
 *       },
 *       {
 *         name: 'a/2',
 *         type: 'leaf',
 *       }
 *     ]
 *   },
 *   {
 *     name: 'b',
 *     type: 'node',
 *     children: [
 *       {
 *         name: 'b/1',
 *         type: 'leaf',
 *       }
 *     ]
 *   },
 * ]
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
  var roots = [];
  var stack = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    while (stack.length > 0 && !isChild(arr[i].name, stack[0].name)) {
      stack.shift();
    }
      
    if (stack.length == 0) {
      roots.push(arr[i]);
    } else {
      stack[0].children.push(arr[i]);
    }

    if (arr[i].type == 'node') {
      arr[i].children = [];
      stack.unshift(arr[i]);
    }
  }

  return roots;
}

function isChild(name1, name2) {
  return !name1.indexOf(name2);
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = run;
