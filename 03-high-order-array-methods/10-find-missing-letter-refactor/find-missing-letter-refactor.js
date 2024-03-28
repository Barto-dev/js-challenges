/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
// lest optimal than with for loop as we can't break high-order array methods
function findMissingLetter(arr) {
  const startCharCode = arr[0].charCodeAt(0);
  return arr.reduce((acc, letter, index) => {
    const expectedCharCode = startCharCode + index;
    if (!acc && letter.charCodeAt(0) !== expectedCharCode) {
      return String.fromCharCode(expectedCharCode);
    }
    return acc;
  }, '');
}

module.exports = findMissingLetter;
