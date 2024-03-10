/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
// O(n)
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set1].filter((item) => set2.has(item));
}

/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
// O(n^2)
function arrayIntersectionAlt(arr1, arr2) {
  const arr1WithoutDuplicates = [...new Set(arr1)];
  const set2WithoutDuplicates = new Set(arr2);
  const intersection = [];
  for (let num of arr1WithoutDuplicates) {
    if (set2WithoutDuplicates.has(num)) {
      intersection.push(num);
    }
  }
  return intersection;
}

module.exports = arrayIntersection;
