/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
// O(n)
function areAllCharactersUnique(str) {
  return new Set(str).size === str.length;
}

/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
// O(n^2) due to the use of indexOf inside the filter function
function areAllCharactersUniqueALT(str) {
  const nonUniqArr = str
    .split('')
    .filter((item, index) => str.indexOf(item) !== index);

  return nonUniqArr.length === 0;
}

module.exports = areAllCharactersUnique;
