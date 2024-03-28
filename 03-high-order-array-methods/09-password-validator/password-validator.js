/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password) {
  const isValidLength = password.length >= 8;
  const hasDigit = /\d/.test(password);
  const hasUppercaseLetter = password !== password.toLowerCase();
  const hasLowercaseLetter = password !== password.toUpperCase();
  return isValidLength && hasDigit && hasLowercaseLetter && hasUppercaseLetter;
}

/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePasswordAlt(password) {
  const passwordArr = password.split('');
  const isValidLength = passwordArr.length >= 8;
  const hasNumber = passwordArr.some((char) => {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
  });
  const hasUppercaseLetter = passwordArr.some((char) => {
    return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
  });
  const hasLowercaseLetter = passwordArr.some((char) => {
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
  });

  return isValidLength && hasNumber && hasLowercaseLetter && hasUppercaseLetter;
}

module.exports = validatePassword;
