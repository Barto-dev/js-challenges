/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers) {
  return numbers.reduce((total, num) => {
    if (num % 2 === 0) {
      return total + num ** 2;
    } else {
      return total;
    }
  }, 0);
}

/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquaresShort(numbers) {
  return numbers
    .reduce((total, num) => num % 2 === 0 ? total + num ** 2 : total, 0);
}


/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquaresAlt(numbers) {
  return numbers
    .filter(num => num % 2 === 0)
    .map(num => num ** 2)
    .reduce((total, num) => num + total, 0);
}

module.exports = sumOfEvenSquares;
