/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length; i > 0; i--) {
    reversedStr += str[i - 1];
  }
  return reversedStr;
}

/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
const reverseStringAlt = (str) => str.split('').reverse().join('');


module.exports = reverseString;
