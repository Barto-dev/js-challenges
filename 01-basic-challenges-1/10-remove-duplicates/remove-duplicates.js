/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates1(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicatesAlt2(arr) {
  const arrWithoutDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const isUniq = !arrWithoutDuplicates.includes(item);
    if (isUniq) {
      arrWithoutDuplicates.push(item);
    }
  }
  return arrWithoutDuplicates;
}

module.exports = removeDuplicates;
