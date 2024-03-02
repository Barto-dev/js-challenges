/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr) {
  let maxNumber = arr[0];
  // because we already select a first element
  for (let i = 1; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

function findMaxNumberAlt(arr) {
  return Math.max(...arr);
}


module.exports = findMaxNumber;
