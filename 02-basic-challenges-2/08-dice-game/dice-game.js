function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations) {
  const results = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = getRandomArbitrary(1, 6);
    const dice2 = getRandomArbitrary(1, 6);
    const sum = dice1 + dice2;
    let result = '';

    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }
    results.push({dice1, dice2, sum, result});
  }
  return results;
}

module.exports = diceGameSimulation;
