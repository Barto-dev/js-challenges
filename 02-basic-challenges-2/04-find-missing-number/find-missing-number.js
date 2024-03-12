/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr) {
  if (!arr) {
    return undefined;
  }

  if (arr.length === 0) {
    return 1;
  }

  const expectedLength = arr.length + 1;
  // Gauss Summation
  const expectedSum = expectedLength * (expectedLength + 1) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
