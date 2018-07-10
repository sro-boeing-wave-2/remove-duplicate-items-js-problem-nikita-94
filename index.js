/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */

const removeDuplicateItems = (arrDup) => {
  const arr = Array.from(new Set(arrDup));
  return arr;
};
module.exports = removeDuplicateItems;
