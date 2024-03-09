/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(num) {
  const fizzBuzzResult = [];
  for (let i = 1; i <= num; i++) {
    let value = '';
    if (i % 3 === 0) {
      value += 'Fizz';
    }
    if (i % 5 === 0) {
      value += 'Buzz';
    }
    fizzBuzzResult.push(value || i);
  }
  return fizzBuzzResult;
}

/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArrayAlt(num) {
  const fizzBuzzResult = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzResult.push('FizzBuzz');
    } else if (i % 5 === 0) {
      fizzBuzzResult.push('Buzz');
    } else if (i % 3 === 0) {
      fizzBuzzResult.push('Fizz');
    } else {
      fizzBuzzResult.push(i);
    }
  }
  return fizzBuzzResult;
}

module.exports = fizzBuzzArray;
