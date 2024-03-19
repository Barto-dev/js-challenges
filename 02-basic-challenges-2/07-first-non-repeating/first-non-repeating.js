/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
// O(n)
function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const [char, count] of charCount) {
    if (count === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
