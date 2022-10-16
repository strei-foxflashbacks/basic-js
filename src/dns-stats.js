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
  const flattened = [].concat(...domainSplit)
  for (let dom of flattened) {
    if (result[`.${dom}`] === undefined) {
    result[`.${dom}`] = 1
    } else {
    result[`.${dom}`]++
    }
  }
  return result
  // const newResult = {};
  // for (let i = 1; i < Object.keys(result).length; i++) {

  //     Object.keys(result).forEach(key => {
  //         const value = result[key];

  //         if (key === Object.keys(result)[i]) {
  //             newResult[Object.keys(result)[i - 1] + Object.keys(result)[i]] = value;
  //         } else {
  //             newResult[key] = value;
  //         }
  //     });
  //   }
  //   return newResult;
}
console.log(getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]))

module.exports = {
  getDNSStats
};
