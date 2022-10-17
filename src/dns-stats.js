const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  let domainSplit = []
  domains.forEach(element => {
    domainSplit.push(element.split('.').reverse())
  })
  for (let i = 0; i < domainSplit.length; i++) {
    for (let j = 0; j < domainSplit[i].length; j++) {
      j !== 0 ? domainSplit[i][j] = domainSplit[i][j - 1] + '.' + domainSplit[i][j] : domainSplit[i][j]
    }
  }
  const flattened = [].concat(...domainSplit)
  for (let dom of flattened) {
    if (result[`.${dom}`] === undefined) {
    result[`.${dom}`] = 1
    } else {
    result[`.${dom}`]++
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
