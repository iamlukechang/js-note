/**
 * Unbounded Knapsack Problem
 *
 * Given a pack and a bounch of items(the available number of each item is
 * unlimited). The pack volume is limited, and each item has different value.
 * How to select items and put them in the pack to get the maximum value?
 *
 * Time: 
 *   O(NW)
 *
 * Space:
 *   O(W)
 *
 * Steps: 
 *   1. Set boundary condition
 *   2. Check if we have the solution in the cache
 *   3. Select an item as the last item available to be the target, and compare
 *      these two solutions, the larger one is the solution:
 *
 *      Note: Cache not only the value, but also the current target index,
 *            because we want to cache solution in two one dimension arrays O(W)
 *            instead of a two dimension array O(NW), image when we have
 *            solution for item2 with an available pack volume, it means we will
 *            no longer need the solution for item1 with the same pack volume
 *
 *     1. Drop this item: find the knapsack solution for the left items with
 *        same pack volume, move the target to the previous one
 *     2. Put this item in the pack: find the knapsack solution for the left
 *        items with the pack which reserved some volume for the current target.
 *
 *        Note: Notice here we are not moveing the target, because the item is
 *              unlimited, so we can put thie item again. This is the only
 *              difference with 0/1 knapsack.
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

/**
 * Use Dynamic Programming skill to find the maxmum value we can have, if we
 * want to know what items in the pack, just cache the selected item index
 *
 * Example:
 *
 *   knapsack([{value: 2, volume: 1}, {value: 3, volume: 2}], 2); // 4
 *
 * @param {array} itemArr Item list; each item is an object which has value
 *   and volume
 * @param {number} volume Available pack volume
 * @param {number} [itemIdx] The target item index 
 */
function knapsack(itemArr, volume, itemIdx, cache) {
  // initialize
  cache = cache || {};
  itemIdx = (typeof itemIdx === 'number') ? itemIdx : itemArr.length; 

  // step 1
  if (volume < 0) return Number.NEGATIVE_INFINITY;
  if (volume == 0 || itemIdx == 0) return 0;

  // step 2
  if (cache[volume] && cache[volume].itemIdx == itemIdx)
      return cache[volume].value;

  var targetItem = itemArr[itemIdx - 1];

  // step 3
  // this costs 2w space, so the space complexity is O(W)
  cache[volume] = {
    value: Math.max(
      // step 3.1
      knapsack(itemArr, volume, itemIdx - 1, cache),
      // step 3.2
      knapsack(itemArr, volume - targetItem.volume, itemIdx, cache) +
          targetItem.value
    ),
    itemIdx: itemIdx 
  };

  return cache[volume].value;
}

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = knapsack;
