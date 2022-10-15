const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0
  matrix.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === '^^') {
        count++
      }
    }
  })
  return count
}

// commit message edit just in case


module.exports = {
  countCats
};
