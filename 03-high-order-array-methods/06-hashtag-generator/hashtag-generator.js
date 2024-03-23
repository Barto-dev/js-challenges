/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str) {
  if (!str.trim()) {
    return false;
  }

  // trim whitespaces, tabs, new line chars
  const hash = str.split(/\s+/).reduce((acc, word) => {
    const hashWord = word.charAt(0).toUpperCase() + word.slice(1);
    return acc += hashWord;
  }, '#');

  return hash.length > 140 ? false : hash;
}

module.exports = generateHashtag;
