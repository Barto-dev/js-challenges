/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
const isValidIPv4 = (input) => {
  const ipv4Regex = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm;
  return ipv4Regex.test(input);
};

/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
const isValidIPv4Alt = (input) => {
  const octets = input.split('.');
  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && num.toString() === octet;
  });
};

module.exports = isValidIPv4;
