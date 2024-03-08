const VOWELS_LIST = ['a', 'e', 'i', 'o', 'u'];

/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowelsAlt(str) {
  let count = 0;
  const formattedStr = str.toLowerCase();
  for (let i = 0; i < formattedStr.length; i++) {
    const isVowel = VOWELS_LIST.includes(formattedStr[i]);
    if (isVowel) {
      count += 1;
    }
  }
  return count;
}

/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  const matches = str.toLowerCase().match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

module.exports = countVowels;
