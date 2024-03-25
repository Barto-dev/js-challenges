/**
 * Analyzes car mileage data using high order array methods.
 * @param {Object[]} cars - An array of car objects.
 * @param {string} cars[].make - The manufacturer.
 * @param {string} cars[].model - The car model
 * @param {number} cars[].year - The car year
 * @param {number} cars[].mileage - The car mileage
 * @returns {Object} - An object containing calculated values.
 */
function analyzeCarMileage(cars) {
  const initialAcc = {
    highestMileageCar: cars[0],
    lowestMileageCar: cars[0],
    totalMileage: 0,
    averageMileage: 0,
  };

  const analyzedData = cars.reduce((acc, car) => {
    if (car.mileage > acc.highestMileageCar.mileage) {
      acc.highestMileageCar = car;
    } else if (car.mileage < acc.lowestMileageCar.mileage) {
      acc.lowestMileageCar = car;
    }
    acc.totalMileage += car.mileage;
    return acc;
  }, initialAcc);

  analyzedData.averageMileage = parseFloat((analyzedData.totalMileage / cars.length).toFixed(2));
  return analyzedData;
}

module.exports = analyzeCarMileage;
