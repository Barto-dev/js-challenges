/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(str) {
  const words = str.toLowerCase().split(' ');
  const highestScoreWord = words.reduce((wordObj, word) => {
    const wordScore = [...word].reduce((score, char) => char.charCodeAt(0) + score, 0);
    if (wordScore > wordObj.score) {
      return {word: word, score: wordScore};
    }
    return wordObj;
  }, {word: '', score: 0});
  return highestScoreWord.word;
}

module.exports = highestScoringWord;
