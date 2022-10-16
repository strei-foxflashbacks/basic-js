const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = (members) => {
  if (!(Array.isArray(members))) {
    return false
  }
  else {
    const onlyStrings = members.filter(element => typeof(element) === 'string')
    return onlyStrings.map(element => element.replace(/\s+/g, '').substr(0, 1).toUpperCase()).sort().join('')
  }
}

module.exports = {
  createDreamTeam
};
