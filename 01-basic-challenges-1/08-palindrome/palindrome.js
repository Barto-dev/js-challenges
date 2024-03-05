/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}

const isAlphanumeric = (char) => {
  const code = char.charCodeAt(0);
  const isCharNumeric = code >= 48 && code <= 57;
  const isCharLowercaseLetter = code >= 97 && code <= 122;
  return isCharNumeric || isCharLowercaseLetter;
};

const removeNonAlphaNumeric = (str) => {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
};

const reverseStr = (str) => {
  let reversedStr = '';
  for (let i = str.length; i > 0; i--) {
    reversedStr += str[i - 1];
  }
  return reversedStr;
};

/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindromeAlt(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reversedStr = reverseStr(formattedStr);
  return formattedStr === reversedStr;
}

module.exports = isPalindrome;
