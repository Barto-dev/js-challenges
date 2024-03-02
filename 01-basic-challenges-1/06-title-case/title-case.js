/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = titleCase;
