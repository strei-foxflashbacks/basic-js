const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

const getCommonCharacterCount = (s1, s2) => {
  let count = 0
  s1Arr = s1.split('')
  s2Arr = s2.split('')
  s1Arr.forEach(char => {
    if (s2Arr.includes(char)) {
      count++
      s2Arr.splice(s2Arr.indexOf(char), 1)
    }
  })
  return count
}

module.exports = {
  getCommonCharacterCount
};
