const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

const deleteDigit = (n) => {
  let digits = Array.from(String(n))
  return Math.max(...digits.map((element, i) => {
    let result = digits.slice()
    result.splice(i, 1)
    return parseInt(result.join(''))
  }))
}

module.exports = {
  deleteDigit
};
