const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = (str) => str.replace(/([a-z])\1*/g, (i) => i.length > 1 ? i.length + i[0] : i[0])

module.exports = {
  encodeLine
};
