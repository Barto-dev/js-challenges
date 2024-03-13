const alphabetArr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


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

/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetterAlt(arr) {
  if (!arr || !arr.length) {
    return '';
  }

  const indexes = arr.map((item) => alphabetArr.indexOf(item));
  const missedIndex = indexes.filter((item, index, arr) => {
    return arr[index + 1] - item === 2;
  })[0];
  if (missedIndex) {
    return alphabetArr[missedIndex + 1];
  }
}

module.exports = findMissingLetter;
