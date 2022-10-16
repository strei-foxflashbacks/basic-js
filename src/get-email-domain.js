const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
const getEmailDomain = (email) => email.replace(/.+(@)/g, '')

// one day I'll stop using reg expr's...

module.exports = {
  getEmailDomain
};
