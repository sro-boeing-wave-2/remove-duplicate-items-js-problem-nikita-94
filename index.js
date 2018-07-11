/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */

const removeDuplicateItems = arrDup => Array.from(new Set(arrDup));
module.exports = removeDuplicateItems;
