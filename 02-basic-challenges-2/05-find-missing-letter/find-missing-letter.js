/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr) {
  const startCharCode = arr[0].charCodeAt(0);
  for (let i = 1; i < arr.length; i++) {
    const expectedCharCode = startCharCode + i;
    if (arr[i].charCodeAt(0) !== expectedCharCode) {
      return String.fromCharCode(expectedCharCode);
    }
  }
  return '';
}

module.exports = findMissingLetter;
