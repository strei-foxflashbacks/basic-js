const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
const transform = (arr) => {
  let result = []
  if (!(Array.isArray(arr))) {
    throw Error('\'arr\' parameter must be an instance of the Array!')
  }
  else {
    let oldArr = arr.slice(0)
    for (let i = 0; i < oldArr.length; i++) {
      if (oldArr[i] === '--double-next') {
        i !== arr.length - 1 ? oldArr[i] = oldArr[i + 1] : oldArr.pop()
      }
      if (oldArr[i] === '--double-prev') {
        i !== 0 ? oldArr[i] = oldArr[i - 1] : oldArr.shift()
      }
      if (oldArr[i] === '--discard-prev') {
        i !== 0 ? oldArr.splice(oldArr[i - 2], 2) : oldArr.shift()
      }
      if (oldArr[i] === '--discard-next') {
        i !== arr.length - 1 ? oldArr.splice(oldArr[i - 1], 2) : oldArr.pop()
      }
    }
    return result.concat(oldArr)
  }
}

module.exports = {
  transform
};
